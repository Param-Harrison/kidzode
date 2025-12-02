print("=== STRING INDEXING ===")
print()

# A word is like a list of letters!
word = "PYTHON"

# Get the first letter (position 0)
print(f"The word is: {word}")
print(f"First letter: {word[0]}")
print(f"Second letter: {word[1]}")
print(f"Last letter: {word[5]}")

print()

# Get letters from a name
name = "Jack"
print(f"Name: {name}")
print(f"First letter: {name[0]}")
print(f"Last letter: {name[3]}")

print()

# Make initials!
first_name = "Rose"
last_name = "Smith"
initials = first_name[0] + last_name[0]
print(f"Initials: {initials}")
