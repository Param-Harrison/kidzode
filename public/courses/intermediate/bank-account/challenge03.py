# ========================================
# 🎯 CHALLENGE 3: Daily Limit
# ========================================

balance = 500
withdrawn_today = 0
daily_limit = 100

def limited_withdraw(amount):
    global balance, withdrawn_today
    
    # Check if this would exceed daily limit
    if withdrawn_today + amount > daily_limit:
        print("❌ Would exceed daily limit of $" + str(daily_limit))
    elif amount > balance:
        print("❌ Not enough money!")
    else:
        balance = balance - amount
        withdrawn_today = withdrawn_today + amount
        print("✅ Withdrew $" + str(amount))

limited_withdraw(50)   # Should work
limited_withdraw(60)   # Should fail (would be $110 total)
limited_withdraw(40)   # Should work (exactly $100 total)
print("Total withdrawn today: $" + str(withdrawn_today))
