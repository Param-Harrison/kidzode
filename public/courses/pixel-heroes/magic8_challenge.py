import random

# CHALLENGE: Create three different fortune lists
yes_fortunes = ["Yes, definitely!", "Absolutely!", "The stars say yes!"]
no_fortunes = ["No way!", "Don't count on it!", "Not a chance!"]
maybe_fortunes = ["Maybe later!", "Ask again tomorrow!", "Cannot predict now!"]

# Ask what type of answer they want
print("What type of answer do you want?")
answer_type = input("Type 'yes', 'no', or 'maybe': ")

# Ask their question
question = input("Now ask your yes/no question: ")

# Pick from the right list
# HINT: Use if/elif/else to check answer_type
# HINT: If answer_type == "yes", use random.choice(yes_fortunes)

print("The Magic 8-Ball says...")
# Add your code here to print the right fortune!
