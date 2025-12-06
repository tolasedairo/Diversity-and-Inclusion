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

## Credits & AI Assistance

This project was developed with significant assistance from **GitHub Copilot** (powered by Claude Sonnet 4.5).

### Extent of AI Usage
AI assistance was used extensively throughout the development process for:

- **CSS Architecture & Styling**: Generation of responsive layouts, custom CSS variables, card hover effects, gradient backgrounds, and footer styling
- **JavaScript Functionality**: Implementation of smooth scrolling, form validation logic, success notifications, and navbar collapse behavior
- **Responsive Design**: Media queries and Bootstrap grid customization for mobile-first responsiveness
- **Accessibility Features**: ARIA labels, keyboard navigation enhancements, and semantic HTML structure
- **Code Organization**: Structuring the HTML document, organizing CSS rules, and implementing best practices
- **Documentation**: Writing inline code comments and this README file

### Why AI Assistance Was Crucial

1. **Rapid Prototyping**: AI assistance enabled quick iteration on design concepts and UI components, allowing for faster development cycles
2. **Best Practices**: Ensured adherence to modern web standards, accessibility guidelines (WCAG), and responsive design principles
3. **Cross-browser Compatibility**: Generated CSS that works consistently across different browsers and devices
4. **Problem Solving**: Provided solutions for complex CSS layouts (like matching card heights and image aspect ratios) and JavaScript event handling
5. **Code Quality**: Maintained clean, well-structured, and maintainable code with proper naming conventions and organization

### Human Contribution
While AI provided significant technical assistance, all creative direction, content decisions, brand identity, design preferences, and final approval of code came from human judgment. The AI served as a coding assistant and knowledge resource, not the decision maker.

## Contribution & License
This is a simple static template. Use, modify and extend as needed. Add a license file if you intend to publish.