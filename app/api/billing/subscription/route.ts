import { NextRequest, NextResponse } from 'next/server';
import { getUser } from '@/lib/db/queries';
import { db } from '@/lib/db/drizzle';
import { accounts } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const user = await getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user's account
    const [account] = await db
      .select()
      .from(accounts)
      .where(eq(accounts.ownerId, user.id))
      .limit(1);

    if (!account) {
      return NextResponse.json({ error: 'Account not found' }, { status: 404 });
    }

    // Return subscription data
    return NextResponse.json({
      tier: account.subscriptionTier || 'free',
      billing: account.subscriptionType || 'free',
      status: account.subscriptionStatus || 'inactive',
      nextBilling: account.currentPeriodEnd
        ? new Date(account.currentPeriodEnd).toLocaleDateString()
        : null,
      studentCount: account.studentCount || 0,
      studentLimit: account.studentLimit || 0,
    });
  } catch (error) {
    console.error('Error fetching subscription:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscription' },
      { status: 500 }
    );
  }
}
