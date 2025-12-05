def my_decorator(func):
    def wrapper():
        print("Before running...")
        func()
        print("After running...")
    
    return wrapper

def say_hello():
    print("Hello!")

decorated_hello = my_decorator(say_hello)
decorated_hello()
