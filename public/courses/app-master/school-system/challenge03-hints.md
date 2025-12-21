# Hints for School Census

## 🟢 Hint 1
Nested State:
School -> Rooms list -> Room Object -> Students list.

## 🟡 Hint 2
Loop logic:
```python
total = 0
for r in self.rooms:
    total += len(r.students)
```

## 🟠 Hint 3
Setup:
Requires creating multiple room objects and adding them to the school.
