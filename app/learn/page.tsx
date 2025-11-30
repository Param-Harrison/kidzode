import { CourseCard } from '@/components/course-card';

export default function LearnPage() {
  // Mock courses for now - in a real app, these would come from a database or CMS
  const courses = [
    {
      title: 'Python for Beginners',
      subtitle: 'Start your coding journey with Python! Learn variables, loops, and functions while building fun games.',
      tags: ['Coding', 'Python', 'Beginner'],
      color: 'primary' as const,
      slug: 'python-beginners',
    },
    {
      title: 'Web Development',
      subtitle: 'Build your own websites using HTML, CSS, and JavaScript. Create cool layouts and animations.',
      tags: ['Web', 'HTML/CSS', 'Creative'],
      color: 'secondary' as const,
      slug: 'web-development',
    },
    {
      title: 'Game Design',
      subtitle: 'Learn how to design and build your own video games. Understand game logic and mechanics.',
      tags: ['Games', 'Logic', 'Fun'],
      color: 'accent' as const,
      slug: 'game-design',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-black font-lexend mb-4">
          What do you want to learn today?
        </h1>
        <p className="text-xl text-muted-foreground">
          Pick a course and start your adventure!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.slug} {...course} />
        ))}
      </div>
    </div>
  );
}
