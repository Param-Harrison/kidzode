# User Input (Simulation)

In a real app, the user types the length.
Since we are learning, we simulate it with a variable!

```python
# Imagine the user typed this:
user_length = 8 

if user_length < 6:
    print("Too short! Unsafe!")
else:
    print(f"Generating {user_length} character password...")
    # (Code to generate password here)
```

**Safety First:** Passwords should be at least 8 characters!

## Try This!
Change `user_length` to 4 and see the warning!
