# Calculate Average (The Hard Way)

Now we have the total. Let's get the average!

We need to count the items ourselves.

```python
grades = [90, 80, 100]
total = 0

for grade in grades:
    total = total + grade

count = 3
average = total / count

print(f"Average: {average}")
```

You'll see:
```
Average: 90.0
```

It works! But counting by hand is annoying...

## Try This!
Add a 4th grade and don't forget to update `count` to 4!
