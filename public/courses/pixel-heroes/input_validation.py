print("=== SMART INPUT ===")
print()

# Get input
age = input("How old are you? ")

# Check if it's a number
if age.isdigit():
    age_number = int(age)
    print(f"You are {age_number} years old!")
    
    # Extra validation
    if age_number > 0 and age_number < 150:
        print("That seems reasonable!")
    else:
        print("Hmm, that age seems unusual!")
else:
    print("Oops! Please enter a number next time!")
