tasks = []

def show_tasks():
    print("\n--- YOUR TASKS ---")
    if len(tasks) == 0:
        print("(List is empty)")
    for t in tasks:
        print("- " + t)

while True:
    print("\n1. Add Task\n2. View Tasks\n3. Clear All\n4. Exit")
    choice = input("> ")

    if choice == "1":
        new_task = input("What do you need to do? ")
        tasks.append(new_task)
    elif choice == "2":
        show_tasks()
    elif choice == "3":
        tasks.clear()
        print("List cleared!")
    elif choice == "4":
        break

# TRY THIS: Add a "Remove Last" task using tasks.pop()!
