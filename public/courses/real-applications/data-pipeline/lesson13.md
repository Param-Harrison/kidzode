# Parsing CSV Data

Data usually comes as "Name,Age".
We can make a generator to parse this into a Dictionary!

```python
def csv_parser(lines):
    for line in lines:
        if not line.strip(): continue # Skip empty lines
        
        parts = line.strip().split(",")
        name = parts[0]
        age = int(parts[1])
        
        yield {"name": name, "age": age}

raw_data = ["Alice,10", "Bob,20", "Charlie,30"]
users = csv_parser(raw_data)

print(list(users))
```

You'll see: `[{'name': 'Alice', 'age': 10}, ...]`
We turned raw text into objects, one by one!

## Try This!
Add a "City" column to the data and parser!
