# ========================================
# 🏆 CHALLENGE 1: Interest Calculator
# ========================================

balance = 100

def add_interest():
    global balance
    interest = balance * 0.05  # 5% interest
    balance = balance + interest
    print("Interest added: $" + str(interest))
    print("New balance: $" + str(balance))

print("Balance: $" + str(balance))
add_interest()
