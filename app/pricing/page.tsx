import { Check } from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: 'Individual',
    description: 'Perfect for single learners',
    studentLimit: '1 student',
    tiers: [
      {
        type: 'Monthly',
        price: 7,
        period: '/month',
        href: '/sign-up?tier=individual&billing=monthly',
      },
      {
        type: 'Yearly',
        price: 69,
        period: '/year',
        savings: 'Save $15',
        href: '/sign-up?tier=individual&billing=yearly',
      },
      {
        type: 'Lifetime',
        price: 99,
        period: 'one-time',
        href: '/sign-up?tier=individual&billing=lifetime',
        badge: 'Best Value',
      },
    ],
    features: [
      'Unlimited access to all courses',
      'Progress tracking & reports',
      'Certificates of completion',
      'Email support',
    ],
  },
  {
    name: 'Family',
    description: 'Great for families',
    studentLimit: 'Up to 4 kids',
    popular: true,
    tiers: [
      {
        type: 'Monthly',
        price: 12,
        period: '/month',
        href: '/sign-up?tier=family&billing=monthly',
      },
      {
        type: 'Yearly',
        price: 119,
        period: '/year',
        savings: 'Save $25',
        href: '/sign-up?tier=family&billing=yearly',
      },
      {
        type: 'Lifetime',
        price: 149,
        period: 'one-time',
        href: '/sign-up?tier=family&billing=lifetime',
        badge: 'Best Value',
      },
    ],
    features: [
      'Everything in Individual',
      'Up to 4 student accounts',
      'Family dashboard',
      'Priority support',
    ],
  },
  {
    name: 'Homeschool',
    description: 'For small classrooms',
    studentLimit: 'Per 10 students',
    tiers: [
      {
        type: 'Monthly',
        price: 25,
        period: '/month/10 students',
        href: '/sign-up?tier=homeschool&billing=monthly',
      },
      {
        type: 'Yearly',
        price: 249,
        period: '/year/10 students',
        savings: 'Save $51',
        href: '/sign-up?tier=homeschool&billing=yearly',
      },
      {
        type: 'Lifetime',
        price: 399,
        period: 'one-time/10 students',
        href: '/sign-up?tier=homeschool&billing=lifetime',
        badge: 'Best Value',
      },
    ],
    features: [
      'Everything in Family',
      'Metered billing (every 10 students)',
      'Classroom management tools',
      'Bulk student enrollment',
      'Advanced analytics',
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen font-epilogue">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="py-16 md:py-24 border-b-2 border-black bg-primary">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-black uppercase font-lexend mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include full access to our courses.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        {pricingPlans.map((plan, planIndex) => (
          <section
            key={plan.name}
            className={`py-16 md:py-24 border-b-2 border-black ${
              planIndex % 2 === 0 ? 'bg-white' : 'bg-yellow-50'
            }`}
          >
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
              {/* Plan Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <h2 className="text-3xl md:text-5xl font-black uppercase font-lexend">
                    {plan.name}
                  </h2>
                  {plan.popular && (
                    <span className="bg-black text-white px-4 py-2 text-sm font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                      MOST POPULAR
                    </span>
                  )}
                </div>
                <p className="text-xl font-bold text-muted-foreground">
                  {plan.description} • {plan.studentLimit}
                </p>
              </div>

              {/* Pricing Tiers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {plan.tiers.map((tier) => (
                  <div
                    key={tier.type}
                    className={`bg-white border-4 border-black p-8 flex flex-col items-center relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ${
                      tier.badge
                        ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
                        : 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
                    }`}
                  >
                    {tier.badge && (
                      <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 border-2 border-black">
                        {tier.badge}
                      </div>
                    )}
                    {tier.savings && (
                      <div className="absolute top-0 left-0 bg-green-400 text-black text-xs font-bold px-3 py-1 border-2 border-black">
                        {tier.savings}
                      </div>
                    )}

                    <h3 className="text-2xl font-black uppercase mb-2 mt-4">{tier.type}</h3>
                    <div className="text-5xl font-black mb-2">${tier.price}</div>
                    <p className="text-sm font-bold mb-6 opacity-80">{tier.period}</p>

                    <ul className="text-left space-y-3 mb-8 text-sm font-medium w-full">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={tier.href} className="w-full mt-auto">
                      <Button
                        variant="neo"
                        className={`w-full py-3 text-sm font-bold ${
                          tier.badge
                            ? 'bg-black text-white'
                            : 'bg-primary text-black'
                        }`}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Plan Features */}
              {plan.name === 'Homeschool' && (
                <div className="mt-12 max-w-3xl mx-auto">
                  <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="text-xl font-black mb-3">📊 Metered Billing Explained</h4>
                    <p className="font-medium mb-2">
                      You're charged for every 10 students in your classroom.
                    </p>
                    <ul className="space-y-2 text-sm font-medium">
                      <li className="flex items-center gap-2">
                        <span className="font-bold">Example:</span> 20 students = 2 units = ${plan.tiers[0].price * 2}/month
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="font-bold">Example:</span> 30 students = 3 units = ${plan.tiers[0].price * 3}/month
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* FAQ / Info Section */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase font-lexend mb-6">
              Questions about pricing?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              All plans include unlimited access to courses, progress tracking, and certificates.
              <br />
              Cancel anytime. No hidden fees.
            </p>
            <Link href="/courses">
              <Button
                variant="neo"
                className="h-14 px-10 text-lg font-bold bg-primary text-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                Start Learning Now - It's Free!
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
