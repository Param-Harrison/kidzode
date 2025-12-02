print("=== LOOP MASTER CHALLENGES ===")
print()

# Challenge 1: Star Pattern
print("Challenge 1: Star Pattern")
for row in range(1, 6):
    for star in range(row):
        print("*", end="")
    print()

print()

# Challenge 2: Sum Numbers
print("Challenge 2: Sum 1-100")
total = 0
for number in range(1, 101):
    total = total + number
print(f"Sum: {total}")

print()

# Challenge 3: Even/Odd
print("Challenge 3: Even/Odd (1-20)")
for number in range(1, 21):
    if number % 2 == 0:
        print(f"{number} is EVEN")
    else:
        print(f"{number} is ODD")

print()

# Challenge 4: Multiplication Grid
print("Challenge 4: 5x5 Grid")
for row in range(1, 6):
    for col in range(1, 6):
        result = row * col
        print(f"{result:3}", end=" ")
    print()

print()

# Challenge 5: Countdown
print("Challenge 5: Countdown")
start = input("Countdown from: ")
if start.isdigit():
    for num in range(int(start), 0, -1):
        print(num)
    print("BLAST OFF!")
