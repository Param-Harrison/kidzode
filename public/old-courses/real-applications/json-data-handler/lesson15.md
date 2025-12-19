# Transforming Data

We can Load -> Change -> Dump!
This is how we update data.

```python
import json

# 1. Load
json_string = '{"score": 10}'
data = json.loads(json_string)

# 2. Change
data['score'] = data['score'] + 5

# 3. Dump
new_json = json.dumps(data)

print(f"Old: {json_string}")
print(f"New: {new_json}")
```

You'll see:
```
Old: {"score": 10}
New: {"score": 15}
```

We updated the "file"! 💾

## Try This!
Add a new key "level": 2 to the data!
