# Hints

## 🟢 Hint 1
Filter: `if log.startswith("ERROR"):`

## 🟡 Hint 2
Cleaner: `yield log.replace("ERROR: ", "")`

## 🔴 Hint 3
Chain: `cleaner(error_filter(get_logs()))`
