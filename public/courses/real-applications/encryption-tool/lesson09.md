# Password Checker

When you login, the website doesn't know your password.
It hashes what you type and compares it to the database.

```python
import hashlib

# Database stores this (Simulated)
stored_hash = "ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f"

def login(password):
    attempt_hash = hashlib.sha256(password.encode()).hexdigest()
    
    if attempt_hash == stored_hash:
        print("Access Granted! 🔓")
    else:
        print("Access Denied! 🚫")

login("password123")
login("secret")
```

They never store your real password! (Hopefully).

## Try This!
Find what password creates the `stored_hash` above! (Hint: it's "password123")
