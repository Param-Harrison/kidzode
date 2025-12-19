# 🏗️ APP MASTER: CASE 007
# Goal: Add Object to List

class Book:
    def __init__(self, title):
        self.title = title
    def __repr__(self): return self.title

class Library:
    def __init__(self):
        self.shelf = []
    
    def stock(self, book_obj):
        self.shelf.append(book_obj)

lib = Library()
b1 = Book("Harry Potter")

lib.stock(b1)
print(lib.shelf)
