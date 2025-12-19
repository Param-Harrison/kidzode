# Closures

Here is the magic.
The inner function **remembers** variables from the parent!

```python
def multiplier_maker(n):
    def multiplier(x):
        return x * n # Remembers 'n' from parent!
    
    return multiplier

# Create different functions
doubler = multiplier_maker(2)
tripler = multiplier_maker(3)

print(doubler(10)) # 10 * 2
print(tripler(10)) # 10 * 3
```

You'll see:
```
20
30
```

`doubler` remembers that `n` was 2. This is a **Closure**. 🧠

## Try This!
Create a `pentupler` (times 5) and test it!
