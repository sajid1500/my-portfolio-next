// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <div className="max-w-3xl mx-auto text-lg leading-relaxed">
        <p className="mb-4">
          Hello! I&apos;m Sajid Chowdhury, a full-stack web dev with a passion
          for passion for transforming code into stunning visual. I have 2 years
          of experience in web dev. I have 2 years of experience in web dev.
        </p>
        <p className="mb-4">
          My journey into the world of development started when I was intrigued
          by how a piece of code could translated to such stunning visuals.
          Since then, I&apos;ve enjoyed working on a variety of projects,
          constantly learning and adapting to new technologies.
        </p>
        <p className="mb-4">
          Outside of coding, I enjoy reading, playing games. These activities
          help me stay refreshed and bring a fresh perspective to my work.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Skills</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800">
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
  title: "About Me - Sajid Chowdhury",
  description:
    "Learn more about Sajid Chowdhury, a [Your Profession] with experience in [Your Key Skill].",
};
