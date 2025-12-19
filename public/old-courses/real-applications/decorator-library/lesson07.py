def my_decorator(func):
    def wrapper():
        print("Power Up! 🍄")
        func()
    return wrapper

@my_decorator
def jump():
    print("I jumped high!")

jump()
