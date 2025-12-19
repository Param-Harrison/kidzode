# Solution

```python
grades = [85, 92, 78]

# Calculate Average
average = sum(grades) / len(grades)

# Determine Letter
if average >= 90:
    letter = "A"
elif average >= 80:
    letter = "B"
elif average >= 70:
    letter = "C"
else:
    letter = "F"

print("--- REPORT CARD ---")
print(f"Grades: {grades}")
print(f"Average: {average}")
print(f"Final Letter: {letter}")
```

Output:
```
--- REPORT CARD ---
Grades: [85, 92, 78]
Average: 85.0
Final Letter: B
```

You built a GPA calculator! 🏫
