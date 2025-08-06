<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PortfolioItemResource\Pages;
use App\Filament\Resources\PortfolioItemResource\RelationManagers;
use App\Models\PortfolioItem;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PortfolioItemResource extends Resource
{
    protected static ?string $model = PortfolioItem::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('Translations')
                    ->tabs([
                        Forms\Components\Tabs\Tab::make('English')
                            ->schema([
                                Forms\Components\TextInput::make('title.en')
                                    ->label('Title (English)')
                                    ->required()
                                    ->maxLength(255),
                                Forms\Components\Textarea::make('description.en')
                                    ->label('Description (English)')
                                    ->required()
                                    ->rows(3),
                                Forms\Components\TextInput::make('category.en')
                                    ->label('Category (English)')
                                    ->required()
                                    ->maxLength(255),
                                Forms\Components\Textarea::make('results.en')
                                    ->label('Results (English)')
                                    ->required()
                                    ->rows(2),
                            ]),
                        Forms\Components\Tabs\Tab::make('Arabic')
                            ->schema([
                                Forms\Components\TextInput::make('title.ar')
                                    ->label('Title (Arabic)')
                                    ->required()
                                    ->maxLength(255),
                                Forms\Components\Textarea::make('description.ar')
                                    ->label('Description (Arabic)')
                                    ->required()
                                    ->rows(3),
                                Forms\Components\TextInput::make('category.ar')
                                    ->label('Category (Arabic)')
                                    ->required()
                                    ->maxLength(255),
                                Forms\Components\Textarea::make('results.ar')
                                    ->label('Results (Arabic)')
                                    ->required()
                                    ->rows(2),
                            ]),
                    ])
                    ->columnSpanFull(),
                Forms\Components\FileUpload::make('image_url')
                    ->label('Portfolio Image')
                    ->image()
                    ->required()
                    ->directory('portfolio')
                    ->disk('public')
                    ->visibility('public')
                    ->maxSize(5120) // 5MB
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp', 'image/jpg'])
                    ->imageEditor()
                    ->imageEditorAspectRatios([
                        '16:9',
                        '4:3',
                        '1:1',
                    ])
                    ->imageResizeMode('cover')
                    ->imageCropAspectRatio('16:9')
                    ->imageResizeTargetWidth('1200')
                    ->imageResizeTargetHeight('675')
                    ->optimize('webp')
                    ->columnSpanFull(),
                Forms\Components\TagsInput::make('tags')
                    ->label('Tags')
                    ->placeholder('Add tags...'),
                Forms\Components\Toggle::make('is_featured')
                    ->label('Featured')
                    ->default(false),
                Forms\Components\Toggle::make('is_active')
                    ->label('Active')
                    ->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('Title')
                    ->searchable()
                    ->sortable()
                    ->formatStateUsing(fn ($record) => $record->getTranslation('title', 'en')),
                Tables\Columns\TextColumn::make('category')
                    ->label('Category')
                    ->searchable()
                    ->sortable()
                    ->formatStateUsing(fn ($record) => $record->getTranslation('category', 'en')),
                Tables\Columns\ImageColumn::make('image_url')
                    ->label('Image')
                    ->disk('public')
                    ->square()
                    ->defaultImageUrl(url('/images/placeholder.jpg')),
                Tables\Columns\IconColumn::make('is_featured')
                    ->label('Featured')
                    ->boolean(),
                Tables\Columns\IconColumn::make('is_active')
                    ->label('Active')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Created')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('is_featured')
                    ->label('Featured'),
                Tables\Filters\TernaryFilter::make('is_active')
                    ->label('Active'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->reorderable('sort_order')
            ->defaultSort('sort_order', 'asc');
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPortfolioItems::route('/'),
            'create' => Pages\CreatePortfolioItem::route('/create'),
            'edit' => Pages\EditPortfolioItem::route('/{record}/edit'),
        ];
    }
}
