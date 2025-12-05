# Returning Functions

A function can return **another function**!

```python
def get_greeter():
    def say_hi():
        return "Hi there!"
    
    # Return the FUNCTION, don't call it
    return say_hi

# my_func is now the say_hi function
my_func = get_greeter()

print(my_func())
```

You'll see:
```
Hi there!
```

It's a function factory! 🏭

## Try This!
Make it return a `say_bye` function instead!
