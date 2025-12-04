# Read Item by Item

Printing `['Apples', 'Bread']` looks a bit computer-y.

Let's print it like a human reads it!

```python
cart = ["Apples", "Bread", "Milk"]

print("I need to buy:")
for item in cart:
    print(f"- {item}")
```

You'll see:
```
I need to buy:
- Apples
- Bread
- Milk
```

Much nicer!

**How it works:** The loop visits every item, and we add a dash `-` before printing it.

## Try This!
Change the dash `-` to a star `*` or a box `[]`!
