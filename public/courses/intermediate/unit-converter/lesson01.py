def km_to_miles(km):
    # 1 km is about 0.621 miles
    return km * 0.621

dist_km = 10
dist_miles = km_to_miles(dist_km)

print(f"{dist_km} kilometers is {dist_miles} miles.")

# TRY THIS: Change the distance to 42 (a marathon!)
