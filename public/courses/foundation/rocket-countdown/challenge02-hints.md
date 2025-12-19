# Hints for Alarm Clock Challenge

## 🟢 Hint 1
Getting the number: `secs = int(input(...))`.

## 🟡 Hint 2
To count down from `secs` to 0:
```python
for i in range(secs, -1, -1):
    print(i)
    time.sleep(1)
```

## 🟠 Hint 3
Loud symbols:
```python
print("WAKE UP" + "!" * 50)
```
