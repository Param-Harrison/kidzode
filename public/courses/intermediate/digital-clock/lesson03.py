import datetime
import time

print("Sleek Digital Clock ⌚")
print("(Wait for it...)")

while True:
    now = datetime.datetime.now()
    readable_time = now.strftime("%I:%M:%S %p")
    
    # end="\r" keeps the cursor on the same line
    # flush=True makes sure the text updates immediately
    print(f"Current Time: {readable_time}", end="\r", flush=True)
    
    time.sleep(1)
