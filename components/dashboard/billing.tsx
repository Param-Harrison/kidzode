'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, ExternalLink, Loader2 } from 'lucide-react';

interface DashboardBillingProps {
  user: any;
}

type SubscriptionData = {
  tier: string;
  billing: string;
  status: string;
  nextBilling?: string;
  studentCount?: number;
  studentLimit?: number;
};

export function DashboardBilling({ user }: DashboardBillingProps) {
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    fetchSubscription();
  }, []);

  async function fetchSubscription() {
    try {
      const response = await fetch('/api/billing/subscription');
      if (response.ok) {
        const data = await response.json();
        setSubscription(data);
      }
    } catch (error) {
      console.error('Failed to fetch subscription:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleManageBilling() {
    setIsRedirecting(true);
    try {
      const response = await fetch('/api/billing/portal', {
        method: 'POST',
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Failed to create portal session:', error);
      setIsRedirecting(false);
    }
  }

  async function handleUpgrade() {
    setIsRedirecting(true);
    try {
      // Redirect to pricing page for now
      window.location.href = '/pricing';
    } catch (error) {
      console.error('Failed to redirect:', error);
      setIsRedirecting(false);
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const getTierDisplay = (tier: string) => {
    switch (tier) {
      case 'individual':
        return 'Individual';
      case 'family':
        return 'Family';
      case 'homeschool':
        return 'Homeschool';
      default:
        return 'Free';
    }
  };

  const getBillingDisplay = (billing: string) => {
    switch (billing) {
      case 'monthly':
        return 'Monthly';
      case 'yearly':
        return 'Yearly';
      case 'lifetime':
        return 'Lifetime';
      default:
        return 'Free';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black font-lexend">Billing & Subscription</h1>
        <p className="text-muted-foreground mt-2">
          Manage your subscription through Stripe's secure portal
        </p>
      </div>

      {/* Current Subscription */}
      <div className="bg-card border-2 border-border p-8 shadow-neo">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black">Current Plan</h2>
          {subscription?.status && (
            <span className={`px-3 py-1 text-sm font-bold border rounded-full ${
              subscription.status === 'active'
                ? 'bg-green-100 text-green-700 border-green-300'
                : subscription.status === 'canceled'
                ? 'bg-red-100 text-red-700 border-red-300'
                : 'bg-yellow-100 text-yellow-700 border-yellow-300'
            }`}>
              {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
            </span>
          )}
        </div>

        {subscription && subscription.tier !== 'free' ? (
          <>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                {getTierDisplay(subscription.tier)} - {getBillingDisplay(subscription.billing)}
              </h3>
              <p className="text-muted-foreground">
                Full access to all courses and features
              </p>
            </div>

            {subscription.nextBilling && (
              <div className="mb-6">
                <div className="text-sm text-muted-foreground">Next Billing Date</div>
                <div className="font-medium">{subscription.nextBilling}</div>
              </div>
            )}

            {subscription.tier === 'homeschool' && subscription.studentCount !== undefined && (
              <div className="mb-6 p-4 bg-muted rounded-lg border border-border">
                <div className="text-sm font-bold mb-2">Metered Usage</div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Current Students:</span>
                  <span className="font-bold">{subscription.studentCount}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-muted-foreground">Billing Units:</span>
                  <span className="font-bold">{Math.ceil(subscription.studentCount / 10)}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  You're charged for every 10 students
                </p>
              </div>
            )}

            <div className="flex items-center gap-4">
              <Button
                variant="neo"
                onClick={handleManageBilling}
                disabled={isRedirecting}
                className="flex items-center gap-2"
              >
                {isRedirecting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <CreditCard className="w-4 h-4" />
                )}
                Manage Billing
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                onClick={handleUpgrade}
                disabled={isRedirecting}
              >
                Change Plan
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Free Tier</h3>
              <p className="text-muted-foreground">
                Limited access to introductory lessons
              </p>
            </div>

            <Button
              variant="neo"
              onClick={handleUpgrade}
              disabled={isRedirecting}
              className="flex items-center gap-2"
            >
              {isRedirecting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <CreditCard className="w-4 h-4" />
              )}
              Upgrade to Premium
            </Button>
          </>
        )}
      </div>

      {/* Info Box */}
      <div className="bg-muted border-2 border-border p-6 rounded-xl">
        <h3 className="font-bold mb-2">Billing Portal</h3>
        <p className="text-sm text-muted-foreground">
          Click "Manage Billing" to access Stripe's secure customer portal where you can:
        </p>
        <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside">
          <li>Update payment methods</li>
          <li>View billing history and invoices</li>
          <li>Cancel or modify your subscription</li>
          <li>Update billing information</li>
        </ul>
      </div>
    </div>
  );
}