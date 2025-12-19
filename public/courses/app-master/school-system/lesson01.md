# Containment Logic 🏫

Objects can be inside objects!
School -> Classrooms -> Students.
This is called **Containment**.

### The Setup
```python
class Classroom:
    def __init__(self, room_num):
        self.room = room_num
        self.students = []
```

### Your Goal
1. Define `class Classroom`.
2. Init takes `name`. Create empty `self.students`.
3. Create `c = Classroom("Science")`.
4. Print `c.name` and `c.students`.

### Achievement
🏫 **Principal**: You laid the foundation!
