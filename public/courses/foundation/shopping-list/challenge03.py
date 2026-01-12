# ========================================
# ✈️ CHALLENGE 3: Packing List
# ========================================

# Step 1: Create an empty suitcase
suitcase = []

# Step 2: Ask for 3 items and add them
item1 = input("What do you want to pack? ")
suitcase.append(item1)

item2 = input("What do you want to pack? ")
suitcase.append(item2)

item3 = input("What do you want to pack? ")
suitcase.append(item3)

# Step 3: Print the packing list
print("")
print("Your suitcase contains:")
for item in suitcase:
    print("- " + item)
