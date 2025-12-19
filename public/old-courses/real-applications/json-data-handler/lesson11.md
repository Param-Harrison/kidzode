# Creating JSON

We can also turn a Python Dictionary INTO a JSON string!
We use `json.dumps()`.
"dumps" stands for **dump** to **s**tring.

```python
import json

# Python Dictionary
hero = {"name": "Batman", "power": 100}

# Convert to JSON String
json_string = json.dumps(hero)

print(json_string)
print(type(json_string))
```

You'll see:
```
{"name": "Batman", "power": 100}
<class 'str'>
```

It looks like a dict, but it is a string! 📦

## Try This!
Create a list `["a", "b"]` and dump it to JSON!
