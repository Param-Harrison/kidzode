# Accessing Data

Once it's a dictionary, we can use it like normal!

```python
import json

json_string = '{"user": "Param", "level": 5}'
data = json.loads(json_string)

print(f"User: {data['user']}")
print(f"Level: {data['level']}")
```

You'll see:
```
User: Param
Level: 5
```

We extracted the data from the string!

## Try This!
Add `print(data['level'] * 2)` to see double the level!
