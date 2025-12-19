# The Yield Keyword

To make a Generator Function, we use **yield** instead of **return**.
- `return`: Gives back a value and STOPS. 🛑
- `yield`: Gives back a value and PAUSES. ⏸️

```python
def count_to_three():
    print("Start")
    yield 1
    print("Back again")
    yield 2
    print("One more")
    yield 3
    print("Done")

# Create the generator
counter = count_to_three()

# Get values
print(next(counter))
print(next(counter))
print(next(counter))
```

It remembers where it left off! 🧠

## Try This!
Add `yield 4` and call `next(counter)` one more time!
