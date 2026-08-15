# Appointment conversion measurement

The website emits the following appointment-intent events from
`assets/conversion-events.js`:

| Event | Meaning |
| --- | --- |
| `click_call` | A visitor selected a tracked telephone link |
| `click_whatsapp` | A visitor selected a tracked WhatsApp appointment link |
| `click_directions` | A visitor opened the KMCH map link |
| `click_email` | A visitor selected the profile email link |

Each event contains only `event_category`, `placement`, and `page_path`. Do not
add names, phone numbers, symptoms, diagnoses, WhatsApp message text, link
destinations, or other personal or medical information.

## Activate reporting

The event layer supports Google Analytics/Google Tag Manager through `gtag` or
`dataLayer`, and Plausible through its custom-event API. An approved analytics
account and identifier must be supplied before events can leave the browser and
appear in reports.

After connecting the approved provider:

1. Mark `click_call` and `click_whatsapp` as key conversion events.
2. Keep directions and email as supporting engagement events.
3. Verify each event in the provider's real-time/debug view on mobile and desktop.
4. Report conversion rate as appointment-intent events divided by landing-page
   sessions, not Search Console impressions.
5. Confirm booked appointments separately in the clinic workflow; a click is
   not proof that an appointment was completed.

## Attribution

Use this website URL in the Google Business Profile website field:

`https://drdurairajarjunan.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`

If KMCH supplies a verified doctor-specific booking URL, add it as the
appointment link and track it with `click_appointment`. Do not use an unofficial
directory booking URL.

## Search Console comparison

The current baseline export ends on 2026-08-13, before the specialist-page and
conversion release. Compare a complete post-indexing 28-day period with the
preceding matched period. Review query, page, country, device, CTR, and average
position together; avoid rewriting titles based on a few days of data.
