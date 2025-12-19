habits = [
    {"name": "Exercise", "completed": True},
    {"name": "Drink Water", "completed": False},
    {"name": "Study", "completed": True}
]

for h in habits:
    if h["completed"]:
        print(f"{h['name']}: Done! ✅")
    else:
        print(f"{h['name']}: Not yet ❌")
