def get_numbers():
    yield 1
    yield 2
    yield 3
    yield 4

def even_filter(source):
    for n in source:
        if n % 2 == 0:
            yield n

stream = get_numbers()
filtered = even_filter(stream)

print(list(filtered))
