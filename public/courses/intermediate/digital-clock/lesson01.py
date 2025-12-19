import datetime

# Get the current time
now = datetime.datetime.now()

# Format it: %H is Hour, %M is Minute, %S is Second
# %p is AM/PM
readable_time = now.strftime("%I:%M:%S %p")

print("The current system time is:")
print(readable_time)

# TRY THIS: Change %I to %H to see 24-hour time!
