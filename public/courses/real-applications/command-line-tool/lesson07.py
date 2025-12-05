import sys
sys.argv = ["app.py", "--name", "Param", "--count", "3"]

name = "Guest"
if "--name" in sys.argv:
    idx = sys.argv.index("--name")
    name = sys.argv[idx + 1]

print(f"Name set to: {name}")
