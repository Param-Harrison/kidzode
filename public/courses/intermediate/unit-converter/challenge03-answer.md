# Answer ✅
```python
def c_to_f(c): return c * 1.8 + 32
def f_to_c(f): return (f - 32) / 1.8

print("1. C→F  2. F→C")
choice = input("Pick: ")
if choice == "1":
    c = float(input("Celsius: "))
    print(c, "°C =", c_to_f(c), "°F")
else:
    f = float(input("Fahrenheit: "))
    print(f, "°F =", f_to_c(f), "°C")
```
