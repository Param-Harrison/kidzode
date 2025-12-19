# Hints

## 🟢 Hint 1
Start by parsing: `data = json.loads(weather_data)`

## 🟡 Hint 2
The name is inside "location": `city = data['location']['name']`

## 🟠 Hint 3
The temp is inside "current": `temp = data['current']['temp_c']`

## 🔴 Hint 4
Combine it in an f-string:
`print(f"Weather in {city}: {condition}, {temp}°C")`
