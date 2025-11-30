'use client';

import { useState } from 'react';
import { Plus, GraduationCap, Users, Copy, Check } from 'lucide-react';
import { CreateClassroomDialog } from '@/components/dashboard/create-classroom-dialog';

type Classroom = {
  id: number;
  name: string;
  classCode: string;
  isActive: boolean;
  studentCount: number;
  activeStudentCount: number;
};

export function TeacherDashboardClient({ classrooms }: { classrooms: Classroom[] }) {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  function copyToClipboard(code: string) {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black font-lexend mb-2">My Classrooms</h1>
          <p className="text-muted-foreground">Manage your classes and students</p>
        </div>
        <button
          onClick={() => setIsCreateDialogOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-bold rounded-lg border-2 border-border shadow-[2px_2px_0px_0px_#000] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] active:translate-y-[2px] active:shadow-none transition-all"
        >
          <Plus className="w-5 h-5" />
          Create Classroom
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classrooms.map((classroom) => (
          <div
            key={classroom.id}
            className="bg-card border-2 border-border rounded-xl p-6 shadow-neo hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center border-2 border-border">
                <GraduationCap className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className={`px-2 py-1 rounded text-xs font-bold border border-border ${classroom.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                {classroom.isActive ? 'Active' : 'Inactive'}
              </div>
            </div>

            <h3 className="text-xl font-bold font-lexend mb-2">{classroom.name}</h3>
            
            <div className="flex items-center justify-between bg-muted p-3 rounded-lg border border-border mb-4">
              <div className="text-sm">
                <span className="text-muted-foreground block text-xs uppercase tracking-wider font-bold">Class Code</span>
                <span className="font-mono font-bold text-lg tracking-widest">{classroom.classCode}</span>
              </div>
              <button
                onClick={() => copyToClipboard(classroom.classCode)}
                className="p-2 hover:bg-background rounded-md transition-colors border border-transparent hover:border-border"
                title="Copy Code"
              >
                {copiedCode === classroom.classCode ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="font-bold">{classroom.studentCount}</span>
                <span className="text-muted-foreground">Students</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="font-bold">{classroom.activeStudentCount}</span>
                <span className="text-muted-foreground">Active</span>
              </div>
            </div>
          </div>
        ))}

        {classrooms.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center border-2 border-dashed border-border rounded-xl bg-muted/30">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold font-lexend mb-2">No classrooms yet</h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Create your first classroom to start inviting students.
            </p>
            <button
              onClick={() => setIsCreateDialogOpen(true)}
              className="px-4 py-2 bg-background text-foreground font-bold rounded-lg border-2 border-border hover:bg-muted transition-colors"
            >
              Create Classroom
            </button>
          </div>
        )}
      </div>

      <CreateClassroomDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
      />
    </div>
  );
}
