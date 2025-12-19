import random

coin = ["Heads", "Tails"]
flip = random.choice(coin)

print(f"Coin flip: {flip}")

if flip == "Heads":
    print("You win!")
