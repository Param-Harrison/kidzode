# List Comprehension

Python has a superpower called **List Comprehension**.
It creates lists in ONE line!

Old way:
```python
nums = [1, 2, 3]
doubled = []
for n in nums:
    doubled.append(n * 2)
```

New way:
```python
nums = [1, 2, 3]
doubled = [n * 2 for n in nums]
print(doubled)
```

You'll see:
```
[2, 4, 6]
```

It's cleaner and faster!

## Try This!
Create a list `[10, 20, 30]` and divide them by 2 using list comprehension!
