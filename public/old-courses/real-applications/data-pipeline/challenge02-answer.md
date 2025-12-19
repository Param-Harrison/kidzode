# Solution

```python
def get_logs():
    logs = ["INFO: Started", "ERROR: Crash 1", "INFO: Working", "ERROR: Crash 2"]
    for log in logs:
        yield log

def error_filter(source):
    for log in source:
        if log.startswith("ERROR"):
            yield log

def cleaner(source):
    for log in source:
        yield log.replace("ERROR: ", "")

# Pipeline
pipeline = cleaner(error_filter(get_logs()))

print(list(pipeline))
```

Output:
```
['Crash 1', 'Crash 2']
```
