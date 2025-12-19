habits = [
    {"name": "A", "completed": True},
    {"name": "B", "completed": True},
    {"name": "C", "completed": False}
]

count = 0
for h in habits:
    if h["completed"]:
        count = count + 1

print(f"You finished {count} habits today!")
