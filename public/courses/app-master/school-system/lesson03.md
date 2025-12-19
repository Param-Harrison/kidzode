# Nested Methods 📞

To print student names, we ask the Classroom.
The Classroom asks the Student object.
Delegation!

### The Logic
```python
# Inside Classroom
def show_all(self):
    for s in self.students:
        print(s.name)
```

### Your Goal
1. Define `Student` and `Classroom`.
2. Add `list_students(self)` to Classroom.
3. It loops and prints `s.name`.
4. Add 2 students.
5. Call `list_students()`.

### Achievement
📞 **Administrator**: You delegated a task!
