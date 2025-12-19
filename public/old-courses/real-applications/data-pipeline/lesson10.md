# One-Liner Pipelines

 писать separate functions for everything is verbose.
We can use **Generator Expressions** inline!

`( x*2 for x in source if x > 5 )`

```python
nums = range(10)

# Pipeline:
# 1. Take num
# 2. Keep if > 5 (Filter)
# 3. Multiply by 2 (Map)

pipeline = (n * 2 for n in nums if n > 5)

print(list(pipeline))
```

It's like list comprehension `[]` but with `()` and NO memory usage!

## Try This!
Create a pipeline for names: `(name.upper() for name in names)`
