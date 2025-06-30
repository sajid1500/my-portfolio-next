// src/app/layout.tsx (or src/app/layout.js)
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Make sure this imports your Tailwind CSS

// Import your Navbar and Footer components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

// Define metadata for your entire site
export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'A personal portfolio showcasing my projects and skills as a [Your Profession].',
  // Add more metadata like keywords, openGraph, etc.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Your global navigation */}
        <main className="container mx-auto px-4 py-8 min-h-screen">
          {children} {/* This is where your page content will be rendered */}
        </main>
        <Footer /> {/* Your global footer */}
      </body>
    </html>
  );
}