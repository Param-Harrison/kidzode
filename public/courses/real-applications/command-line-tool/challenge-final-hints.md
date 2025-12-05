# Hints

## 🟢 Hint 1 (Subparsers)
`subparsers = parser.add_subparsers(dest="command")` lets you define `add`, `list`, etc.

## 🟡 Hint 2 (Add)
`p_add = subparsers.add_parser("add")`
`p_add.add_argument("task")`
`p_add.add_argument("--priority", default="normal")`

## 🔴 Hint 3 (Colors)
Check `if args.priority == "high":` then print with RED code.
