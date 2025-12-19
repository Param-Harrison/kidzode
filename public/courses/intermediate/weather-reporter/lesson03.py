cities = {
    "Paris": {"temp": 18, "status": "Clear"},
    "Berlin": {"temp": 12, "status": "Foggy"}
}

name = input("Enter city name: ")

if name in cities:
    info = cities[name]
    print(f"Weather in {name}: {info['temp']}°C and {info['status']}")
else:
    print(f"Sorry, we don't have data for {name} yet!")

# TRY THIS: Add 'Cairo' to the list so the search works!
