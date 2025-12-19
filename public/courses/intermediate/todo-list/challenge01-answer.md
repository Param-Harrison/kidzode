### One way to solve it:

```python
tasks = []

while True:
    print(f"\n--- TASKS ({len(tasks)}) ---")
    for t in tasks:
        print(t)
    
    print("\n1. Add Task\n2. Exit")
    choice = input("> ")

    if choice == "1":
        name = input("Task name: ")
        urgent = input("Is it urgent? (y/n): ")
        if urgent == "y":
            tasks.append("🔴 URGENT: " + name)
        else:
            tasks.append("🟢 Normal: " + name)
    elif choice == "2":
        break
```
