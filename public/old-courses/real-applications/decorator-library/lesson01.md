# Functions are Things

In Python, functions are just like numbers or strings.
They are **Objects**.

We can assign them to variables!

```python
def shout(text):
    return text.upper() + "!"

# Assign the function to a variable (no parentheses!)
yell = shout

# Now use the new name
print(yell("Hello"))
```

You'll see:
```
HELLO!
```

`shout` and `yell` are the SAME function! 👯‍♀️

## Try This!
Create a function `whisper` and assign it to `quiet_voice`!
