# Report Card Function

Let's make a function that gives the Letter Grade!

```python
def get_letter(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    else:
        return "F"

print(get_letter(95))
print(get_letter(72))
```

You'll see:
```
A
C
```

Now we can grade anything instantly!

## Try This!
Use this function on a list of scores!
