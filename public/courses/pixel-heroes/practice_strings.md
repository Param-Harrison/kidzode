# String Practice Challenges

Ready to practice strings? Try these 5 challenges!

**Challenge 1: Reverse a Name**
```python
name = input("Enter your name: ")
reversed_name = ""

for letter in name:
    reversed_name = letter + reversed_name

print(f"Reversed: {reversed_name}")
```

**Challenge 2: Count Vowels**
```python
text = input("Enter text: ").lower()
vowels = "aeiou"
count = 0

for letter in text:
    if letter in vowels:
        count = count + 1

print(f"Vowels: {count}")
```

**Challenge 3: Title Case**
```python
sentence = input("Enter sentence: ")
words = sentence.split()
title_words = []

for word in words:
    title_word = word[0].upper() + word[1:].lower()
    title_words.append(title_word)

result = " ".join(title_words)
print(f"Title case: {result}")
```

**Challenge 4: Remove Spaces**
```python
text = input("Enter text with spaces: ")
no_spaces = ""

for char in text:
    if char != " ":
        no_spaces = no_spaces + char

print(f"No spaces: {no_spaces}")
```

**Challenge 5: Pig Latin**
```python
word = input("Enter a word: ").lower()
pig_latin = word[1:] + word[0] + "ay"
print(f"Pig Latin: {pig_latin}")
```

**Tips:** `word[1:]` gets all letters except the first. `.split()` splits text into words. Use `in` to check if a letter is in a string!
