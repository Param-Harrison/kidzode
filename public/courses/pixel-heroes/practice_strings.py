name = input("Enter your name: ")
reversed_name = ""

for letter in name:
    reversed_name = letter + reversed_name

print(f"Reversed: {reversed_name}")

text = input("Enter text: ").lower()
vowels = "aeiou"
count = 0

for letter in text:
    if letter in vowels:
        count = count + 1

print(f"Vowels: {count}")

sentence = input("Enter sentence: ")
words = sentence.split()
title_words = []

for word in words:
    title_word = word[0].upper() + word[1:].lower()
    title_words.append(title_word)

result = " ".join(title_words)
print(f"Title case: {result}")

text = input("Enter text with spaces: ")
no_spaces = ""

for char in text:
    if char != " ":
        no_spaces = no_spaces + char

print(f"No spaces: {no_spaces}")

word = input("Enter a word: ").lower()
pig_latin = word[1:] + word[0] + "ay"
print(f"Pig Latin: {pig_latin}")
