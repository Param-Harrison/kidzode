# ========================================
# 🛑 LESSON 3: Safety Checks
# ========================================

balance = 50

def safe_withdraw(amount):
    global balance
    # Check if they have enough money FIRST
    if amount > balance:
        print("❌ ERROR: Not enough money!")
        print("You only have $" + str(balance))
    else:
        balance = balance - amount
        print("✅ Withdrew $" + str(amount))

# Try to withdraw too much (should fail)
safe_withdraw(100)

# Try to withdraw a valid amount (should work)
safe_withdraw(20)

# Check final balance
print("Balance: $" + str(balance))

# ----------------------------------------
# 🎮 TRY THIS:
# Change starting balance to 200 and try again!
# ----------------------------------------
