# The Problem with Lists

Lists are great, but they take up **Memory** (RAM).
If you have 1,000,000 numbers, a list holds them ALL at once. 🐘

```python
import sys

# A small list
small = [1, 2, 3]
print(sys.getsizeof(small))

# A HUGE list (don't run this on a toaster!)
# huge = [i for i in range(10000000)]
```

Imagine holding 1,000,000 apples in your hands. Heavy!
Wouldn't it be better to get one apple at a time? 🍎

## Try This!
Create a list with 1000 items and print its length!
