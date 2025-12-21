# Project: RPG Creator
# Goal: Independent Objects

class Hero:
    hp = 0

knight = Hero()
wizard = Hero()

knight.hp = 100
wizard.hp = 50

print("Knight HP:", knight.hp)
print("Wizard HP:", wizard.hp)
