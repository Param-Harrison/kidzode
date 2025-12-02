print("=== SMART TEXT MATCHING ===")
print()

# Demonstrate string methods
text = "  Hello World  "

print("Original:", f"'{text}'")
print("Lower:", text.lower())
print("Upper:", text.upper())
print("Strip:", text.strip())
print("Combined:", text.strip().lower())
print("Replace:", text.replace("World", "Python"))

print()

# Smart input matching
user_input = input("Say hello: ")
user_input_clean = user_input.strip().lower()

if user_input_clean == "hello":
    print("Hi there!")
elif user_input_clean == "hi":
    print("Hey!")
else:
    print("Nice to meet you!")
