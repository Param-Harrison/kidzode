# Smart Text Matching!

Perfect, Logic Master! You can combine conditions!
But your chatbot has a problem - it's TOO picky!
"Hello" and "hello" should be the SAME! Can you fix this?

## 🎯 Today's Mission
Learn string methods to make text matching smarter!

## 📚 Before You Start
You know how to check if text matches with `==`.

## The Problem

```python
user_input = input("Say hello: ")
if user_input == "hello":
    print("Hi there!")
else:
    print("I don't understand")
```

If you type "Hello" or "HELLO", it doesn't work! 😞

## The Solution: String Methods!

```python
print("=== SMART TEXT MATCHING ===")
print()

user_input = input("Say hello: ")

# Convert to lowercase first!
user_input_lower = user_input.lower()

if user_input_lower == "hello":
    print("Hi there!")
else:
    print("I don't understand")
```

## ✨ Magic Moment
Now "Hello", "HELLO", and "hello" all work!

## 💡 String Method Superpowers

```python
text = "  Hello World  "

# Make lowercase
print(text.lower())  # "  hello world  "

# Make uppercase
print(text.upper())  # "  HELLO WORLD  "

# Remove spaces from ends
print(text.strip())  # "Hello World"

# Combine them!
print(text.strip().lower())  # "hello world"

# Replace text
print(text.replace("World", "Python"))  # "  Hello Python  "
```

## 🔮 Try to Predict!
What is `"PYTHON".lower()`?
Answer: `"python"`

## 🎨 Try This Next!
```python
# Smart chatbot
response = input("How are you? ").strip().lower()

if response == "good" or response == "great":
    print("That's wonderful!")
elif response == "bad" or response == "sad":
    print("I'm sorry to hear that")
else:
    print("Thanks for sharing!")
```

## 🤔 Common Mistakes
**Mistake**: Forgetting to save the result
```python
text = "HELLO"
text.lower()  # ❌ Doesn't change text!
print(text)  # Still "HELLO"
```
**Fix**: Save it: `text = text.lower()`

**Mistake**: Trying to modify the original
```python
text = "hello"
text.upper()  # Doesn't change text
```
**Fix**: Strings don't change - create new one: `text = text.upper()`

## 📝 Self-Check Quiz
1. What does `.lower()` do?
2. What does `.strip()` do?
3. Do string methods change the original string?

<details>
<summary>Click for Answers</summary>

1. Makes all letters lowercase
2. Removes spaces from beginning and end
3. No! They create a NEW string
</details>

## 🚀 Level Up Challenge!
Make a password checker that's not case-sensitive:
```python
correct_password = "python123"
user_password = input("Enter password: ").strip().lower()

if user_password == correct_password:
    print("Access granted!")
else:
    print("Wrong password!")
```

## 🌟 Show Your Parents!
"Look! My programs are smarter now - they understand different ways of typing!"

You just unlocked the **Text Wizard** superpower! ⭐

**Pro Tip**: Always use `.strip().lower()` when comparing user input!
