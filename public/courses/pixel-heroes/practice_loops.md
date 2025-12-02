# Loop Master Challenge!

Congratulations, Times-Table Victory Master! You've learned loops!
But can you REALLY use them in different ways?
Time to prove you're a Loop Master!

## 🎯 Today's Mission
Practice loops in 5 different challenges!

## 📚 Before You Start
You know `for` loops, `range()`, and how to count.

## Challenge 1: Print Patterns ⭐

```python
print("=== CHALLENGE 1: STARS ===")
# Print 5 rows of stars, each row has more stars
# Row 1: *
# Row 2: **
# Row 3: ***
# Row 4: ****
# Row 5: *****

for row in range(1, 6):
    for star in range(row):
        print("*", end="")
    print()  # New line
```

## Challenge 2: Sum Numbers ⭐⭐

```python
print("\n=== CHALLENGE 2: SUM ===")
# Add up all numbers from 1 to 100
total = 0
for number in range(1, 101):
    total = total + number

print(f"Sum of 1-100: {total}")
```

## Challenge 3: Even or Odd ⭐⭐

```python
print("\n=== CHALLENGE 3: EVEN/ODD ===")
# Print numbers 1-20, label each as even or odd
for number in range(1, 21):
    if number % 2 == 0:
        print(f"{number} is EVEN")
    else:
        print(f"{number} is ODD")
```

## Challenge 4: Multiplication Grid ⭐⭐⭐

```python
print("\n=== CHALLENGE 4: GRID ===")
# Print a 5x5 multiplication grid
for row in range(1, 6):
    for col in range(1, 6):
        result = row * col
        print(f"{result:3}", end=" ")  # :3 means 3 spaces wide
    print()  # New line after each row
```

## Challenge 5: Countdown Timer ⭐⭐⭐

```python
print("\n=== CHALLENGE 5: TIMER ===")
# Countdown from user's number
start = input("Countdown from: ")
if start.isdigit():
    for num in range(int(start), 0, -1):
        print(num)
    print("BLAST OFF!")
```

## 🔮 Try to Predict!
What does `range(5, 0, -1)` print?
Answer: 5, 4, 3, 2, 1

## 🎨 Try This Next!
Create your own challenges:
- Print the alphabet
- Make a number pyramid
- Create a times table for any number

## 📝 Self-Check Quiz
1. How do you make nested loops?
2. What does `%` do? (modulo operator)
3. How do you print without a new line?

<details>
<summary>Click for Answers</summary>

1. Put one loop inside another
2. Gets the remainder (5 % 2 = 1)
3. Use `print(x, end="")`
</details>

## 🚀 Level Up Challenge!
Make a FizzBuzz program:
- Print numbers 1-30
- If divisible by 3, print "Fizz"
- If divisible by 5, print "Buzz"
- If divisible by both, print "FizzBuzz"

## 🌟 Show Your Parents!
"Look! I can use loops to solve all kinds of problems!"

You just unlocked the **Loop Master** superpower! ⭐⭐⭐
