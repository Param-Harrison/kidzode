# Adding Sub-Objects ➕

We don't just add strings. We add full Objects.
`school.add_room(Room("Math"))`.

### The Code
```python
class Room:
    def __init__(self, name):
        self.name = name

class School:
    rooms = []
    def add(self, room_obj):
        self.rooms.append(room_obj)
```

### Your Goal
1. `class Student` with name.
2. `class Team` with `members = []`. `join(student)` method.
3. Create Team "Tigers".
4. Add Student "Leo". Add Student "Max".
5. Print total members.

### Practical Use
Shopping Carts contain Products. Libraries contain Books.
