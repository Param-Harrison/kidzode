# Inner Functions

We can define a function **inside** another function!
It only exists inside the parent.

```python
def parent():
    print("Parent started")

    def child():
        print("Child running")

    child() # Call the inner function
    print("Parent finished")

parent()
```

You'll see:
```
Parent started
Child running
Parent finished
```

Wait for it... this is the secret to decorators! 🤫

## Try This!
Try calling `child()` outside of `parent()`. It will crash!
