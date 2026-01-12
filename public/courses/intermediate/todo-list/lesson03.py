# ========================================
# 📝 LESSON 3: Adding and Removing
# ========================================

# Our list of tasks (starts empty)
tasks = []

# Function to show all tasks
def show_tasks():
    print("")
    print("--- YOUR TASKS ---")
    if len(tasks) == 0:
        print("(No tasks yet!)")
    else:
        for task in tasks:
            print("- " + task)

# Main loop
while True:
    print("")
    print("1. Add Task")
    print("2. View Tasks")
    print("3. Clear All")
    print("4. Exit")
    
    choice = input("> ")
    
    if choice == "1":
        new_task = input("What do you need to do? ")
        tasks.append(new_task)
        print("Added!")
    elif choice == "2":
        show_tasks()
    elif choice == "3":
        tasks.clear()
        print("All tasks cleared!")
    elif choice == "4":
        print("Goodbye! ✅")
        break

# ----------------------------------------
# 🎮 TRY THIS:
# Add option "5" to remove the last task!
# Use tasks.pop() to remove the last item!
# ----------------------------------------
