# Hints

## 🟢 Hint 1
`Player` needs `self.inventory = []`.

## 🟡 Hint 2
`get` command: Remove from `current_room.items` and add to `player.inventory`.

## 🔴 Hint 3
Lock logic:
```python
if next_room.name == "Vault" and "Key" not in inventory_names:
   print("Locked!")
   continue
```
