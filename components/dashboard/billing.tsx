'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, Calendar, Download, AlertCircle, CheckCircle, TrendingUp } from 'lucide-react';

interface DashboardBillingProps {
  user: any;
}

export function DashboardBilling({ user }: DashboardBillingProps) {
  const [subscription] = useState({
    plan: 'Monthly',
    status: 'Active',
    amount: 5,
    billingDate: 'Dec 15, 2024',
    nextBilling: 'Jan 15, 2025',
    startedDate: 'Oct 15, 2024'
  });

  const [billingHistory] = useState([
    {
      id: 1,
      date: 'Nov 15, 2024',
      description: 'Monthly Subscription - Kidzode',
      amount: 5.00,
      status: 'Paid',
      invoice: 'INV-2024-11-001'
    },
    {
      id: 2,
      date: 'Oct 15, 2024',
      description: 'Monthly Subscription - Kidzode',
      amount: 5.00,
      status: 'Paid',
      invoice: 'INV-2024-10-001'
    },
    {
      id: 3,
      date: 'Sep 15, 2024',
      description: 'Monthly Subscription - Kidzode',
      amount: 5.00,
      status: 'Paid',
      invoice: 'INV-2024-09-001'
    }
  ]);

  const [paymentMethod] = useState({
    type: 'Credit Card',
    last4: '4242',
    brand: 'Visa',
    expiryDate: '12/25'
  });

  const [usage] = useState({
    activeChildren: 3,
    includedChildren: 5,
    extraStorage: false,
    supportLevel: 'Standard'
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black font-lexend">Billing & Subscription</h1>
        <p className="text-muted-foreground mt-2">
          Manage your subscription and billing information
        </p>
      </div>

      {/* Current Subscription */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card border-2 border-border p-6 shadow-neo">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black">Current Plan</h2>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold border border-green-300 rounded-full">
              {subscription.status}
            </span>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold">{subscription.plan} Plan</h3>
              <div className="text-2xl font-black">${subscription.amount}/mo</div>
            </div>
            <p className="text-muted-foreground">
              Access to all courses, progress tracking, and premium features
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-sm text-muted-foreground">Started</div>
              <div className="font-medium">{subscription.startedDate}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Next Billing</div>
              <div className="font-medium">{subscription.nextBilling}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline">
              Upgrade Plan
            </Button>
            <Button variant="ghost">
              Cancel Subscription
            </Button>
          </div>
        </div>

        <div className="bg-card border-2 border-border p-6 shadow-neo">
          <h2 className="text-xl font-black mb-4">Payment Method</h2>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">VISA</span>
            </div>
            <div>
              <div className="font-medium">•••• •••• •••• {paymentMethod.last4}</div>
              <div className="text-sm text-muted-foreground">Expires {paymentMethod.expiryDate}</div>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            Update Payment Method
          </Button>
        </div>
      </div>

      {/* Usage Stats */}
      <div className="bg-card border-2 border-border p-6 shadow-neo">
        <h2 className="text-xl font-black mb-4">Current Usage</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-black text-primary">{usage.activeChildren}</div>
            <div className="text-sm text-muted-foreground mt-1">Active Children</div>
            <div className="text-xs text-muted-foreground">of {usage.includedChildren} included</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-green-600">Unlimited</div>
            <div className="text-sm text-muted-foreground mt-1">Course Access</div>
            <div className="text-xs text-muted-foreground">All courses included</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-blue-600">{usage.supportLevel}</div>
            <div className="text-sm text-muted-foreground mt-1">Support Level</div>
            <div className="text-xs text-muted-foreground">Email support included</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-purple-600">100GB</div>
            <div className="text-sm text-muted-foreground mt-1">Storage</div>
            <div className="text-xs text-muted-foreground">Cloud storage for projects</div>
          </div>
        </div>

        {/* Progress Bar for Children Usage */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Child Accounts Usage</span>
            <span className="text-sm text-muted-foreground">
              {usage.activeChildren} of {usage.includedChildren} used
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${(usage.activeChildren / usage.includedChildren) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-card border-2 border-border shadow-neo">
        <div className="p-6 border-b-2 border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black">Billing History</h2>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download All
            </Button>
          </div>
        </div>

        <div className="divide-y-2 divide-border">
          {billingHistory.map((invoice) => (
            <div key={invoice.id} className="p-6 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold">{invoice.description}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{invoice.date}</span>
                      <span>Invoice: {invoice.invoice}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-bold text-lg">${invoice.amount.toFixed(2)}</div>
                    <div className="flex items-center gap-1 text-sm">
                      {invoice.status === 'Paid' ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-green-600">{invoice.status}</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-4 h-4 text-yellow-600" />
                          <span className="text-yellow-600">{invoice.status}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Invoice
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plan Comparison */}
      <div className="bg-card border-2 border-border p-6 shadow-neo">
        <h2 className="text-xl font-black mb-6">Available Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="text-lg font-black mb-2">Monthly</h3>
            <div className="text-3xl font-black mb-4">$5<span className="text-lg font-normal">/month</span></div>
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                All courses access
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Progress tracking
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Email support
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              Current Plan
            </Button>
          </div>

          <div className="border-2 border-primary rounded-lg p-6 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-black text-xs font-bold px-3 py-1 border-2 border-black">
              RECOMMENDED
            </div>
            <h3 className="text-lg font-black mb-2">Lifetime</h3>
            <div className="text-3xl font-black mb-4">$99<span className="text-lg font-normal">/once</span></div>
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Everything in Monthly
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Future courses included
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Priority support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Certificate of completion
              </li>
            </ul>
            <Button variant="neo" className="w-full">
              Upgrade Now
            </Button>
          </div>

          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="text-lg font-black mb-2">Family</h3>
            <div className="text-3xl font-black mb-4">$15<span className="text-lg font-normal">/month</span></div>
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Up to 10 children
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                All courses access
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Priority support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Family dashboard
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}