# Condition Practice Challenges

Practice using conditions with these 5 challenges!

**Challenge 1: Grade Calculator**
```python
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
```

**Challenge 2: Age Category**
```python
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
```

**Challenge 3: Login System**
```python
username = input("Username: ").strip().lower()
password = input("Password: ")

if username == "admin" and password == "secret123":
    print("Welcome, Admin!")
elif username == "user" and password == "pass456":
    print("Welcome, User!")
else:
    print("Invalid login!")
```

**Challenge 4: Weather Advisor**
```python
temp = int(input("Temperature (F): "))
raining = input("Is it raining? (yes/no): ").lower()

if temp > 80 and raining == "no":
    print("Perfect beach day!")
elif temp > 80 and raining == "yes":
    print("Stay inside with AC!")
elif temp < 32:
    print("Bundle up! It's freezing!")
elif raining == "yes":
    print("Bring an umbrella!")
else:
    print("Nice day for a walk!")
```

**Challenge 5: Game Difficulty**
```python
level = int(input("Player level (1-100): "))
has_powerup = input("Has powerup? (yes/no): ").lower()

if level < 10 and has_powerup == "no":
    print("Difficulty: VERY HARD")
elif level < 10 or has_powerup == "no":
    print("Difficulty: HARD")
elif level >= 50 and has_powerup == "yes":
    print("Difficulty: EASY")
else:
    print("Difficulty: MEDIUM")
```

**Tips:** `and` means ALL must be true. `or` means AT LEAST ONE must be true. Use `elif` for multiple choices!
