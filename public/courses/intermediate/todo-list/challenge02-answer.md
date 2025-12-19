### One way to solve it:

```python
tasks = []

def add_priority(task, level):
    full_text = f"[{level}] {task}"
    tasks.append(full_text)
    print("Added:", full_text)

print("--- TASK MANAGER ---")
add_priority("Do homework", "HIGH")
add_priority("Play games", "LOW")
add_priority("Walk dog", "MEDIUM")

print("\nFINAL LIST:")
print(tasks)
```
