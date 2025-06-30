// src/app/page.tsx (This is your home page, equivalent to pages/index.js)
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation

export default function HomePage() {
  return (
    <section className="text-center py-16">
      <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
        <Image
  src="/images/your-profile-pic.jpg"
  alt="Your Name"
  fill // Add 'fill' as a boolean prop
  className="object-cover" // Add object-cover class directly
/>
      </div>
      <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Sajid Chowdhury👋</h1>
      <p className="text-xl text-gray-700 mb-6">
        A passionate full-stack web devoloper specializing in MERN.
      </p>
      <Link href="/projects">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300">
          View My Work
        </button>
      </Link>
    </section>
  );
}

// Optional: You can define page-specific metadata here as well
export const metadata = {
  title: 'Sajid Haque - Home',
  description: 'Welcome to my professional portfolio!',
};