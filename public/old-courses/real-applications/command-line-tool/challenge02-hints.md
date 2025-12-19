# Hints

## 🟢 Hint 1
Get command: `cmd = sys.argv[1]`.
Numbers: `a = int(sys.argv[2])`, `b = int(sys.argv[3])`.

## 🟡 Hint 2
Check loud: `is_loud = "--loud" in sys.argv`.

## 🔴 Hint 3
Print logic:
```python
res = a + b
msg = f"Result: {res}"
if is_loud:
    print(msg.upper() + "!!!")
else:
    print(msg)
```
