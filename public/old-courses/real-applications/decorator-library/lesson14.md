# Access Denied! 🚫

Websites use decorators to block users.
Like `@login_required` or `@admin_only`.

```python
current_user = "guest"

def admin_only(func):
    def wrapper():
        if current_user != "admin":
            print("Access Denied! Admins only.")
        else:
            func()
    return wrapper

@admin_only
def delete_database():
    print("Database Deleted! 💥")

delete_database()
```

You'll see:
```
Access Denied! Admins only.
```

Our function is safe! 🛡️

## Try This!
Change `current_user` to "admin" and see what happens!
