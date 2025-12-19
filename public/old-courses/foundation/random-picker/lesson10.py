import random

coin = ["Heads", "Tails"]
flip = random.choice(coin)

if flip == "Heads":
    print("Heads! You go first.")
else:
    print("Tails! I go first.")
