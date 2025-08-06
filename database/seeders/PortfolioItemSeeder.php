<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PortfolioItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $portfolioItems = [
            [
                'title' => [
                    'en' => 'TechFlow Rebrand',
                    'ar' => 'إعادة تصميم هوية تيك فلو'
                ],
                'description' => [
                    'en' => 'Complete brand transformation for a leading tech startup',
                    'ar' => 'تحويل كامل للهوية التجارية لشركة تقنية ناشئة رائدة'
                ],
                'category' => [
                    'en' => 'Branding',
                    'ar' => 'الهوية التجارية'
                ],
                'image_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
                'tags' => ['Brand Identity', 'Logo Design', 'Guidelines'],
                'results' => [
                    'en' => '40% increase in brand recognition',
                    'ar' => 'زيادة 40% في التعرف على العلامة التجارية'
                ],
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'title' => [
                    'en' => 'EcoLiving Campaign',
                    'ar' => 'حملة الحياة البيئية'
                ],
                'description' => [
                    'en' => 'Sustainable lifestyle brand social media strategy',
                    'ar' => 'استراتيجية وسائل التواصل الاجتماعي لعلامة نمط الحياة المستدام'
                ],
                'category' => [
                    'en' => 'Social Media',
                    'ar' => 'وسائل التواصل الاجتماعي'
                ],
                'image_url' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                'tags' => ['Social Strategy', 'Content Creation', 'Influencer Marketing'],
                'results' => [
                    'en' => '200% follower growth in 6 months',
                    'ar' => 'نمو 200% في المتابعين خلال 6 أشهر'
                ],
                'is_featured' => false,
                'sort_order' => 2,
            ],
            [
                'title' => [
                    'en' => 'FitZone Website',
                    'ar' => 'موقع فيت زون'
                ],
                'description' => [
                    'en' => 'Modern fitness website with booking system',
                    'ar' => 'موقع لياقة بدنية حديث مع نظام حجوزات'
                ],
                'category' => [
                    'en' => 'Web Design',
                    'ar' => 'تصميم الويب'
                ],
                'image_url' => 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
                'tags' => ['UI/UX Design', 'Development', 'E-commerce'],
                'results' => [
                    'en' => '300% increase in online bookings',
                    'ar' => 'زيادة 300% في الحجوزات الإلكترونية'
                ],
                'is_featured' => true,
                'sort_order' => 3,
            ],
            [
                'title' => [
                    'en' => 'FoodieHub Marketing',
                    'ar' => 'تسويق فودي هاب'
                ],
                'description' => [
                    'en' => 'Multi-platform advertising campaign for food delivery app',
                    'ar' => 'حملة إعلانية متعددة المنصات لتطبيق توصيل الطعام'
                ],
                'category' => [
                    'en' => 'Advertising',
                    'ar' => 'الإعلانات'
                ],
                'image_url' => 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
                'tags' => ['Google Ads', 'Facebook Ads', 'Campaign Management'],
                'results' => [
                    'en' => '450% ROI on ad spend',
                    'ar' => 'عائد استثمار 450% على الإنفاق الإعلاني'
                ],
                'is_featured' => false,
                'sort_order' => 4,
            ],
        ];

        foreach ($portfolioItems as $item) {
            \App\Models\PortfolioItem::create($item);
        }
    }
}
