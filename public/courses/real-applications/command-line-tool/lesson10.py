import sys
sys.argv = ["tool.py", "--version"]

if "--help" in sys.argv:
    print("Help menu...")
elif "--version" in sys.argv:
    print("Tool v1.0.0")
else:
    print("Running...")
