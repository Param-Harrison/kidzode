import argparse
import sys

# Simulate inputs to test
# sys.argv = ["todo.py", "add", "Eat Pizza", "--priority", "high"]

tasks = [] # Store tasks here

parser = argparse.ArgumentParser()
subparsers = parser.add_subparsers(dest="command")

# Add Command
# parser_add = subparsers.add_parser("add")
# parser_add.add_argument("task")
# ...

# List Command
# ...

# Parse and Execute logic...
