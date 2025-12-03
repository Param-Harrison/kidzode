user_input = input("Say hello: ")

# Convert to lowercase first!
user_input_lower = user_input.lower()

if user_input_lower == "hello":
    print("Hi there!")
else:
    print("I don't understand")

text = "  Hello World  "

print(text.lower())  # "  hello world  "
print(text.upper())  # "  HELLO WORLD  "
print(text.strip())  # "Hello World"
print(text.strip().lower())  # "hello world"
print(text.replace("World", "Python"))  # "  Hello Python  "
