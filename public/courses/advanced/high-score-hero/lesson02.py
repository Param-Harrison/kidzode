# ========================================
# 🥇 LESSON 2: Who Won?
# ========================================

players = ["Alice", "Bob", "Charlie"]
scores = [85, 92, 78]

# Find highest score
highest = max(scores)

# Find WHERE it is
position = scores.index(highest)

# Get the winner's name
winner = players[position]

print("Highest score:", highest)
print("Winner:", winner, "🏆")

# ----------------------------------------
# 🎮 TRY THIS:
# Change Charlie's score to 100 and see who wins!
# ----------------------------------------
