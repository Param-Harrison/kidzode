# Containment Logic 🏫

An object can **contain** other objects.
A `School` has a list of `Classrooms`.
A `Classroom` has a list of `Students`.
This is called "Composition".

### The Code
```python
class Classroom:
    def __init__(self, name):
        self.name = name
        self.students = []

class School:
    def __init__(self):
        self.rooms = []
```

### Your Goal
1. Define `Box`. Init `self.toys = []`.
2. Create `b = Box()`.
3. Append "Car" to `b.toys`.
4. Print `b.toys`.

### Practical Use
A `Folder` contains `Files`. A `Window` contains `Buttons`. This hierarchy is everywhere.
