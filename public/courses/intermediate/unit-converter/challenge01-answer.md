### One way to solve it:

```python
def km_to_miles(km):
    return km * 0.621

def c_to_f(c):
    return (c * 1.8) + 32

print("1) Kilometers to Miles")
print("2) Celsius to Fahrenheit")
choice = input("Select a conversion (1 or 2): ")

val = float(input("Enter value to convert: "))

if choice == "1":
    print(f"Result: {km_to_miles(val)} miles")
elif choice == "2":
    print(f"Result: {c_to_f(val)}°F")
else:
    print("Invalid choice!")
```
