def infinite_counter():
    n = 0
    while True:
        yield n
        n += 1

counter = infinite_counter()

print(next(counter))
print(next(counter))
print(next(counter))
