# Answer: Task Counter ✅

```python
tasks = []

def count_tasks():
    total = len(tasks)
    print("You have", total, "tasks remaining!")

while True:
    print("")
    print("1. Add Task")
    print("2. View Tasks")
    print("3. Count Tasks")
    print("4. Exit")
    
    choice = input("> ")
    
    if choice == "1":
        task = input("What task? ")
        tasks.append(task)
        print("Added!")
    elif choice == "2":
        for task in tasks:
            print("- " + task)
    elif choice == "3":
        count_tasks()
    elif choice == "4":
        break
```
