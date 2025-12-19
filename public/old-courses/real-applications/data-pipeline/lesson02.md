# The Generator Solution

A **Generator** is a lazy list.
It produces items **one by one**, only when asked.
It doesn't store them in memory! 🪶

We use `( )` instead of `[ ]` for a generator expression.

```python
import sys

# List (Stores everything)
my_list = [i for i in range(10000)]
print(f"List size: {sys.getsizeof(my_list)}")

# Generator (Stores nothing!)
my_gen = (i for i in range(10000))
print(f"Gen size:  {sys.getsizeof(my_gen)}")
```

You'll see the Generator is TINY! Even if we made it 1 Billion!

## Try This!
Change `10000` to `1000000` and see the sizes!
