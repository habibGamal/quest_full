<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            [
                'icon' => 'palette',
                'title' => [
                    'en' => 'Brand Identity & Design',
                    'ar' => 'هوية العلامة التجارية والتصميم'
                ],
                'description' => [
                    'en' => 'Create distinctive brand identities that resonate with your target audience and stand out in the marketplace.',
                    'ar' => 'إنشاء هويات علامة تجارية مميزة تتماشى مع جمهورك المستهدف وتبرز في السوق.'
                ],
                'category' => [
                    'en' => 'Creative Design',
                    'ar' => 'التصميم الإبداعي'
                ],
                'features' => [
                    'en' => [
                        'Logo & Brand Mark Design',
                        'Brand Guidelines & Standards',
                        'Color Palette & Typography',
                        'Business Card & Stationery Design'
                    ],
                    'ar' => [
                        'تصميم الشعار وعلامة العلامة التجارية',
                        'إرشادات ومعايير العلامة التجارية',
                        'لوحة الألوان والطباعة',
                        'تصميم بطاقة العمل والقرطاسية'
                    ]
                ],
                'sort_order' => 1,
            ],
            [
                'icon' => 'share2',
                'title' => [
                    'en' => 'Social Media Management',
                    'ar' => 'إدارة وسائل التواصل الاجتماعي'
                ],
                'description' => [
                    'en' => 'Comprehensive social media strategies that engage your audience and build meaningful connections.',
                    'ar' => 'استراتيجيات شاملة لوسائل التواصل الاجتماعي تشرك جمهورك وتبني علاقات ذات معنى.'
                ],
                'category' => [
                    'en' => 'Digital Marketing',
                    'ar' => 'التسويق الرقمي'
                ],
                'features' => [
                    'en' => [
                        'Content Creation & Curation',
                        'Social Media Strategy',
                        'Community Management',
                        'Influencer Partnerships'
                    ],
                    'ar' => [
                        'إنشاء المحتوى وتنظيمه',
                        'استراتيجية وسائل التواصل الاجتماعي',
                        'إدارة المجتمع',
                        'شراكات المؤثرين'
                    ]
                ],
                'sort_order' => 2,
            ],
            [
                'icon' => 'target',
                'title' => [
                    'en' => 'Digital Advertising',
                    'ar' => 'الإعلان الرقمي'
                ],
                'description' => [
                    'en' => 'Data-driven advertising campaigns that maximize your ROI and reach your ideal customers.',
                    'ar' => 'حملات إعلانية مدفوعة بالبيانات تعظم عائد الاستثمار وتصل إلى عملائك المثاليين.'
                ],
                'category' => [
                    'en' => 'Paid Marketing',
                    'ar' => 'التسويق المدفوع'
                ],
                'features' => [
                    'en' => [
                        'Google Ads Management',
                        'Facebook & Instagram Ads',
                        'Campaign Optimization',
                        'Performance Analytics'
                    ],
                    'ar' => [
                        'إدارة إعلانات جوجل',
                        'إعلانات فيسبوك وإنستغرام',
                        'تحسين الحملات',
                        'تحليل الأداء'
                    ]
                ],
                'sort_order' => 3,
            ],
            [
                'icon' => 'code',
                'title' => [
                    'en' => 'Web Development',
                    'ar' => 'تطوير الويب'
                ],
                'description' => [
                    'en' => 'Modern, responsive websites that deliver exceptional user experiences and drive business results.',
                    'ar' => 'مواقع ويب حديثة ومتجاوبة توفر تجارب مستخدم استثنائية وتحقق نتائج تجارية.'
                ],
                'category' => [
                    'en' => 'Development',
                    'ar' => 'التطوير'
                ],
                'features' => [
                    'en' => [
                        'Custom Website Development',
                        'E-commerce Solutions',
                        'Mobile-First Design',
                        'Performance Optimization'
                    ],
                    'ar' => [
                        'تطوير مواقع مخصصة',
                        'حلول التجارة الإلكترونية',
                        'تصميم يركز على الجوال',
                        'تحسين الأداء'
                    ]
                ],
                'sort_order' => 4,
            ],
        ];

        foreach ($services as $service) {
            \App\Models\Service::create($service);
        }
    }
}
