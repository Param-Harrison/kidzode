# ========================================
# 💸 LESSON 2: Deposit & Withdraw
# ========================================

# Shared balance
balance = 100

def deposit(amount):
    global balance  # I need to change the shared balance
    balance = balance + amount
    print("Deposited: $" + str(amount))

def withdraw(amount):
    global balance  # I need to change the shared balance
    balance = balance - amount
    print("Withdrew: $" + str(amount))

# Test it out!
print("Starting balance: $" + str(balance))
deposit(50)
withdraw(20)
print("Final balance: $" + str(balance))

# ----------------------------------------
# 🎮 TRY THIS:
# Deposit $1000 and check the balance!
# ----------------------------------------
