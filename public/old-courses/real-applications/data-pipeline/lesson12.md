# File Iterators

Python's `open()` gives us a Generator!
We can loop over the file object directly.

```python
# Create a fake file for testing
data = "Line 1\nLine 2\nLine 3"
import io
fake_file = io.StringIO(data)

# The Right Way
for line in fake_file: # Reads one line at a time
    print(line.strip()) # strip() removes the \n
```

You'll see:
```
Line 1
Line 2
Line 3
```

This can read a 1 Terabyte file using barely any RAM! 💾

## Try This!
Create a generator that yields only lines starting with "L"!
