# Solution

```python
import sys
# sys.argv = ["calc.py", "add", "5", "5", "--loud"]

args = sys.argv
cmd = args[1]
n1 = int(args[2])
n2 = int(args[3])
loud = "--loud" in args

result = 0
if cmd == "add":
    result = n1 + n2
elif cmd == "sub":
    result = n1 - n2

msg = f"The result is {result}"

if loud:
    print(msg.upper() + "!!!")
else:
    print(msg)
```
