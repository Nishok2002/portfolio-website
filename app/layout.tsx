import '../app/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Data Analyst Portfolio',
  description:
    'Portfolio of a data analyst and machine learning enthusiast showcasing experience, projects and certifications.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
