import { CourseCard } from '@/components/course-card';
import { courses } from '@/lib/courses-data';

export default function LearnPage() {
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
