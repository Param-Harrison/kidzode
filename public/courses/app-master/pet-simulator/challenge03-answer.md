### One way to solve it:

```python
class Pet:
    def __init__(self):
        self.e = 10
    
    def feed(self):
        self.e += 5
        print("Yum! Energy:", self.e)
    
    def play(self):
        self.e -= 5
        print("Fun! Energy:", self.e)

p = Pet()

while True:
    cmd = input("Cmd: ")
    if cmd == "feed":
        p.feed()
    elif cmd == "play":
        p.play()
```
