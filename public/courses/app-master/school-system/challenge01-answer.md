### Solution

```python
class Student:
    def __init__(self, name):
        self.name = name

class Classroom:
    def __init__(self):
        self.students = []
    
    def add(self, s):
        self.students.append(s)
    
    def roll_call(self):
        for s in self.students:
            print(s.name)

room = Classroom()
room.add(Student("Alice"))
room.add(Student("Bob"))

room.roll_call()
```
