import '../app/globals.css';
import { ReactNode } from 'react';

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
      <body className="text-gray-900">
        {children}
      </body>
    </html>
  );
}