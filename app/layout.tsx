import '../app/globals.css';
import { ReactNode } from 'react';
// Import a clean, modern font from Google. Poppins is a friendly sans‑serif
// that pairs well with the light colour palette. Using next/font allows
// automatic font optimisation without manual stylesheet management.
import { Poppins } from 'next/font/google';

// Initialise the Poppins font with a range of weights.  Poppins is a clean,
// modern sans‑serif typeface used in the reference design.  Loading only
// the Latin subset keeps the bundle size small.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata = {
  // Updated title to reflect the owner’s name and role.
  title: 'Nishok Ilangovan – Data Analyst & ML Enthusiast',
  description:
    'Portfolio of Nishok Ilangovan, a data analyst and machine learning enthusiast showcasing experience, projects and certifications.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon for the site – this will appear as the tab icon in the browser */}
        <link rel="icon" href="/favicon.png" type="image/png" />

        {/*
          To support Progressive Web App (PWA) behaviour on iOS devices,
          specify the title to display when the web app is saved to the
          home screen. Without this meta tag the default title will be
          used, which can be less descriptive.  See the provided
          documentation for details.
        */}
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      </head>
      {/*
        Remove the explicit white background on the body so our global
        gradient takes effect. The text colour is still set here to
        ensure readability across the site.
      */}
      <body className={`${poppins.className} text-gray-800`}>
        {children}
      </body>
    </html>
  );
}