### One way to solve it:

```python
library = [
    {"name": "Toy Story", "rating": "G"},
    {"name": "Avengers", "rating": "PG-13"},
    {"name": "Cars", "rating": "G"}
]

print("--- KIDS SAFE MODE ---")
for movie in library:
    if movie["rating"] == "G":
        print(movie["name"])
```
