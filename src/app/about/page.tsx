// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <div className="max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed">
        <p className="mb-4">
          Hello! I&apos;m [Your Name], a [Your Profession] with a passion for [your passion, e.g., creating intuitive user experiences, solving complex problems with code]. I have X years of experience in [Your Industry/Field].
        </p>
        <p className="mb-4">
          My journey into the world of development started when [brief story or motivation]. Since then, I&apos;ve enjoyed working on a variety of projects, constantly learning and adapting to new technologies.
        </p>
        <p className="mb-4">
          Outside of coding, I enjoy [your hobbies, e.g., hiking, reading, playing guitar]. These activities help me stay refreshed and bring a fresh perspective to my work.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Skills</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="bg-gray-100 p-3 rounded-md">JavaScript (ES6+)</li>
          <li className="bg-gray-100 p-3 rounded-md">React.js</li>
          <li className="bg-gray-100 p-3 rounded-md">Next.js</li>
          <li className="bg-gray-100 p-3 rounded-md">Node.js</li>
          <li className="bg-gray-100 p-3 rounded-md">Express.js</li>
          <li className="bg-gray-100 p-3 rounded-md">MongoDB</li>
          <li className="bg-gray-100 p-3 rounded-md">SQL (PostgreSQL/MySQL)</li>
          <li className="bg-gray-100 p-3 rounded-md">Tailwind CSS</li>
          <li className="bg-gray-100 p-3 rounded-md">Git/GitHub</li>
          {/* Add more skills */}
        </ul>
      </div>
    </section>
  );
}

// Optional: Page-specific metadata
export const metadata = {
  title: 'About Me - Your Name',
  description: 'Learn more about Your Name, a [Your Profession] with experience in [Your Key Skill].',
};