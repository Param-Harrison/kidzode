def number_gen():
    yield 0
    yield 1
    yield 2
    yield 3
    yield 4

def doubler(source):
    for n in source:
        yield n * 2

source = number_gen()
pipeline = doubler(source)

for item in pipeline:
    print(item)
