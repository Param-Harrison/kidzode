# Sorting Keys

We can organize our JSON by sorting the keys alphabetically.
Just add `sort_keys=True`!

```python
import json

data = {"c": 3, "a": 1, "b": 2}

# Sort the keys
sorted_json = json.dumps(data, sort_keys=True)

print(sorted_json)
```

You'll see:
```
{"a": 1, "b": 2, "c": 3}
```

Order from chaos! 🧹

## Try This!
Create a dict with messy keys and sort it!
