import random

def retry(func):
    def wrapper():
        for i in range(3):
            try:
                return func()
            except ValueError:
                print(f"Failed! Retrying... ({i+1}/3)")
        
        print("Gave up!")
    return wrapper

@retry
def risky_task():
    if random.randint(1, 100) > 20:
        raise ValueError("Bad luck!")
    print("Success! 🎉")

risky_task()
