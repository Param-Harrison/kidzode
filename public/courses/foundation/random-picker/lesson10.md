# Use If with Random Choice

Let's handle both sides of the coin with `else`!

```python
import random

coin = ["Heads", "Tails"]
flip = random.choice(coin)

if flip == "Heads":
    print("Heads! You go first.")
else:
    print("Tails! I go first.")
```

**How it works:**
- `if` runs if it's Heads
- `else` runs if it's NOT Heads (so it must be Tails!)

One path OR the other. Never both!

## Try This!
Make a "Magic 8 Ball" with Yes/No!
