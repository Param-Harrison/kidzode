age = input("How old are you? ")

# Check if it's a number
if age.isdigit():
    age_number = int(age)
    print(f"You are {age_number} years old!")
else:
    print("Oops! Please enter a number!")
