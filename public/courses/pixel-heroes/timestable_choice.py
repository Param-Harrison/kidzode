print("=== TIMES TABLE PRACTICE ===")
print()

# Ask which times table they want
table = input("Which times table do you want to practice? (1-12): ")
table_number = int(table)

print()
print(f"=== {table_number} TIMES TABLE ===")
print()

for number in range(1, 11):
    answer = table_number * number
    print(f"{table_number} x {number} = {answer} ✨")

print()
print(f"Great job practicing your {table_number}s!")
