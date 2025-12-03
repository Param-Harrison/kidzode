import random

print("=== MY PERSONAL CHATBOT ===")
print("Bot: Hi! I'm your friendly chatbot!")
print()

# Joke database
jokes = [
    "Why did the programmer quit? Because they didn't get arrays!",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "What's a computer's favorite snack? Microchips!"
]

# Ask for name
user_name = input("Bot: What's your name? ")
print(f"Bot: Nice to meet you, {user_name}!")
print()

# Get user input
user_input = input("You: ")

# YOUR TURN! Mood detection using keyword checking
# HINT: Use if/elif/else to check for keywords in user_input
# HINT: Check for "sad" or "unhappy": print comforting message
# HINT: Check for "happy" or "great" or "good": print positive message
# HINT: Check for "excited" or "amazing": print excited message
# HINT: Check for "angry" or "mad": print understanding message
# HINT: Check if user_input == "tell me a joke" or "joke": print random joke
# HINT: Check if user_input == "hello": print greeting
# HINT: Check if user_input == "goodbye": print farewell
# HINT: Else: print default message
# Your code here:
