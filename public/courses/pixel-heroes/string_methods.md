# Smart Text Matching

Make "Hello" and "hello" work the same!

## The Problem

```python
user_input = input("Say hello: ")
if user_input == "hello":
    print("Hi there!")
```

If you type "Hello" or "HELLO", it doesn't work!

## The Solution

```python
user_input = input("Say hello: ")

# Convert to lowercase first!
user_input_lower = user_input.lower()

if user_input_lower == "hello":
    print("Hi there!")
else:
    print("I don't understand")
```

## String Methods

```python
text = "  Hello World  "

print(text.lower())  # "  hello world  "
print(text.upper())  # "  HELLO WORLD  "
print(text.strip())  # "Hello World"
print(text.strip().lower())  # "hello world"
print(text.replace("World", "Python"))  # "  Hello Python  "
```

## Remember
- `.lower()` makes lowercase
- `.strip()` removes spaces from ends
- `.upper()` makes uppercase
- Save the result: `text = text.lower()`

## Try This
Make a chatbot that understands "good", "GOOD", "Good"!

## If Stuck
- Always save: `text = text.lower()`
- Strings don't change - create new ones

You did it! ⭐
