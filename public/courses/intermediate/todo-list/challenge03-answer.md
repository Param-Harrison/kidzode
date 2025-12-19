### One way to solve it:

```python
tasks = ["Clean Room", "Feed Cat", "Study"]

def show_count():
    count = len(tasks)
    print(f"--- STATUS: {count} Items ---")

# Let's test it:
show_count()
tasks.append("New Task")
show_count()
```
