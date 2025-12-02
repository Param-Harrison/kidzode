print("=== STRING WIZARD CHALLENGES ===")
print()

# Challenge 1: Reverse a Name
print("Challenge 1: Reverse Name")
name = input("Enter your name: ")
reversed_name = ""

for letter in name:
    reversed_name = letter + reversed_name

print(f"Reversed: {reversed_name}")

print()

# Challenge 2: Count Vowels
print("Challenge 2: Count Vowels")
text = input("Enter text: ").lower()
vowels = "aeiou"
count = 0

for letter in text:
    if letter in vowels:
        count = count + 1

print(f"Vowels: {count}")

print()

# Challenge 3: Title Case
print("Challenge 3: Title Case")
sentence = input("Enter sentence: ")
words = sentence.split()
title_words = []

for word in words:
    if len(word) > 0:
        title_word = word[0].upper() + word[1:].lower()
        title_words.append(title_word)

result = " ".join(title_words)
print(f"Title case: {result}")

print()

# Challenge 4: Remove Spaces
print("Challenge 4: Remove Spaces")
text = input("Enter text with spaces: ")
no_spaces = ""

for char in text:
    if char != " ":
        no_spaces = no_spaces + char

print(f"No spaces: {no_spaces}")

print()

# Challenge 5: Pig Latin
print("Challenge 5: Pig Latin")
word = input("Enter a word: ").lower()
pig_latin = word[1:] + word[0] + "ay"
print(f"Pig Latin: {pig_latin}")
