# Decorator Collection

We can put all our decorators in one file/class.
This creates a **Decorator Library**.

```python
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
```

You'll see:
```
Log...
Timing...
Working
```

Organized power! 📦

## Try This!
Add a `Tools.shout` decorator!
