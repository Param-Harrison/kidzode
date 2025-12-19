# Checking Passwords 🔐

When someone tries to login, we check if their password matches what we have in the DB.

### The Logic
```python
real_pass = db["admin"]
input_pass = "1234"

if input_pass == real_pass:
    print("Login Success!")
```

### Your Goal
1. Create `db = {"agent": "007"}`.
2. Create variable `attempt = "007"`.
3. Check if `db["agent"] == attempt`.
4. If yes, print "Access Granted".

### Achievement
🔐 **Security Guard**: You verified a user's identity!
