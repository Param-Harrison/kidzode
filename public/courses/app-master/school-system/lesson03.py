# Project: School System
# Goal: Drilling Down

class Teacher:
    name = "Dr. Smith"

class Classroom:
    def __init__(self):
        self.teacher = Teacher()

my_room = Classroom()

# Access Teacher INSIDE Classroom
print("Teacher Name:", my_room.teacher.name)
