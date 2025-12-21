### Solution

```python
class Room:
    def __init__(self, count):
        # We'll just fake it with a list of numbers
        self.students = range(count)

class School:
    rooms = []
    
    def count_all(self):
        total = 0
        for r in self.rooms:
            total += len(r.students)
        return total

s = School()
s.rooms.append(Room(2))
s.rooms.append(Room(3))

print("Total Students:", s.count_all())
```
