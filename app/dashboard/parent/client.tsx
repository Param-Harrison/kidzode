'use client';

import { useState } from 'react';
import { Plus, User, MoreVertical } from 'lucide-react';
import { AddStudentDialog } from '@/components/dashboard/add-student-dialog';

type Student = {
  id: number;
  displayName: string;
  avatarUrl?: string | null;
  hasPin: boolean;
};

export function ParentDashboardClient({ classCode, students }: { classCode: string; students: Student[] }) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black font-lexend mb-2">My Children</h1>
          <p className="text-muted-foreground">Manage your children's profiles and progress</p>
        </div>
        <button
          onClick={() => setIsAddDialogOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-bold rounded-lg border-2 border-border shadow-[2px_2px_0px_0px_#000] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] active:translate-y-[2px] active:shadow-none transition-all"
        >
          <Plus className="w-5 h-5" />
          Add Child
        </button>
      </div>

      {classCode && (
        <div className="bg-secondary/10 border-2 border-secondary rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-secondary-foreground mb-1">Family Code</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Share this code with your children to log in
              </p>
              <div className="inline-flex items-center gap-3 bg-background px-4 py-3 rounded-lg border-2 border-border">
                <span className="text-3xl font-mono font-black tracking-widest">{classCode}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-card border-2 border-border rounded-xl p-6 shadow-neo hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center border-2 border-border">
                {student.avatarUrl ? (
                  <img
                    src={student.avatarUrl}
                    alt={student.displayName}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User className="w-8 h-8 text-secondary-foreground" />
                )}
              </div>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <h3 className="text-xl font-bold font-lexend mb-1">{student.displayName}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className={`w-2 h-2 rounded-full ${student.hasPin ? 'bg-green-500' : 'bg-yellow-500'}`} />
              {student.hasPin ? 'PIN Protected' : 'No PIN Set'}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span>Progress</span>
                <span>0%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden border border-border">
                <div className="h-full bg-primary w-0" />
              </div>
            </div>
          </div>
        ))}

        {students.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center border-2 border-dashed border-border rounded-xl bg-muted/30">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <User className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold font-lexend mb-2">No children added yet</h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Add your children to start tracking their learning progress.
            </p>
            <button
              onClick={() => setIsAddDialogOpen(true)}
              className="px-4 py-2 bg-background text-foreground font-bold rounded-lg border-2 border-border hover:bg-muted transition-colors"
            >
              Add Your First Child
            </button>
          </div>
        )}
      </div>

      <AddStudentDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
      />
    </div>
  );
}
