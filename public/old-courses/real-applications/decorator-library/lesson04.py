def get_greeter():
    def say_hi():
        return "Hi there!"
    
    return say_hi

my_func = get_greeter()

print(my_func())
