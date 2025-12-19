def logger(func):
    def wrapper(*args, **kwargs):
        print(f"Running {func.__name__} with {args}")
        return func(*args, **kwargs)
    return wrapper

@logger
def add(a, b):
    return a + b

print(add(2, 3))
