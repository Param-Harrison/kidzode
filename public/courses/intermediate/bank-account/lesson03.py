balance = 50

def smart_withdraw(amount):
    global balance
    if amount > balance:
        print("❌ ERROR: Not enough money!")
    else:
        balance -= amount
        print(f"✅ Success! Withdrew ${amount}")

smart_withdraw(100) # This should fail
smart_withdraw(20)  # This should work

print(f"Balance: ${balance}")
