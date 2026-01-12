# Answer: Task Master ✅

```python
tasks = []

while True:
    print("")
    print("1. Add Task")
    print("2. View Tasks")
    print("3. Exit")
    
    choice = input("> ")
    
    if choice == "1":
        task = input("What task? ")
        tasks.append(task)
        print("Added!")
    elif choice == "2":
        print("--- Your Tasks ---")
        for task in tasks:
            print("- " + task)
    elif choice == "3":
        print("Goodbye!")
        break
```
