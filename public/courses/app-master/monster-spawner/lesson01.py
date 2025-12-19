# 🏗️ APP MASTER: CASE 003
# Goal: Spawn Enemies

class Slime:
    pass

field = []

# 1. Spawn 3 slimes
for i in range(3):
    print("Spawning slime", i)
    s = Slime()
    field.append(s)

print("Total Slimes:", len(field))
