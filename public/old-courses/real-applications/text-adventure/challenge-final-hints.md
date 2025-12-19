# Hints

## 🟢 Hint 1 (Combat)
Check if monster is in current room before allowing `attack`.
`monster = current_room.monster`

## 🟡 Hint 2 (Blocking)
Stop movement if monster is alive.
`if current_room.monster and current_room.monster.is_alive(): print("It blocks you!")`

## 🔴 Hint 3 (Win)
`if "Treasure" in player.inventory: print("You Win!") break`
