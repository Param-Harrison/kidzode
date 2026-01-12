# ========================================
# ⚡ CHALLENGE 2: Priority Tasks
# ========================================

tasks = []

while True:
    print("")
    print("1. Add Task with Priority")
    print("2. View Tasks")
    print("3. Exit")
    
    choice = input("> ")
    
    if choice == "1":
        task = input("What task? ")
        priority = input("Priority (High/Normal)? ")
        # Combine priority and task
        full_task = "[" + priority.upper() + "] " + task
        tasks.append(full_task)
        print("Added!")
    elif choice == "2":
        print("--- Your Tasks ---")
        for task in tasks:
            print("- " + task)
    elif choice == "3":
        break
