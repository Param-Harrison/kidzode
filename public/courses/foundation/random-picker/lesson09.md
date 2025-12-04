# Introduction to If/Else

Sometimes we want code to run ONLY if something is true.

Use `if` to make decisions!

```python
import random

coin = ["Heads", "Tails"]
flip = random.choice(coin)

print(f"Coin flip: {flip}")

if flip == "Heads":
    print("You win!")
```

**How it works:**
- `if flip == "Heads":` checks if the flip is Heads.
- The code inside (indented) ONLY runs if it's true!

**Note:** Use `==` to check if equal!

## Try This!
Run it many times! "You win!" only appears for Heads!
