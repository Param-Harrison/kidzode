### One way to solve it:

```python
health = 60
hit = 20

print("Fight Start! HP:", health)

while health > 0:
    print("Taking hit...")
    health -= hit
    print("HP Left:", health)

print("--- KNOCKOUT ---")
```
