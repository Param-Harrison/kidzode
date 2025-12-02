# Letters in Words - String Indexing!

Great work, Robot Conversation Master! You can store text in variables!
But did you know words are made of LETTERS you can grab?
Can you get specific letters from words?

## 🎯 Today's Mission
Learn to access individual letters in strings!

## 📚 Before You Start
You know how to store text in variables.

## Let's Do It!

```python
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
```

## ✨ Magic Moment
You can grab any letter from a word by its position!

## 💡 Important Things to Remember
- Letters are numbered starting at 0 (not 1!)
- `word[0]` is the FIRST letter
- `word[1]` is the SECOND letter
- Think of it like house numbers on a street!

## 🔮 Try to Predict!
What is `"HELLO"[1]`?
Answer: "E" (second letter, position 1!)

## 🎨 Try This Next!
```python
word = "CODING"
print(word[0])  # C
print(word[2])  # D
print(word[5])  # G
```

## 🤔 Common Mistakes
**Mistake**: Starting at 1 instead of 0
```python
word = "HI"
print(word[1])  # This is "I", not "H"!
```
**Fix**: Remember: first letter is [0]!

**Mistake**: Going past the end
```python
word = "HI"
print(word[5])  # ❌ Error! Only 0 and 1 exist
```
**Fix**: Count carefully!

## 📝 Self-Check Quiz
1. What position is the first letter?
2. What is `"CAT"[1]`?
3. How do you get the first letter of a name?

<details>
<summary>Click for Answers</summary>

1. Position 0
2. "A" (second letter)
3. `name[0]`
</details>

## 🚀 Level Up Challenge!
Make a program that gets someone's initials:
```python
first = input("First name: ")
last = input("Last name: ")
initials = first[0] + "." + last[0] + "."
print(f"Your initials: {initials}")
```

## 🌟 Show Your Parents!
"Look! I can grab any letter from a word using its position!"

You just unlocked the **String Indexer** superpower! ⭐
