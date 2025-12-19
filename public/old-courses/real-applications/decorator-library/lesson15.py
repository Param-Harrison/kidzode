import functools

def log(func):
    @functools.wraps(func)
    def wrapper():
        func()
    return wrapper

@log
def my_func():
    """This helps me."""
    print("Func running")

print(my_func.__name__)
print(my_func.__doc__)
