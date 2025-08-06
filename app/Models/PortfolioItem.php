<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Translatable\HasTranslations;

class PortfolioItem extends Model
{
    use HasFactory, HasTranslations;

    protected $fillable = [
        'title',
        'description',
        'category',
        'image_url',
        'tags',
        'results',
        'is_featured',
        'sort_order',
        'is_active',
    ];

    public $translatable = [
        'title',
        'description',
        'category',
        'results',
    ];

    protected $casts = [
        'title' => 'array',
        'description' => 'array',
        'category' => 'array',
        'tags' => 'array',
        'results' => 'array',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order')->orderBy('created_at', 'desc');
    }

    // Accessor to get the full URL for the image
    public function getImageAttribute()
    {
        if ($this->image_url) {
            // If it's already a full URL (starts with http), return as is
            if (filter_var($this->image_url, FILTER_VALIDATE_URL)) {
                return $this->image_url;
            }
            // Otherwise, it's a storage path, so get the full URL
            return asset('storage/' . $this->image_url);
        }
        return null;
    }
}
