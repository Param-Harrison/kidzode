def sub_gen():
    yield 1
    yield 2

def main_gen():
    yield 0
    yield from sub_gen()
    yield 3

print(list(main_gen()))
