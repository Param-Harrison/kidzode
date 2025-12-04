import random

weather = ["Sunny", "Rainy"]
today = random.choice(weather)

print(f"Today is {today}")

if today == "Sunny":
    print("Let's go to the park!")
else:
    print("Let's read a book inside.")
