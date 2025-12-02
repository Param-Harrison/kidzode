print("=== CONDITION EXPERT CHALLENGES ===")
print()

# Challenge 1: Grade Calculator
print("Challenge 1: Grade Calculator")
score = int(input("Enter score (0-100): "))

if score >= 90:
    print("Grade: A - Excellent!")
elif score >= 80:
    print("Grade: B - Good job!")
elif score >= 70:
    print("Grade: C - Not bad!")
elif score >= 60:
    print("Grade: D - Need improvement")
else:
    print("Grade: F - Study harder!")

print()

# Challenge 2: Age Category
print("Challenge 2: Age Category")
age = int(input("Enter age: "))

if age < 3:
    print("You're a baby!")
elif age < 13:
    print("You're a kid!")
elif age < 20:
    print("You're a teenager!")
elif age < 65:
    print("You're an adult!")
else:
    print("You're a senior!")

print()

# Challenge 3: Login System
print("Challenge 3: Login System")
username = input("Username: ").strip().lower()
password = input("Password: ")

if username == "admin" and password == "secret123":
    print("Welcome, Admin!")
elif username == "user" and password == "pass456":
    print("Welcome, User!")
else:
    print("Invalid login!")
