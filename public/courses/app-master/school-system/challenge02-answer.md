### Solution

```python
class Student:
    def __init__(self, name):
        self.name = name

class Classroom:
    students = []
    
    def find(self, target):
        for s in self.students:
            if s.name == target:
                return True
        return False

room = Classroom()
room.students.append(Student("Jim"))

print(room.find("Jim")) # True
print(room.find("Pam")) # False
```
