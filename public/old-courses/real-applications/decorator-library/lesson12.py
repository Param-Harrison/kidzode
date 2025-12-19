def counter(func):
    def wrapper():
        wrapper.count += 1
        print(f"Run count: {wrapper.count}")
        func()
    
    wrapper.count = 0
    return wrapper

@counter
def click():
    print("Clicked!")

click()
click()
click()
