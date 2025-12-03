# Smart Text Matching

Want "Hello" and "hello" to work the same? Here's how!

**The Problem:** This only works if you type exactly "hello":
```python
user_input = input("Say hello: ")
if user_input == "hello":
    print("Hi there!")
```

If you type "Hello" or "HELLO", it doesn't work!

**The Solution:** Convert to lowercase first!
```python
user_input = input("Say hello: ")

# Convert to lowercase first!
user_input_lower = user_input.lower()

if user_input_lower == "hello":
    print("Hi there!")
else:
    print("I don't understand")
```

**String Methods:** Here are more useful tricks:
```python
text = "  Hello World  "

print(text.lower())  # "  hello world  "
print(text.upper())  # "  HELLO WORLD  "
print(text.strip())  # "Hello World"
print(text.strip().lower())  # "hello world"
print(text.replace("World", "Python"))  # "  Hello Python  "
```

**Remember:** `.lower()` makes everything lowercase. `.strip()` removes spaces from the ends. `.upper()` makes everything uppercase. Always save the result: `text = text.lower()` because strings don't change - you create new ones!

Try making a chatbot that understands "good", "GOOD", "Good" - all the same!
