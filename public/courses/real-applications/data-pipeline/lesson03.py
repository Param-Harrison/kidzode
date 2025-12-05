def count_to_three():
    print("Start")
    yield 1
    print("Back again")
    yield 2
    print("One more")
    yield 3
    print("Done")

counter = count_to_three()

print(next(counter))
print(next(counter))
print(next(counter))
