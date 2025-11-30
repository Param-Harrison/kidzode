'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, Mail, Lock, Bell, Shield, CreditCard, Trash2, CheckCircle } from 'lucide-react';

interface DashboardSettingsProps {
  user: any;
}

export function DashboardSettings({ user }: DashboardSettingsProps) {
  const [profile] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john@example.com',
    phone: '+1 (555) 123-4567',
    timezone: 'America/New_York',
    language: 'English'
  });

  const [notifications] = useState({
    emailUpdates: true,
    progressReports: true,
    achievementAlerts: true,
    marketingEmails: false,
    weeklyDigest: true
  });

  const [privacy] = useState({
    profileVisibility: 'private',
    dataSharing: false,
    analyticsTracking: true
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black font-lexend">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Profile Settings */}
      <div className="bg-card border-2 border-border p-6 shadow-neo">
        <div className="flex items-center gap-2 mb-6">
          <User className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-black">Profile Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold mb-2">Full Name</label>
            <input
              type="text"
              defaultValue={profile.name}
              className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Email Address</label>
            <div className="relative">
              <input
                type="email"
                defaultValue={profile.email}
                className="w-full px-4 py-3 pr-10 rounded-lg border-2 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Phone Number</label>
            <input
              type="tel"
              defaultValue={profile.phone}
              className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Timezone</label>
            <select
              defaultValue={profile.timezone}
              className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="America/New_York">Eastern Time</option>
              <option value="America/Chicago">Central Time</option>
              <option value="America/Denver">Mountain Time</option>
              <option value="America/Los_Angeles">Pacific Time</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <h3 className="font-bold">Email Verification</h3>
            <p className="text-sm text-muted-foreground">Your email is verified and secure</p>
          </div>
          <Button variant="outline">
            <Mail className="w-4 h-4 mr-2" />
            Resend Verification
          </Button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-card border-2 border-border p-6 shadow-neo">
        <div className="flex items-center gap-2 mb-6">
          <Bell className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-black">Notification Preferences</h2>
        </div>

        <div className="space-y-4">
          {[
            { key: 'emailUpdates', label: 'Email Updates', description: 'Receive important account updates via email' },
            { key: 'progressReports', label: 'Progress Reports', description: 'Weekly summaries of your children\'s learning progress' },
            { key: 'achievementAlerts', label: 'Achievement Alerts', description: 'Get notified when your children earn new badges' },
            { key: 'marketingEmails', label: 'Marketing Emails', description: 'Receive emails about new courses and features' },
            { key: 'weeklyDigest', label: 'Weekly Digest', description: 'Curated content and learning tips delivered weekly' }
          ].map((setting) => (
            <div key={setting.key} className="flex items-center justify-between py-3">
              <div className="flex-1">
                <h3 className="font-bold">{setting.label}</h3>
                <p className="text-sm text-muted-foreground">{setting.description}</p>
              </div>
              <button
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications[setting.key as keyof typeof notifications] ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications[setting.key as keyof typeof notifications] ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-card border-2 border-border p-6 shadow-neo">
        <div className="flex items-center gap-2 mb-6">
          <Shield className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-black">Security & Privacy</h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">Change Password</h3>
              <div className="space-y-3">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <Button variant="outline" className="mt-3">
                <Lock className="w-4 h-4 mr-2" />
                Update Password
              </Button>
            </div>

            <div>
              <h3 className="font-bold mb-3">Two-Factor Authentication</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Add an extra layer of security to your account
              </p>
              <Button variant="outline">
                <Shield className="w-4 h-4 mr-2" />
                Enable 2FA
              </Button>
            </div>
          </div>

          <div className="border-t-2 border-border pt-6">
            <h3 className="font-bold mb-4">Privacy Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Profile Visibility</h4>
                  <p className="text-sm text-muted-foreground">Control who can see your profile information</p>
                </div>
                <select
                  defaultValue={privacy.profileVisibility}
                  className="px-3 py-2 rounded-lg border-2 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="private">Private</option>
                  <option value="friends">Friends Only</option>
                  <option value="public">Public</option>
                </select>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="flex-1">
                  <h4 className="font-medium">Data Sharing</h4>
                  <p className="text-sm text-muted-foreground">Share anonymous usage data to improve the platform</p>
                </div>
                <button
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    privacy.dataSharing ? 'bg-primary' : 'bg-muted'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      privacy.dataSharing ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="flex-1">
                  <h4 className="font-medium">Analytics Tracking</h4>
                  <p className="text-sm text-muted-foreground">Help us understand how you use the platform</p>
                </div>
                <button
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    privacy.analyticsTracking ? 'bg-primary' : 'bg-muted'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      privacy.analyticsTracking ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Management */}
      <div className="bg-card border-2 border-border p-6 shadow-neo">
        <div className="flex items-center gap-2 mb-6">
          <CreditCard className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-black">Subscription Management</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold mb-2">Current Plan</h3>
            <p className="text-2xl font-black">Monthly Plan</p>
            <p className="text-muted-foreground">$5/month • Renews on Dec 15, 2024</p>
          </div>
          <div className="flex items-end justify-end gap-3">
            <Button variant="outline">
              Upgrade Plan
            </Button>
            <Button variant="outline">
              Cancel Subscription
            </Button>
          </div>
        </div>
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
              <CreditCard className="w-4 h-4 mr-2" />
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

      {/* Save Settings */}
      <div className="flex items-center justify-end gap-4">
        <Button variant="ghost">
          Cancel
        </Button>
        <Button variant="neo">
          Save All Changes
        </Button>
      </div>
    </div>
  );
}