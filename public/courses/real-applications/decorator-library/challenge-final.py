def cache(func):
    memory = {}
    
    # Define wrapper here...
    def wrapper(n):
        pass # Your logic!
    
    return wrapper

@cache
def heavy_math(n):
    print(f"Thinking hard about {n}...")
    return n * n

print(heavy_math(5)) # Should print "Thinking..."
print(heavy_math(5)) # Should NOT print "Thinking..."
