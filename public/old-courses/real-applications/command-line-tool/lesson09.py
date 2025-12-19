import sys
sys.argv = ["git_fake.py", "status"]

command = sys.argv[1]

if command == "status":
    print("All good!")
elif command == "init":
    print("Initialized empty repo.")
else:
    print("Unknown command.")
