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
                'icon' => 'share2',
                'title' => [
                    'en' => 'Social Media Management',
                    'ar' => 'إدارة وسائل التواصل الاجتماعي'
                ],
                'description' => [
                    'en' => 'We manage your social media platforms with strategic planning, publishing, and engagement to grow your audience and build brand loyalty.',
                    'ar' => 'نحن ندير منصات التواصل الاجتماعي الخاصة بك مع التخطيط الاستراتيجي والنشر والمشاركة لتنمية جمهورك وبناء الولاء للعلامة التجارية.'
                ],
                'category' => [
                    'en' => 'Digital Marketing',
                    'ar' => 'التسويق الرقمي'
                ],
                'features' => [
                    'en' => [
                        ['feature' => 'Social Media Strategy'],
                        ['feature' => 'Community Management'],
                        ['feature' => 'Scheduling'],
                        ['feature' => 'Engagement'],
                        ['feature' => 'Performance Reporting']
                    ],
                    'ar' => [
                        ['feature' => 'استراتيجية وسائل التواصل الاجتماعي'],
                        ['feature' => 'إدارة المجتمع'],
                        ['feature' => 'الجدولة'],
                        ['feature' => 'المشاركة'],
                        ['feature' => 'تقارير الأداء']
                    ]
                ],
                'sort_order' => 1,
            ],
            [
                'icon' => 'palette',
                'title' => [
                    'en' => 'Social Media Designs',
                    'ar' => 'تصاميم وسائل التواصل الاجتماعي'
                ],
                'description' => [
                    'en' => 'Eye-catching, brand-aligned social media creatives designed to capture attention and increase engagement across all platforms.',
                    'ar' => 'إبداعات وسائل التواصل الاجتماعي الجذابة والمتوافقة مع العلامة التجارية المصممة لجذب الانتباه وزيادة المشاركة عبر جميع المنصات.'
                ],
                'category' => [
                    'en' => 'Creative Design',
                    'ar' => 'التصميم الإبداعي'
                ],
                'features' => [
                    'en' => [
                        ['feature' => 'Custom Visual Posts'],
                        ['feature' => 'Motion Graphics'],
                        ['feature' => 'Platform-Specific Templates'],
                        ['feature' => 'Brand Integration']
                    ],
                    'ar' => [
                        ['feature' => 'منشورات بصرية مخصصة'],
                        ['feature' => 'الرسوم المتحركة'],
                        ['feature' => 'قوالب خاصة بالمنصة'],
                        ['feature' => 'دمج العلامة التجارية']
                    ]
                ],
                'sort_order' => 2,
            ],
            [
                'icon' => 'target',
                'title' => [
                    'en' => 'Media Buying',
                    'ar' => 'شراء الإعلانات'
                ],
                'description' => [
                    'en' => 'Maximize ROI with data-driven media buying strategies that place your brand in front of the right audience at the right time.',
                    'ar' => 'تعظيم العائد على الاستثمار مع استراتيجيات شراء الإعلانات المدفوعة بالبيانات التي تضع علامتك التجارية أمام الجمهور المناسب في الوقت المناسب.'
                ],
                'category' => [
                    'en' => 'Paid Marketing',
                    'ar' => 'التسويق المدفوع'
                ],
                'features' => [
                    'en' => [
                        ['feature' => 'Meta Ads'],
                        ['feature' => 'Google Ads'],
                        ['feature' => 'TikTok Ads'],
                        ['feature' => 'Snapchat Ads'],
                        ['feature' => 'LinkedIn Ads'],
                        ['feature' => 'E-Commerce Audience Targeting'],
                        ['feature' => 'Campaign Optimization']
                    ],
                    'ar' => [
                        ['feature' => 'إعلانات ميتا'],
                        ['feature' => 'إعلانات جوجل'],
                        ['feature' => 'إعلانات تيك توك'],
                        ['feature' => 'إعلانات سناب شات'],
                        ['feature' => 'إعلانات لينكد إن'],
                        ['feature' => 'استهداف جمهور التجارة الإلكترونية'],
                        ['feature' => 'تحسين الحملات']
                    ]
                ],
                'sort_order' => 3,
            ],
            [
                'icon' => 'code',
                'title' => [
                    'en' => 'Websites Development',
                    'ar' => 'تطوير المواقع الإلكترونية'
                ],
                'description' => [
                    'en' => 'Custom, responsive websites that combine sleek design with powerful functionality — built to convert and scale with your business.',
                    'ar' => 'مواقع ويب مخصصة ومتجاوبة تجمع بين التصميم الأنيق والوظائف القوية - مبنية للتحويل والتوسع مع عملك.'
                ],
                'category' => [
                    'en' => 'Development',
                    'ar' => 'التطوير'
                ],
                'features' => [
                    'en' => [
                        ['feature' => 'UX/UI Design'],
                        ['feature' => 'Responsive Development'],
                        ['feature' => 'E-commerce'],
                        ['feature' => 'CMS Integration'],
                        ['feature' => 'Speed Optimization']
                    ],
                    'ar' => [
                        ['feature' => 'تصميم تجربة المستخدم / واجهة المستخدم'],
                        ['feature' => 'التطوير المتجاوب'],
                        ['feature' => 'التجارة الإلكترونية'],
                        ['feature' => 'تكامل نظام إدارة المحتوى'],
                        ['feature' => 'تحسين السرعة']
                    ]
                ],
                'sort_order' => 4,
            ],
            [
                'icon' => 'video',
                'title' => [
                    'en' => 'Media Production',
                    'ar' => 'إنتاج الوسائط'
                ],
                'description' => [
                    'en' => 'Professional video and photography production tailored to tell your brand story and connect with your audience on a deeper level.',
                    'ar' => 'إنتاج فيديو وتصوير فوتوغرافي احترافي مصمم لسرد قصة علامتك التجارية والتواصل مع جمهورك على مستوى أعمق.'
                ],
                'category' => [
                    'en' => 'Creative Production',
                    'ar' => 'الإنتاج الإبداعي'
                ],
                'features' => [
                    'en' => [
                        ['feature' => 'Video Shooting'],
                        ['feature' => 'Editing'],
                        ['feature' => 'Animation'],
                        ['feature' => 'Photography'],
                        ['feature' => 'Short-Form Content (Reels, TikToks)']
                    ],
                    'ar' => [
                        ['feature' => 'تصوير الفيديو'],
                        ['feature' => 'المونتاج'],
                        ['feature' => 'الرسوم المتحركة'],
                        ['feature' => 'التصوير الفوتوغرافي'],
                        ['feature' => 'المحتوى قصير الشكل (ريلز، تيك توكس)']
                    ]
                ],
                'sort_order' => 5,
            ],
            [
                'icon' => 'megaphone',
                'title' => [
                    'en' => 'Public Relations',
                    'ar' => 'العلاقات العامة'
                ],
                'description' => [
                    'en' => 'Build a credible, visible brand through strategic PR that amplifies your voice across media outlets, influencers, and online platforms.',
                    'ar' => 'بناء علامة تجارية موثوقة ومرئية من خلال العلاقات العامة الاستراتيجية التي تضخم صوتك عبر وسائل الإعلام والمؤثرين والمنصات الرقمية.'
                ],
                'category' => [
                    'en' => 'Public Relations',
                    'ar' => 'العلاقات العامة'
                ],
                'features' => [
                    'en' => [
                        ['feature' => 'Press Releases'],
                        ['feature' => 'Influencer Outreach'],
                        ['feature' => 'Media Coverage'],
                        ['feature' => 'Reputation Management']
                    ],
                    'ar' => [
                        ['feature' => 'البيانات الصحفية'],
                        ['feature' => 'التواصل مع المؤثرين'],
                        ['feature' => 'التغطية الإعلامية'],
                        ['feature' => 'إدارة السمعة']
                    ]
                ],
                'sort_order' => 6,
            ],
            [
                'icon' => 'edit3',
                'title' => [
                    'en' => 'Content Creation',
                    'ar' => 'إنشاء المحتوى'
                ],
                'description' => [
                    'en' => 'We craft impactful content — from copy to visuals — that drives conversations, clicks, and conversions.',
                    'ar' => 'نصنع محتوى مؤثر - من النصوص إلى الصور - يقود المحادثات والنقرات والتحويلات.'
                ],
                'category' => [
                    'en' => 'Content Marketing',
                    'ar' => 'تسويق المحتوى'
                ],
                'features' => [
                    'en' => [
                        ['feature' => 'Blog Writing'],
                        ['feature' => 'Visual Content'],
                        ['feature' => 'Scripts'],
                        ['feature' => 'Storyboards'],
                        ['feature' => 'Branded Content']
                    ],
                    'ar' => [
                        ['feature' => 'كتابة المدونات'],
                        ['feature' => 'المحتوى البصري'],
                        ['feature' => 'النصوص'],
                        ['feature' => 'اللوحات القصصية'],
                        ['feature' => 'المحتوى المعلم بالعلامة التجارية']
                    ]
                ],
                'sort_order' => 7,
            ],
            [
                'icon' => 'search',
                'title' => [
                    'en' => 'SEO (Search Engine Optimization)',
                    'ar' => 'تحسين محركات البحث'
                ],
                'description' => [
                    'en' => 'Boost your visibility and traffic with powerful SEO strategies built to rank your website on search engines and generate quality leads.',
                    'ar' => 'عزز رؤيتك وحركة المرور مع استراتيجيات تحسين محركات البحث القوية المبنية لترتيب موقعك الإلكتروني في محركات البحث وتوليد عملاء محتملين عالي الجودة.'
                ],
                'category' => [
                    'en' => 'SEO & Analytics',
                    'ar' => 'تحسين محركات البحث والتحليلات'
                ],
                'features' => [
                    'en' => [
                        ['feature' => 'On-Page SEO'],
                        ['feature' => 'Technical SEO'],
                        ['feature' => 'Keyword Research'],
                        ['feature' => 'Link Building'],
                        ['feature' => 'Performance Reporting']
                    ],
                    'ar' => [
                        ['feature' => 'تحسين محركات البحث داخل الصفحة'],
                        ['feature' => 'تحسين محركات البحث التقني'],
                        ['feature' => 'البحث عن الكلمات المفتاحية'],
                        ['feature' => 'بناء الروابط'],
                        ['feature' => 'تقارير الأداء']
                    ]
                ],
                'sort_order' => 8,
            ],
            [
                'icon' => 'users',
                'title' => [
                    'en' => 'Account Management',
                    'ar' => 'إدارة الحسابات'
                ],
                'description' => [
                    'en' => 'Dedicated account managers who serve as your strategic partners — ensuring smooth communication, reporting, and execution of all campaigns.',
                    'ar' => 'مديرو حسابات مخصصون يعملون كشركاء استراتيجيين لك - يضمنون التواصل السلس والتقارير وتنفيذ جميع الحملات.'
                ],
                'category' => [
                    'en' => 'Client Services',
                    'ar' => 'خدمات العملاء'
                ],
                'features' => [
                    'en' => [
                        ['feature' => 'Strategy Alignment'],
                        ['feature' => 'Client Communication'],
                        ['feature' => 'Performance Tracking'],
                        ['feature' => 'Monthly Reporting']
                    ],
                    'ar' => [
                        ['feature' => 'توافق الاستراتيجية'],
                        ['feature' => 'التواصل مع العملاء'],
                        ['feature' => 'تتبع الأداء'],
                        ['feature' => 'التقارير الشهرية']
                    ]
                ],
                'sort_order' => 9,
            ],
        ];

        foreach ($services as $service) {
            \App\Models\Service::create($service);
        }
    }
}
