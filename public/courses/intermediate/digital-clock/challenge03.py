import time
seconds = int(input("Countdown from? "))
for i in range(seconds, 0, -1):
    print(i)
    time.sleep(1)
print("TIME'S UP! ⏰")
