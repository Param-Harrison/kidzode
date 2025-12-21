### Solution

```python
class Alien:
    hp = 10

swarm = []
for i in range(5):
    swarm.append(Alien())

print("BOMB DROPPED!")

for a in swarm:
    a.hp -= 5

print("Alien 1 HP:", swarm[0].hp)
```
