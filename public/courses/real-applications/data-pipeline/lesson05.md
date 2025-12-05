# Infinite Power! ♾️

Since generators generate "on demand", they can go forever!
A list cannot be infinite (computer will explode 💥).

```python
def infinite_counter():
    n = 0
    while True: # Infinite loop!
        yield n
        n += 1

# Don't try to list() this, or print(all)!
# Only take what you need.

counter = infinite_counter()

print(next(counter)) # 0
print(next(counter)) # 1
print(next(counter)) # 2
```

It is waiting for you to ask for more!

## Try This!
Make an `even_numbers()` infinite generator (0, 2, 4...)!
