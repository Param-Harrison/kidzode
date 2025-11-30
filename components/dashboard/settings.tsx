'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Lock, Trash2, CreditCard, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface DashboardSettingsProps {
  user: any;
}

export function DashboardSettings({ user }: DashboardSettingsProps) {
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black font-lexend">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account settings
        </p>
      </div>

      {/* Account Information */}
      <div className="bg-card border-2 border-border p-6 shadow-neo">
        <div className="flex items-center gap-2 mb-6">
          <Mail className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-black">Account Information</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">Email Address</label>
            <div className="px-4 py-3 rounded-lg border-2 border-border bg-muted text-muted-foreground">
              {user?.email || 'Not set'}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Email cannot be changed. Contact support if you need to update it.
            </p>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Account Type</label>
            <div className="px-4 py-3 rounded-lg border-2 border-border bg-muted text-muted-foreground capitalize">
              {user?.userType || 'Not set'}
            </div>
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-card border-2 border-border p-6 shadow-neo">
        <div className="flex items-center gap-2 mb-6">
          <Lock className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-black">Change Password</h2>
        </div>

        {!isChangingPassword ? (
          <Button
            variant="outline"
            onClick={() => setIsChangingPassword(true)}
          >
            <Lock className="w-4 h-4 mr-2" />
            Change Password
          </Button>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Current Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Confirm New Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Confirm new password"
              />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="neo">
                Update Password
              </Button>
              <Button
                variant="ghost"
                onClick={() => setIsChangingPassword(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Subscription Management */}
      <div className="bg-card border-2 border-border p-6 shadow-neo">
        <div className="flex items-center gap-2 mb-6">
          <CreditCard className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-black">Subscription</h2>
        </div>

        <p className="text-muted-foreground mb-4">
          Manage your subscription, billing, and payment methods
        </p>

        <Link href="/dashboard/billing">
          <Button variant="outline" className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Manage Billing
            <ExternalLink className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* Danger Zone */}
      <div className="bg-card border-2 border-red-200 p-6 shadow-neo">
        <div className="flex items-center gap-2 mb-6">
          <Trash2 className="w-5 h-5 text-red-600" />
          <h2 className="text-xl font-black text-red-600">Danger Zone</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-4 border-2 border-border rounded-lg p-4">
            <div>
              <h3 className="font-bold">Export Your Data</h3>
              <p className="text-sm text-muted-foreground">Download all your account data and learning history</p>
            </div>
            <Button variant="outline">
              Export Data
            </Button>
          </div>

          <div className="flex items-center justify-between py-4 border-2 border-red-200 rounded-lg p-4">
            <div>
              <h3 className="font-bold text-red-600">Delete Account</h3>
              <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data</p>
            </div>
            <Button variant="destructive">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}