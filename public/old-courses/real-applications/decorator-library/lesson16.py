class Tools:
    @staticmethod
    def log(func):
        def wrapper():
            print("Log...")
            func()
        return wrapper
    
    @staticmethod
    def timer(func):
        def wrapper():
            print("Timing...")
            func()
        return wrapper

@Tools.log
@Tools.timer
def task():
    print("Working")

task()
