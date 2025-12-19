# Pretty Print

Let's make our final receipt look professional!

We'll combine `len()` and a loop.

```python
cart = ["Apples", "Bread", "Milk"]

print(f"RECEIPT ({len(cart)} items)")
print("-" * 20)

for item in cart:
    print(f"[ ] {item}")

print("-" * 20)
```

You'll see:
```
RECEIPT (3 items)
--------------------
[ ] Apples
[ ] Bread
[ ] Milk
--------------------
```

Ready to print and take to the store!

## Try This!
Change `[ ]` to `[x]` to check them off!
