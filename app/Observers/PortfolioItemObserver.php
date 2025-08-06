<?php

namespace App\Observers;

use App\Models\PortfolioItem;
use Illuminate\Support\Facades\Storage;

class PortfolioItemObserver
{
    /**
     * Handle the PortfolioItem "updated" event.
     */
    public function updated(PortfolioItem $portfolioItem): void
    {
        // Check if image was changed and delete old file
        if ($portfolioItem->isDirty('image_url')) {
            $oldImage = $portfolioItem->getOriginal('image_url');
            $this->deleteImageFile($oldImage);
        }
    }

    /**
     * Handle the PortfolioItem "deleted" event.
     */
    public function deleted(PortfolioItem $portfolioItem): void
    {
        $this->deleteImageFile($portfolioItem->image_url);
    }

    /**
     * Handle the PortfolioItem "force deleted" event.
     */
    public function forceDeleted(PortfolioItem $portfolioItem): void
    {
        $this->deleteImageFile($portfolioItem->image_url);
    }

    /**
     * Delete image file if it exists and is not an external URL
     */
    private function deleteImageFile(?string $imagePath): void
    {
        if ($imagePath && !filter_var($imagePath, FILTER_VALIDATE_URL)) {
            Storage::disk('public')->delete($imagePath);
        }
    }
}
