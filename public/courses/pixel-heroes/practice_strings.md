# String Wizard Challenge!

Perfect, Password Creator! You can work with strings!
But can you manipulate text like a true wizard?
Time to master string manipulation!

## 🎯 Today's Mission
Practice string operations with 5 challenges!

## 📚 Before You Start
You know string indexing, methods like `.lower()`, `.upper()`, `.strip()`, and `.replace()`.

## Challenge 1: Reverse a Name ⭐

```python
print("=== CHALLENGE 1: REVERSE ===")
name = input("Enter your name: ")
reversed_name = ""

for letter in name:
    reversed_name = letter + reversed_name

print(f"Reversed: {reversed_name}")
```

## Challenge 2: Count Vowels ⭐⭐

```python
print("\n=== CHALLENGE 2: COUNT VOWELS ===")
text = input("Enter text: ").lower()
vowels = "aeiou"
count = 0

for letter in text:
    if letter in vowels:
        count = count + 1

print(f"Vowels: {count}")
```

## Challenge 3: Title Case ⭐⭐

```python
print("\n=== CHALLENGE 3: TITLE CASE ===")
sentence = input("Enter sentence: ")
words = sentence.split()  # Split into words
title_words = []

for word in words:
    # Capitalize first letter, lowercase rest
    title_word = word[0].upper() + word[1:].lower()
    title_words.append(title_word)

result = " ".join(title_words)  # Join back together
print(f"Title case: {result}")
```

## Challenge 4: Remove Spaces ⭐⭐

```python
print("\n=== CHALLENGE 4: REMOVE SPACES ===")
text = input("Enter text with spaces: ")
no_spaces = ""

for char in text:
    if char != " ":
        no_spaces = no_spaces + char

print(f"No spaces: {no_spaces}")
```

## Challenge 5: Pig Latin ⭐⭐⭐

```python
print("\n=== CHALLENGE 5: PIG LATIN ===")
word = input("Enter a word: ").lower()

# Move first letter to end, add "ay"
pig_latin = word[1:] + word[0] + "ay"
print(f"Pig Latin: {pig_latin}")

# Example: "hello" becomes "ellohay"
```

## 🔮 Try to Predict!
What is `"HELLO"[1:]`?
Answer: `"ELLO"` (everything except first letter)

## 📝 Self-Check Quiz
1. How do you get all letters except the first?
2. What does `.split()` do?
3. How do you check if a letter is in a string?

<details>
<summary>Click for Answers</summary>

1. `word[1:]` (slice from position 1 to end)
2. Splits text into a list of words
3. Use `in`: `if letter in "aeiou":`
</details>

## 🚀 Level Up Challenge!
Make a word scrambler:
- Take a word
- Mix up the letters randomly
- Show the scrambled word
Hint: Convert to list, use `random.shuffle()`, join back!

## 🌟 Show Your Parents!
"Look! I can manipulate text in all kinds of creative ways!"

You just unlocked the **String Wizard** superpower! ⭐⭐⭐
