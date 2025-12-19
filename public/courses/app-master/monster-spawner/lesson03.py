# 🏗️ APP MASTER: CASE 003
# Goal: Mass Control

class Bee:
    def buzz(self):
        print("Bzzz...")

hive = [Bee(), Bee(), Bee()]

# 1. Make them all buzz
for b in hive:
    b.buzz()
