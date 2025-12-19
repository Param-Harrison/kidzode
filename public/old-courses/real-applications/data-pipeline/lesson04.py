def countdown():
    yield 3
    yield 2
    yield 1
    yield "Blastoff! 🚀"

for item in countdown():
    print(item)
