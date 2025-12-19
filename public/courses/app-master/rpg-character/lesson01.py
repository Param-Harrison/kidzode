# 🏗️ APP MASTER: CASE 002
# Goal: Independent Objects

class Clone:
    def __init__(self):
        self.msg = "Hello"

# 1. Create two clones
c1 = Clone()
c2 = Clone()

# 2. Change one
c1.msg = "Goodbye"

# 3. Prove they are different
print("Clone 1 says:", c1.msg)
print("Clone 2 says:", c2.msg)
