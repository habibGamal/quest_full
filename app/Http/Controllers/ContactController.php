<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactFormRequest;
use App\Mail\ContactFormMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact');
    }

    public function store(ContactFormRequest $request)
    {
        $contactData = $request->validated();

        // Map service values to readable names
        $serviceMap = [
            'socialManagement' => 'Social Media Management',
            'socialDesign' => 'Social Media Designs',
            'mediaBuying' => 'Media Buying',
            'webDev' => 'Websites Development',
            'mediaProduction' => 'Media Production',
            'publicRelations' => 'Public Relations',
            'contentCreation' => 'Content Creation',
            'seo' => 'SEO',
            'other' => 'Other',
        ];

        $contactData['service'] = $serviceMap[$contactData['service']] ?? $contactData['service'];

        try {
            // Send email to the business owner/admin
            Mail::to(config('mail.from.address'))->send(new ContactFormMail($contactData));

            return back()->with('success', 'Thank you for your message! We\'ll get back to you within 24 hours.');

        } catch (\Exception $e) {
            Log::error('Contact form email failed: ' . $e->getMessage());

            return back()->with('error', 'Sorry, there was an error sending your message. Please try again later.');
        }
    }
}
