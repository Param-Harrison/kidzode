'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Trophy, Target, Calendar, TrendingUp } from 'lucide-react';

interface DashboardProgressProps {
  user: any;
}

export function DashboardProgress({ user }: DashboardProgressProps) {
  const isParent = user?.userType === 'parent';
  const isTeacher = user?.userType === 'teacher';

  const [students] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      courses: [
        {
          name: 'Python Basics',
          progress: 85,
          completedLessons: 17,
          totalLessons: 20,
          lastActivity: '2 hours ago',
          timeSpent: '12h 30m',
          achievements: 5
        },
        {
          name: 'Web Development',
          progress: 60,
          completedLessons: 9,
          totalLessons: 15,
          lastActivity: '1 day ago',
          timeSpent: '8h 15m',
          achievements: 3
        }
      ]
    },
    {
      id: 2,
      name: 'John Johnson',
      courses: [
        {
          name: 'Python Basics',
          progress: 70,
          completedLessons: 14,
          totalLessons: 20,
          lastActivity: '3 hours ago',
          timeSpent: '10h 45m',
          achievements: 4
        }
      ]
    },
    {
      id: 3,
      name: 'Emma Johnson',
      courses: [
        {
          name: 'Python Basics',
          progress: 95,
          completedLessons: 19,
          totalLessons: 20,
          lastActivity: '1 hour ago',
          timeSpent: '15h 20m',
          achievements: 7
        }
      ]
    }
  ]);

  const overallStats = {
    totalLessons: students.reduce((acc, student) =>
      acc + student.courses.reduce((courseAcc, course) => courseAcc + course.completedLessons, 0), 0),
    totalTimeSpent: '46h 50m',
    averageProgress: Math.round(
      students.reduce((acc, student) =>
        acc + student.courses.reduce((courseAcc, course) => courseAcc + course.progress, 0) / student.courses.length, 0
      ) / students.length
    ),
    totalAchievements: students.reduce((acc, student) =>
      acc + student.courses.reduce((courseAcc, course) => courseAcc + course.achievements, 0), 0)
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black font-lexend">Learning Progress</h1>
        <p className="text-muted-foreground mt-2">
          Track and monitor learning progress for {isParent ? 'your children' : 'your students'}
        </p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg">Lessons Completed</h3>
          </div>
          <div className="text-3xl font-black">{overallStats.totalLessons}</div>
          <p className="text-sm text-muted-foreground mt-1">Total across all courses</p>
        </div>

        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-bold text-lg">Time Spent</h3>
          </div>
          <div className="text-3xl font-black">{overallStats.totalTimeSpent}</div>
          <p className="text-sm text-muted-foreground mt-1">Total learning time</p>
        </div>

        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-yellow-600" />
            </div>
            <h3 className="font-bold text-lg">Average Progress</h3>
          </div>
          <div className="text-3xl font-black">{overallStats.averageProgress}%</div>
          <p className="text-sm text-muted-foreground mt-1">Course completion rate</p>
        </div>

        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-bold text-lg">Achievements</h3>
          </div>
          <div className="text-3xl font-black">{overallStats.totalAchievements}</div>
          <p className="text-sm text-muted-foreground mt-1">Badges earned</p>
        </div>
      </div>

      {/* Student Progress Details */}
      <div className="space-y-6">
        {students.map((student) => (
          <div key={student.id} className="bg-card border-2 border-border shadow-neo">
            <div className="p-6 border-b-2 border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black">{student.name}</h2>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold border border-green-300 rounded-full">
                    Active
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {student.courses.map((course, index) => (
                <div key={index} className="border-2 border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-black text-lg">{course.name}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span>Last activity: {course.lastActivity}</span>
                        <span>Time spent: {course.timeSpent}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black">{course.progress}%</div>
                      <div className="text-sm text-muted-foreground">
                        {course.completedLessons} of {course.totalLessons} lessons
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="w-full bg-muted rounded-full h-3">
                      <div
                        className="bg-primary h-3 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-muted-foreground" />
                        <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{course.timeSpent}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-muted-foreground" />
                        <span>{course.achievements} achievements</span>
                      </div>
                    </div>

                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Learning Insights */}
      <div className="bg-card border-2 border-border p-6 shadow-neo">
        <h2 className="text-xl font-black mb-4">Learning Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Strengths
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                Emma excels at Python basics with 95% completion
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                Sarah shows consistent daily engagement
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                All children maintain good learning streaks
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-yellow-600" />
              Recommendations
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                John could benefit from additional practice exercises
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                Consider introducing advanced topics for Emma
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                Schedule regular check-ins to maintain motivation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}