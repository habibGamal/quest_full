<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Translatable\HasTranslations;

class Service extends Model
{
    use HasFactory, HasTranslations;

    protected $fillable = [
        'icon',
        'title',
        'description',
        'features',
        'category',
        'sort_order',
        'is_active',
    ];

    public $translatable = [
        'title',
        'description',
        'category',
        'features',
    ];

    protected $casts = [
        'title' => 'array',
        'description' => 'array',
        'category' => 'array',
        'features' => 'array',
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order')->orderBy('created_at', 'desc');
    }
}
