# Condition Expert Challenge!

Excellent, Adventure Story Creator! You can use if/elif/else!
But can you handle COMPLEX conditions?
Time to become a Condition Expert!

## 🎯 Today's Mission
Master complex conditional logic with 5 challenges!

## 📚 Before You Start
You know `if/elif/else`, `and`, `or`, and boolean logic.

## Challenge 1: Grade Calculator ⭐

```python
print("=== CHALLENGE 1: GRADES ===")
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

## Challenge 2: Age Category ⭐⭐

```python
print("\n=== CHALLENGE 2: AGE CATEGORY ===")
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

## Challenge 3: Login System ⭐⭐

```python
print("\n=== CHALLENGE 3: LOGIN ===")
username = input("Username: ").strip().lower()
password = input("Password: ")

if username == "admin" and password == "secret123":
    print("Welcome, Admin!")
elif username == "user" and password == "pass456":
    print("Welcome, User!")
else:
    print("Invalid login!")
```

## Challenge 4: Weather Advisor ⭐⭐⭐

```python
print("\n=== CHALLENGE 4: WEATHER ===")
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

## Challenge 5: Game Difficulty ⭐⭐⭐

```python
print("\n=== CHALLENGE 5: DIFFICULTY ===")
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

## 🔮 Try to Predict!
```python
age = 15
if age >= 13 and age < 20:
    print("Teenager")
```
Will it print? Answer: YES!

## 📝 Self-Check Quiz
1. What's the difference between `and` and `or`?
2. When do you use `elif` vs multiple `if`?
3. What happens if no conditions are true?

<details>
<summary>Click for Answers</summary>

1. `and` needs ALL true, `or` needs AT LEAST ONE true
2. `elif` for mutually exclusive choices, multiple `if` for independent checks
3. The `else` block runs (if there is one)
</details>

## 🚀 Level Up Challenge!
Make a restaurant recommendation system:
- Check budget (cheap/medium/expensive)
- Check cuisine preference
- Check dietary restrictions
- Recommend a restaurant!

## 🌟 Show Your Parents!
"Look! I can write complex decision-making programs!"

You just unlocked the **Condition Expert** superpower! ⭐⭐⭐
