# Diversity & Inclusion — Static Site

A simple, responsive static website promoting diversity and inclusion. Built with semantic HTML + Bootstrap 5 and lightweight vanilla JS for form validation, smooth scrolling and UI interactions.

## Features
- Responsive navbar with in-page smooth scroll
- Hero section with brand gradient and CTA
- Information cards (Diversity / Inclusion / Community)
- Enquiries section — responsive contact form with client-side validation and success prompt
- Footer with contact, newsletter subscribe, and social links; polished visuals (gradient, pills, shadows)
- Favicons and mobile web manifest placeholders

## How to run
1. Clone or copy the project folder to your machine.
2. Open `index.html` in any modern browser (no build step required).
   - Requires internet access to load Bootstrap from CDN.

## Files & structure
- index.html — main page (hero, information cards, enquiries form, footer)
- assets/
  - images/ — logo.png, favicon.png, form.png, placeholder.png, etc.
  - site.webmanifest (optional)
- (No server required for the current frontend behaviour)

## Enquiries form
- Client-side validation using HTML5 `required`, `type`, `pattern`.
- On successful submit the form shows an inline success alert and a browser confirmation prompt.
- Currently frontend-only — integrate with backend or form provider (e.g. Formspree, Netlify Forms, or your API endpoint) to persist messages.

## Newsletter subscribe
- Simple client-side validation; shows an alert when a valid email is provided.
- Replace with real subscription backend or third-party service to store addresses.

## Customization
- Brand color variables in the CSS: `--brand` and `--brand-dark`.
- Replace images in `assets/images/` (logo, form.png, favicon) to match your brand.
- Update social links and contact details in the footer.

## Accessibility & notes
- Form elements include labels and inline validation messages.
- Smooth scroll links focus the target element for keyboard users.
- Ensure alt text for images is meaningful when replacing assets.

## Contribution & License
This is a simple static template. Use, modify and extend as needed. Add a license file if you intend to publish.