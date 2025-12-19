# Check Strength Function

Let's make a function to check if a password is safe.

```python
def check_strength(password):
    if len(password) < 8:
        print("Weak 🔴")
    else:
        print("Strong 🟢")

check_strength("12345")
check_strength("supersecret123")
```

You'll see:
```
Weak 🔴
Strong 🟢
```

We pass the password INTO the function!

**How it works:** `(password)` is an argument. It's like giving the function a tool to work with.

## Try This!
Check the strength of your own name!
