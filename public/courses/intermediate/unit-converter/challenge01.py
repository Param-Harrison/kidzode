import random

def km_to_miles(km):
    return km * 0.621

km = float(input("Enter kilometers: "))
miles = km_to_miles(km)
print(str(km) + " km =", str(miles) + " miles")
