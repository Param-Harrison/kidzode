import datetime
import time

print("Starting Digital Clock... (Press Ctrl+C to stop)")

while True:
    now = datetime.datetime.now()
    readable_time = now.strftime("%I:%M:%S %p")
    
    print(readable_time)
    
    # Wait for 1 second
    time.sleep(1)

# Note: This will print a new line every second!
