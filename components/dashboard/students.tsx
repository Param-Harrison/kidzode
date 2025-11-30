'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus, Users, BookOpen, TrendingUp, MoreVertical } from 'lucide-react';

interface DashboardStudentsProps {
  user: any;
}

export function DashboardStudents({ user }: DashboardStudentsProps) {
  const [students] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      age: 12,
      grade: '7th Grade',
      enrolledCourses: 2,
      completedLessons: 15,
      progress: 75,
      lastActive: '2 hours ago',
      status: 'active'
    },
    {
      id: 2,
      name: 'John Johnson',
      email: 'john.j@example.com',
      age: 10,
      grade: '5th Grade',
      enrolledCourses: 1,
      completedLessons: 8,
      progress: 60,
      lastActive: '1 day ago',
      status: 'active'
    },
    {
      id: 3,
      name: 'Emma Johnson',
      email: 'emma.j@example.com',
      age: 8,
      grade: '3rd Grade',
      enrolledCourses: 1,
      completedLessons: 12,
      progress: 90,
      lastActive: '3 hours ago',
      status: 'active'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black font-lexend">My Children</h1>
          <p className="text-muted-foreground mt-2">
            Manage and monitor your children's learning progress
          </p>
        </div>
        <Button variant="neo">
          <Plus className="w-4 h-4 mr-2" />
          Add Child
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg">Total Children</h3>
          </div>
          <div className="text-3xl font-black">{students.length}</div>
          <p className="text-sm text-muted-foreground mt-1">Currently learning</p>
        </div>

        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-bold text-lg">Total Lessons</h3>
          </div>
          <div className="text-3xl font-black">
            {students.reduce((acc, student) => acc + student.completedLessons, 0)}
          </div>
          <p className="text-sm text-muted-foreground mt-1">Completed across all children</p>
        </div>

        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-yellow-600" />
            </div>
            <h3 className="font-bold text-lg">Avg Progress</h3>
          </div>
          <div className="text-3xl font-black">
            {Math.round(students.reduce((acc, student) => acc + student.progress, 0) / students.length)}%
          </div>
          <p className="text-sm text-muted-foreground mt-1">Overall completion rate</p>
        </div>
      </div>

      {/* Students List */}
      <div className="bg-card border-2 border-border shadow-neo">
        <div className="p-6 border-b-2 border-border">
          <h2 className="text-xl font-black">Children Overview</h2>
        </div>
        <div className="divide-y-2 divide-border">
          {students.map((student) => (
            <div key={student.id} className="p-6 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {student.grade} • {student.age} years old
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Last active {student.lastActive}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="font-bold">{student.enrolledCourses}</div>
                    <div className="text-xs text-muted-foreground">Courses</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">{student.completedLessons}</div>
                    <div className="text-xs text-muted-foreground">Lessons</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">{student.progress}%</div>
                    <div className="text-xs text-muted-foreground">Progress</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link href={`/dashboard/progress?student=${student.id}`}>
                      <Button variant="ghost" size="sm">
                        View Progress
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${student.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card border-2 border-border p-6 shadow-neo">
        <h2 className="text-xl font-black mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/courses">
            <Button variant="outline" className="w-full justify-start">
              <BookOpen className="w-4 h-4 mr-2" />
              Browse Courses
            </Button>
          </Link>
          <Link href="/dashboard/progress">
            <Button variant="outline" className="w-full justify-start">
              <TrendingUp className="w-4 h-4 mr-2" />
              View Reports
            </Button>
          </Link>
          <Button variant="outline" className="w-full justify-start">
            <Plus className="w-4 h-4 mr-2" />
            Add Child Account
          </Button>
        </div>
      </div>
    </div>
  );
}