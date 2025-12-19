# Solution

```python
class Fighter:
    def __init__(self, name, health, power):
        self.name = name
        self.health = health
        self.power = power

    def attack(self, target):
        target.health -= self.power
        print(f"{self.name} hits {target.name}! {target.name} has {target.health} HP.")

hero = Fighter("Hero", 100, 20)
boss = Fighter("Boss", 50, 10)

while True:
    # Hero Turn
    hero.attack(boss)
    if boss.health <= 0:
        print("Boss died! You Win! 🏆")
        break

    # Boss Turn
    boss.attack(hero)
    if hero.health <= 0:
        print("You died! Game Over. 💀")
        break
```

Output:
```
Hero hits Boss! Boss has 30 HP.
Boss hits Hero! Hero has 90 HP.
Hero hits Boss! Boss has 10 HP.
Boss hits Hero! Hero has 80 HP.
Hero hits Boss! Boss has -10 HP.
Boss died! You Win! 🏆
```

You made a game! 🎮
