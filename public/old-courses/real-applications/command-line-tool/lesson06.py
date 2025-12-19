import sys
sys.argv = ["app.py", "start", "--dry-run"]

if "--dry-run" in sys.argv:
    print("Simulation only - not saving changes.")
else:
    print("Executing command...")

if "start" in sys.argv:
    print("Starting engine...")
