# Solution

```python
raw_data = [
    "Apple,10",
    "Banana,5",
    "Orange,bad_price",
    "Laptop,1000",
    "Candy,2"
]

def parser(lines):
    for line in lines:
        try:
            parts = line.split(",")
            yield {"product": parts[0], "price": int(parts[1])}
        except ValueError:
            print(f"Skipping bad line: {line}")

def expensive_filter(items):
    for item in items:
        if item["price"] > 500:
            yield item

def formatter(items):
    for item in items:
        yield f"Big Sale: {item['product']} (${item['price']})"

# Pipeline
items = parser(raw_data)
expensive = expensive_filter(items)
final = formatter(expensive)

for line in final:
    print(line)
```

Output:
```
Skipping bad line: Orange,bad_price
Big Sale: Laptop ($1000)
```
