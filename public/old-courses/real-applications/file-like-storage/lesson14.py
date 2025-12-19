# Logic only - assumes Directory class exists
"""
def mv(self, filename, new_dir):
    item = self.find(filename)
    if item:
        self.children.remove(item) # Bye old home
        new_dir.add(item)          # Hello new home
        print(f"Moved {filename} to {new_dir.name}")
"""
