# Nested JSON

JSON can be complex! Objects inside objects!

```python
import json

# JSON with a dictionary inside!
complex_json = '''
{
    "hero": "Batman",
    "stats": {
        "strength": 100,
        "speed": 80
    }
}
'''

data = json.loads(complex_json)
print(data)
```

**Note:** We use `'''` (triple quotes) for multi-line strings in Python.

You'll see:
```
{'hero': 'Batman', 'stats': {'strength': 100, 'speed': 80}}
```

It's a dictionary inside a dictionary!

## Try This!
Add `print(data['stats'])` to see just the stats!
