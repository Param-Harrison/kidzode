cart = [
    {"item": "Apple", "price": 10},
    {"item": "Banana", "price": 5}
]

prices = [item["price"] for item in cart]

total = sum(prices)
print(f"Total: ${total}")

avg = total / len(prices)
print(f"Average: ${avg}")
