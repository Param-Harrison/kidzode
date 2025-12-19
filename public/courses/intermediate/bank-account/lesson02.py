balance = 100

def deposit(amount):
    global balance
    balance += amount
    print(f"Deposited ${amount}")

def withdraw(amount):
    global balance
    balance -= amount
    print(f"Withdrew ${amount}")

deposit(50)
withdraw(20)

print(f"Final Balance: ${balance}")

# TRY THIS: Try depositing $1000!
