# ☁️ API ARCHITECT: CASE 008
# Goal: Update Specific User

team = [
  {"id": 10, "score": 0},
  {"id": 20, "score": 5}
]

# We need to update ID 10
target = 10

# 1. Loop to find
for player in team:
    if player["id"] == target:
        # 2. Update
        player["score"] = 100
        print("Updated player", target)

print(team)
