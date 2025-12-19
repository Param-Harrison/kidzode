def add(a, b):
    return a + b

def sub(a, b):
    return a - b

def calculate(func, x, y):
    return func(x, y)

print(calculate(add, 5, 3))
print(calculate(sub, 5, 3))
