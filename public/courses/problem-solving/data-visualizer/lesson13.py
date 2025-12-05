yesterday = 100
today = 120

if today > yesterday:
    print(f"Sales: {today} (⬆️ +{today - yesterday})")
elif today < yesterday:
    print(f"Sales: {today} (⬇️ -{yesterday - today})")
else:
    print(f"Sales: {today} (➡️ 0)")
