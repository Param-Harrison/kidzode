import time

def timer(func):
    def wrapper():
        start = time.time()
        func()
        end = time.time()
        print(f"Time taken: {end - start} seconds")
    return wrapper

@timer
def slow_task():
    time.sleep(1)
    print("Task done!")

slow_task()
