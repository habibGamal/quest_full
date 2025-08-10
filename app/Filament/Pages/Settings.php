<?php

namespace App\Filament\Pages;

use App\Models\Setting;
use App\Services\SettingsService;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Support\Exceptions\Halt;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;

class Settings extends Page implements Forms\Contracts\HasForms
{
    use Forms\Concerns\InteractsWithForms;

    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';
    protected static ?string $navigationLabel = 'Settings';
    protected static ?string $title = 'Application Settings';
    protected static ?string $slug = 'settings';
    protected static string $view = 'filament.pages.settings';

    public ?array $data = [];

    protected SettingsService $settingsService;

    public function boot(SettingsService $settingsService): void
    {
        $this->settingsService = $settingsService;
    }

    public function mount(): void
    {
        $this->fillForm();
    }

    protected function fillForm(): void
    {
        $settings = $this->settingsService->getSettings();

        $this->form->fill([
            'logo_image' => Setting::where('key', 'logo_image')->first()?->value,
            'whatsapp_number' => $settings['whatsapp_number'] ?? '',
            'official_email' => $settings['official_email'] ?? '',
            'social_media_links' => $settings['social_media_links'] ?? [
                ['platform' => 'Facebook', 'url' => ''],
                ['platform' => 'Twitter', 'url' => ''],
                ['platform' => 'Instagram', 'url' => ''],
                ['platform' => 'LinkedIn', 'url' => ''],
                ['platform' => 'YouTube', 'url' => ''],
            ],
            'meta_description' => $settings['meta_description'] ?? '',
            'favicon' => Setting::where('key', 'favicon')->first()?->value,
            'title' => $settings['title'] ?? config('app.name'),
        ]);
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Basic Information')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->label('Site Title')
                            ->placeholder('Enter site title')
                            ->maxLength(255),

                        Forms\Components\Textarea::make('meta_description')
                            ->label('Meta Description')
                            ->placeholder('Enter meta description for SEO')
                            ->rows(3)
                            ->maxLength(160),
                    ])
                    ->columns(1),

                Forms\Components\Section::make('Branding')
                    ->schema([
                        Forms\Components\FileUpload::make('logo_image')
                            ->label('Logo Image')
                            ->image()
                            ->directory('settings/logos')
                            ->visibility('public')
                            ->imageResizeMode('contain')
                            ->imageEditor()
                            ->imageCropAspectRatio('16:9')
                            ->imageResizeTargetWidth('300')
                            ->imageResizeTargetHeight('150'),

                        Forms\Components\FileUpload::make('favicon')
                            ->label('Favicon')
                            ->image()
                            ->directory('settings/favicons')
                            ->visibility('public')
                            ->acceptedFileTypes(['image/x-icon', 'image/png', 'image/jpeg'])
                            ->imageEditor()
                            ->imageResizeTargetWidth('32')
                            ->imageResizeTargetHeight('32'),
                    ])
                    ->columns(2),

                Forms\Components\Section::make('Contact Information')
                    ->schema([
                        Forms\Components\TextInput::make('official_email')
                            ->label('Official Email')
                            ->email()
                            ->placeholder('contact@example.com'),

                        Forms\Components\TextInput::make('whatsapp_number')
                            ->label('WhatsApp Number')
                            ->placeholder('+1234567890')
                            ->tel(),
                    ])
                    ->columns(2),

                Forms\Components\Section::make('Social Media Links')
                    ->schema([
                        Forms\Components\Repeater::make('social_media_links')
                            ->label('')
                            ->schema([
                                Forms\Components\Select::make('platform')
                                    ->label('Platform')
                                    ->options([
                                        'Facebook' => 'Facebook',
                                        'Twitter' => 'Twitter',
                                        'Instagram' => 'Instagram',
                                        'LinkedIn' => 'LinkedIn',
                                        'YouTube' => 'YouTube',
                                        'TikTok' => 'TikTok',
                                        'Pinterest' => 'Pinterest',
                                        'Snapchat' => 'Snapchat',
                                    ])
                                    ->required(),

                                Forms\Components\TextInput::make('url')
                                    ->label('URL')
                                    ->url()
                                    ->placeholder('https://example.com')
                                    ->required(),
                            ])
                            ->columns(2)
                            ->defaultItems(0)
                            ->addActionLabel('Add Social Media Link')
                            ->reorderable(false)
                            ->collapsible(),
                    ]),
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        try {
            $data = $this->form->getState();

            // Handle file uploads for logo
            if (isset($data['logo_image']) && $data['logo_image'] instanceof TemporaryUploadedFile) {
                $data['logo_image'] = $this->settingsService->handleFileUpload($data['logo_image'], 'public', 'settings/logos');
            }

            // Handle file uploads for favicon
            if (isset($data['favicon']) && $data['favicon'] instanceof TemporaryUploadedFile) {
                $data['favicon'] = $this->settingsService->handleFileUpload($data['favicon'], 'public', 'settings/favicons');
            }

            $this->settingsService->updateSettings($data);

            Notification::make()
                ->title('Settings saved successfully!')
                ->success()
                ->send();

        } catch (Halt $exception) {
            return;
        }
    }

    protected function getFormActions(): array
    {
        return [
            Forms\Components\Actions\Action::make('save')
                ->label('Save Settings')
                ->submit('save')
                ->keyBindings(['mod+s']),
        ];
    }
}
