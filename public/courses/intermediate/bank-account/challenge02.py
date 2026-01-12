# ========================================
# 💸 CHALLENGE 2: Transfer Money
# ========================================

savings = 500
checking = 100

def transfer(amount):
    global savings, checking
    if amount > savings:
        print("Not enough in savings!")
    else:
        savings = savings - amount
        checking = checking + amount
        print("Transferred $" + str(amount))

print("Before: Savings $" + str(savings) + ", Checking $" + str(checking))
transfer(200)
print("After: Savings $" + str(savings) + ", Checking $" + str(checking))
