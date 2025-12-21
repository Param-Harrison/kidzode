# Project: School System
# Goal: Adding Objects

class Book:
    def __init__(self, title):
        self.title = title

class Library:
    def __init__(self):
        self.shelves = []
    
    def stock(self, book):
        self.shelves.append(book)

city_lib = Library()
city_lib.stock(Book("Harry Potter"))
city_lib.stock(Book("The Hobbit"))

print("Books:", len(city_lib.shelves))
