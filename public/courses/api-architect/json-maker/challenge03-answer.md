### One way to solve it:

```python
user = {"age": 10}

if "email" not in user:
    print("Error: Email missing")
elif user["age"] < 13:
    print("Error: Too young")
else:
    print("User Saved!")
```
