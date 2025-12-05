# Solution

```python
def cache(func):
    memory = {}
    
    def wrapper(n):
        if n in memory:
            print("Found in cache! ⚡️")
            return memory[n]
        
        print("Calculating... 🐢")
        result = func(n)
        memory[n] = result
        return result
    
    return wrapper

@cache
def heavy_math(n):
    return n * n

print(heavy_math(10)) # Calculates
print(heavy_math(10)) # Cache!
print(heavy_math(5))  # Calculates
```

Output:
```
Calculating... 🐢
100
Found in cache! ⚡️
100
Calculating... 🐢
25
```
You built a caching engine! 🎓
