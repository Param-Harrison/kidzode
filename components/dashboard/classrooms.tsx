'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus, Users, BookOpen, TrendingUp, GraduationCap, MoreVertical } from 'lucide-react';

interface DashboardClassroomsProps {
  user: any;
}

export function DashboardClassrooms({ user }: DashboardClassroomsProps) {
  const [classrooms] = useState([
    {
      id: 1,
      name: 'Python 101 - Fall 2024',
      grade: '7th Grade',
      students: 24,
      enrolledStudents: 22,
      course: 'Python Basics',
      status: 'active',
      startDate: 'Sep 15, 2024',
      endDate: 'Dec 15, 2024',
      averageProgress: 75,
      completedLessons: 156
    },
    {
      id: 2,
      name: 'Web Dev Basics',
      grade: '8th Grade',
      students: 18,
      enrolledStudents: 16,
      course: 'Web Development',
      status: 'active',
      startDate: 'Oct 1, 2024',
      endDate: 'Jan 15, 2025',
      averageProgress: 45,
      completedLessons: 72
    },
    {
      id: 3,
      name: 'Advanced Python',
      grade: '9th Grade',
      students: 12,
      enrolledStudents: 10,
      course: 'Advanced Python',
      status: 'upcoming',
      startDate: 'Jan 10, 2025',
      endDate: 'May 15, 2025',
      averageProgress: 0,
      completedLessons: 0
    }
  ]);

  const overallStats = {
    totalClassrooms: classrooms.length,
    totalStudents: classrooms.reduce((acc, classroom) => acc + classroom.enrolledStudents, 0),
    averageProgress: Math.round(
      classrooms.reduce((acc, classroom) => acc + classroom.averageProgress, 0) / classrooms.filter(c => c.status === 'active').length || 1
    ),
    totalLessonsCompleted: classrooms.reduce((acc, classroom) => acc + classroom.completedLessons, 0)
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black font-lexend">My Classrooms</h1>
          <p className="text-muted-foreground mt-2">
            Manage your classroom activities and student progress
          </p>
        </div>
        <Button variant="neo">
          <Plus className="w-4 h-4 mr-2" />
          Create Classroom
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg">Classrooms</h3>
          </div>
          <div className="text-3xl font-black">{overallStats.totalClassrooms}</div>
          <p className="text-sm text-muted-foreground mt-1">Active classrooms</p>
        </div>

        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg">Total Students</h3>
          </div>
          <div className="text-3xl font-black">{overallStats.totalStudents}</div>
          <p className="text-sm text-muted-foreground mt-1">Enrolled students</p>
        </div>

        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-bold text-lg">Lessons Completed</h3>
          </div>
          <div className="text-3xl font-black">{overallStats.totalLessonsCompleted}</div>
          <p className="text-sm text-muted-foreground mt-1">Total across all classes</p>
        </div>

        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-yellow-600" />
            </div>
            <h3 className="font-bold text-lg">Average Progress</h3>
          </div>
          <div className="text-3xl font-black">{overallStats.averageProgress}%</div>
          <p className="text-sm text-muted-foreground mt-1">Class completion rate</p>
        </div>
      </div>

      {/* Classrooms List */}
      <div className="bg-card border-2 border-border shadow-neo">
        <div className="p-6 border-b-2 border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black">Active Classrooms</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                View Archive
              </Button>
              <Button variant="neo" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                New Classroom
              </Button>
            </div>
          </div>
        </div>

        <div className="divide-y-2 divide-border">
          {classrooms.map((classroom) => (
            <div key={classroom.id} className="p-6 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg">{classroom.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {classroom.grade} • {classroom.course}
                    </p>
                    <div className="flex items-center gap-4 mt-1 text-sm">
                      <span>Started: {classroom.startDate}</span>
                      <span>Ends: {classroom.endDate}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 text-sm font-bold border rounded-full ${
                    classroom.status === 'active'
                      ? 'bg-green-100 text-green-700 border-green-300'
                      : 'bg-yellow-100 text-yellow-700 border-yellow-300'
                  }`}>
                    {classroom.status === 'active' ? 'Active' : 'Upcoming'}
                  </span>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Class Progress</span>
                  <span className="text-sm text-muted-foreground">{classroom.averageProgress}% complete</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${classroom.averageProgress}%` }}
                  />
                </div>
              </div>

              {/* Classroom Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="font-bold text-lg">{classroom.enrolledStudents}</div>
                  <div className="text-sm text-muted-foreground">Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">{classroom.students}</div>
                  <div className="text-sm text-muted-foreground">Capacity</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">{classroom.completedLessons}</div>
                  <div className="text-sm text-muted-foreground">Lessons Done</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">{classroom.averageProgress}%</div>
                  <div className="text-sm text-muted-foreground">Avg Progress</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <Link href={`/dashboard/classrooms/${classroom.id}`}>
                  <Button variant="outline" size="sm">
                    <Users className="w-4 h-4 mr-2" />
                    View Students
                  </Button>
                </Link>
                <Link href={`/dashboard/progress?classroom=${classroom.id}`}>
                  <Button variant="outline" size="sm">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Progress
                  </Button>
                </Link>
                <Button variant="outline" size="sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Manage Curriculum
                </Button>
                <Button variant="ghost" size="sm">
                  Settings
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <h3 className="font-black mb-4">Create New Classroom</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Set up a new classroom and start teaching
          </p>
          <Button variant="neo" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Create Classroom
          </Button>
        </div>

        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <h3 className="font-black mb-4">Invite Students</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Add students to your existing classrooms
          </p>
          <Button variant="outline" className="w-full">
            <Users className="w-4 h-4 mr-2" />
            Manage Students
          </Button>
        </div>

        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <h3 className="font-black mb-4">View Reports</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Generate detailed progress reports
          </p>
          <Link href="/dashboard/progress">
            <Button variant="outline" className="w-full">
              <TrendingUp className="w-4 h-4 mr-2" />
              View All Reports
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}