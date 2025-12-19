# Controlling Programs

When you run a command like `mkdir foldername`, you are giving it an **Argument**.
"foldername" is the argument.

In Python, we can read these arguments using `sys.argv`!
It stands for **System Argument Values**.

```python
import sys

# Simulate running: python program.py Hello
sys.argv = ["program.py", "Hello"] 

print(sys.argv)
```

You'll see: `['program.py', 'Hello']`
It's just a list of strings! 📜

## Try This!
Change the arguments to `["program.py", "apple", "banana"]` and print it!
