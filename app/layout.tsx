import '../app/globals.css';
import { ReactNode } from 'react';
// Import a clean, modern font from Google. Poppins is a friendly sans‑serif
// that pairs well with the light colour palette. Using next/font allows
// automatic font optimisation without manual stylesheet management.
import { Nunito } from 'next/font/google';

// Initialise the Nunito font with a range of weights.  Nunito is a rounded
// sans‑serif typeface that brings a friendly, approachable feel to the page.
// Loading only the Latin subset keeps the bundle small.
const nunito = Nunito({
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
      </head>
      {/*
        Remove the explicit white background on the body so our global
        gradient takes effect. The text colour is still set here to
        ensure readability across the site.
      */}
      <body className={`${nunito.className} text-gray-800`}>
        {children}
      </body>
    </html>
  );
}