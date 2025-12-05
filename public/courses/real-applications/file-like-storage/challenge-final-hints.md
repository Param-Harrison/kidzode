# Hints

## 🟢 Hint 1 (cd ..)
Check if name is "..". If so, `self.current = self.current.parent`.

## 🟡 Hint 2 (mkdir)
Create `Directory(name, parent=self.current)` and add to `self.current.children`.

## 🟠 Hint 3 (touch)
Create `File(name, "")` and add to children.

## 🔴 Hint 4 (tree)
Copy the recursive function from Lesson 15 and call it with `self.root`.
