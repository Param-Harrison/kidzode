# Solution

```python
import json

data_string = '{"name": "Alice", "age": 10}'

user = json.loads(data_string)

print(f"Name: {user['name']}")
print(f"Age: {user['age']}")
```

Output:
```
Name: Alice
Age: 10
```
