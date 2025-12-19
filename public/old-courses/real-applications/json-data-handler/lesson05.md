# Parsing JSON

To turn that string into a real Python Dictionary, we use `json.loads()`.
"loads" stands for **load s**tring.

```python
import json

json_string = '{"user": "Param", "level": 5}'

# Convert string to dictionary
data = json.loads(json_string)

print(data)
print(type(data))
```

You'll see:
```
{'user': 'Param', 'level': 5}
<class 'dict'>
```

Now it's a Dictionary (`dict`)! Magic! 🎩

## Try This!
Create a JSON string `{"score": 100}` and parse it!
