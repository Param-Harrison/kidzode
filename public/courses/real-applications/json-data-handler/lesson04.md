# A Real JSON String

Let's make a proper variable with JSON data.
Remember, JSON in Python is just a big string `'...'`.

```python
import json

# This is data we got from the "web"
data_from_web = '{"user": "Param", "level": 5}'

print(data_from_web)
print(type(data_from_web))
```

You'll see:
```
{"user": "Param", "level": 5}
<class 'str'>
```

It's a string (`str`), not a dictionary yet!

## Try This!
Change the level to 10 in the JSON string!
