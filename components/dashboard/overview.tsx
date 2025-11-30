'use client';

import { Users, BookOpen, TrendingUp, Award } from 'lucide-react';

interface DashboardOverviewProps {
  user: any;
}

export function DashboardOverview({ user }: DashboardOverviewProps) {
  const isParent = user?.userType === 'parent';
  const isTeacher = user?.userType === 'teacher';

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black font-lexend">
          Welcome back, {user?.name || user?.email}!
        </h1>
        <p className="text-muted-foreground mt-2">
          Here's what's happening with your {isParent ? 'children' : 'students'} today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              {isParent ? <Users className="w-5 h-5 text-primary" /> : <BookOpen className="w-5 h-5 text-primary" />}
            </div>
            <h3 className="font-bold text-lg">
              {isParent ? 'Active Children' : 'Active Students'}
            </h3>
          </div>
          <div className="text-3xl font-black">3</div>
          <p className="text-sm text-muted-foreground mt-1">Learning this week</p>
        </div>

        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-bold text-lg">Lessons Completed</h3>
          </div>
          <div className="text-3xl font-black">24</div>
          <p className="text-sm text-muted-foreground mt-1">+12% from last week</p>
        </div>

        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-yellow-600" />
            </div>
            <h3 className="font-bold text-lg">Avg Progress</h3>
          </div>
          <div className="text-3xl font-black">78%</div>
          <p className="text-sm text-muted-foreground mt-1">Across all courses</p>
        </div>

        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-bold text-lg">Achievements</h3>
          </div>
          <div className="text-3xl font-black">15</div>
          <p className="text-sm text-muted-foreground mt-1">Unlocked this month</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <h2 className="text-xl font-black mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="w-2 h-8 bg-primary rounded-full" />
              <div className="flex-1">
                <p className="font-medium">Sarah completed "Python Basics"</p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="w-2 h-8 bg-green-500 rounded-full" />
              <div className="flex-1">
                <p className="font-medium">John started "Data Structures"</p>
                <p className="text-sm text-muted-foreground">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="w-2 h-8 bg-yellow-500 rounded-full" />
              <div className="flex-1">
                <p className="font-medium">Emma earned "Problem Solver" badge</p>
                <p className="text-sm text-muted-foreground">1 day ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <h2 className="text-xl font-black mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <a
              href="/dashboard/progress"
              className="block p-4 border-2 border-border rounded-lg hover:bg-muted transition-all hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] cursor-pointer"
            >
              <h3 className="font-bold">View Progress Reports</h3>
              <p className="text-sm text-muted-foreground">See detailed learning progress</p>
            </a>
            <a
              href="/dashboard/students"
              className="block p-4 border-2 border-border rounded-lg hover:bg-muted transition-all hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] cursor-pointer"
            >
              <h3 className="font-bold">Manage {isParent ? 'Children' : 'Students'}</h3>
              <p className="text-sm text-muted-foreground">Add or remove {isParent ? 'children' : 'students'}</p>
            </a>
            <a
              href="/courses"
              className="block p-4 border-2 border-border rounded-lg hover:bg-muted transition-all hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] cursor-pointer"
            >
              <h3 className="font-bold">Browse Courses</h3>
              <p className="text-sm text-muted-foreground">Explore new learning paths</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}