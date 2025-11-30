import { Check } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black font-lexend mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Start for free, then choose the plan that works best for your family.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Free Tier */}
        <div className="bg-card border-2 border-border rounded-xl p-8 shadow-neo hover:-translate-y-1 transition-transform">
          <div className="mb-4">
            <h3 className="text-2xl font-bold font-lexend">Free Tier</h3>
            <p className="text-muted-foreground">Perfect for trying it out</p>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-black">$0</span>
            <span className="text-muted-foreground">/forever</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span>First 6 lessons of Beginners Course</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span>Basic progress tracking</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span>Access to community forum</span>
            </li>
          </ul>
          <Link
            href="/sign-up"
            className="block w-full py-3 px-4 bg-background text-foreground font-bold text-center rounded-lg border-2 border-border hover:bg-muted transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Monthly Plan */}
        <div className="bg-primary/10 border-2 border-primary rounded-xl p-8 shadow-[4px_4px_0px_0px_var(--primary)] hover:-translate-y-1 transition-transform relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            Most Popular
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold font-lexend">Monthly</h3>
            <p className="text-muted-foreground">Flexible learning</p>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-black">$6</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="font-bold">Unlimited access to all courses</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Add up to 5 children</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Detailed progress reports</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Certificates of completion</span>
            </li>
          </ul>
          <Link
            href="/sign-up?plan=monthly"
            className="block w-full py-3 px-4 bg-primary text-primary-foreground font-bold text-center rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] active:translate-y-[2px] active:shadow-none transition-all"
          >
            Subscribe Now
          </Link>
        </div>

        {/* Lifetime Plan */}
        <div className="bg-card border-2 border-border rounded-xl p-8 shadow-neo hover:-translate-y-1 transition-transform">
          <div className="mb-4">
            <h3 className="text-2xl font-bold font-lexend">Lifetime</h3>
            <p className="text-muted-foreground">One-time payment</p>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-black">$99</span>
            <span className="text-muted-foreground">/once</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span className="font-bold">Everything in Monthly</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span>Pay once, own forever</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span>Future course updates included</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span>Priority support</span>
            </li>
          </ul>
          <Link
            href="/sign-up?plan=lifetime"
            className="block w-full py-3 px-4 bg-secondary text-secondary-foreground font-bold text-center rounded-lg border-2 border-border shadow-[2px_2px_0px_0px_#000] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] active:translate-y-[2px] active:shadow-none transition-all"
          >
            Get Lifetime Access
          </Link>
        </div>
      </div>

      <div className="mt-16 p-8 bg-muted rounded-xl border-2 border-border text-center">
        <h3 className="text-2xl font-bold font-lexend mb-4">Are you a Teacher?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          We offer special pricing for classrooms and schools. Manage multiple students, track progress, and get bulk discounts.
        </p>
        <Link
          href="/sign-up?type=teacher"
          className="inline-block py-3 px-6 bg-accent text-accent-foreground font-bold rounded-lg border-2 border-border shadow-[2px_2px_0px_0px_#000] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] active:translate-y-[2px] active:shadow-none transition-all"
        >
          View Teacher Plans
        </Link>
      </div>
    </div>
  );
}
