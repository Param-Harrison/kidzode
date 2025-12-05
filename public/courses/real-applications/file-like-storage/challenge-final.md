# Final Challenge: Fake Terminal 💻

You are building a Bash Simulator!

**Classes:**
1. `File(name, content)`
2. `Directory(name, parent)` (Holds children)
3. `System(root)` (Holds current directory)

**Commands to Implement:**
1. `mkdir <name>`: Create new folder in current dir.
2. `touch <name>`: Create new empty file in current dir.
3. `ls`: List current files.
4. `cd <name>`: Change directory (Support `..`!).
5. `tree`: Recursive print (Using Lesson 15).

**Scenario:**
- Start at `/root`.
- `mkdir home`
- `cd home`
- `touch note.txt`
- `ls` (Show note.txt)
- `cd ..`
- `tree`

Go build your OS! 🐧
