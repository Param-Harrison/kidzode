### One way to solve it:

```python
top = 0
for i in range(5):
    t = Troll()
    if t.hp > top:
        top = t.hp

print("Strongest:", top)
```
