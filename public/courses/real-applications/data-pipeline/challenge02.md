# Mini-Challenge 2: Log Cleaner

Your server Logs are messy!
`logs = ["INFO: Started", "ERROR: Crash 1", "INFO: Working", "ERROR: Crash 2"]`

**Your Goal:**
1. Create a `get_logs()` generator that yields the list above.
2. Create an `error_filter(logs)` that ONLY yields strings starting with "ERROR".
3. Create a `cleaner(logs)` that removes "ERROR: " from the string (yielding just "Crash 1").
4. Chain them and print the result!

Go clean up! 🧹
