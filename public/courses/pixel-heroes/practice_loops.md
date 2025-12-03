# Loop Practice Challenges

Practice loops with 5 challenges!

## Challenge 1: Star Pattern

```python
# Print 5 rows of stars
for row in range(1, 6):
    for star in range(row):
        print("*", end="")
    print()
```

## Challenge 2: Sum Numbers

```python
# Add up all numbers from 1 to 100
total = 0
for number in range(1, 101):
    total = total + number

print(f"Sum of 1-100: {total}")
```

## Challenge 3: Even or Odd

```python
# Print numbers 1-20, label each
for number in range(1, 21):
    if number % 2 == 0:
        print(f"{number} is EVEN")
    else:
        print(f"{number} is ODD")
```

## Challenge 4: Multiplication Grid

```python
# Print a 5x5 grid
for row in range(1, 6):
    for col in range(1, 6):
        result = row * col
        print(f"{result:3}", end=" ")
    print()
```

## Challenge 5: Countdown Timer

```python
start = input("Countdown from: ")
if start.isdigit():
    for num in range(int(start), 0, -1):
        print(num)
    print("BLAST OFF!")
```

## Remember
- Nested loops = loop inside loop
- `%` gets the remainder
- Use `end=""` to print without new line

You did it! ⭐
