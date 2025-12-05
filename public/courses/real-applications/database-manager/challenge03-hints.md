# Hints

## 🟢 Hint 1
Filter first: `rich = [p for p in db if p["coins"] > 20]`

## 🟡 Hint 2
Sort next: `sorted_rich = sorted(rich, key=lambda x: x["coins"])`

## 🔴 Hint 3
Loop and print: `print(p["name"])`
