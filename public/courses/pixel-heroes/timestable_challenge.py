print("=== MULTIPLE TIMES TABLES ===")
print()

# Ask how many tables to show
count = input("How many times tables do you want to see? ")
how_many = int(count)

print()

# Show each times table
for table_num in range(how_many):
    # Ask which table
    table = input(f"Enter times table #{table_num + 1}: ")
    table_number = int(table)
    
    print()
    print(f"=== {table_number} TIMES TABLE ===")
    
    # YOUR TURN! Print the times table
    # HINT: Use a for loop from 1 to 10
    # HINT: Calculate answer = table_number * number
    # HINT: Print in format: print(f"{table_number} x {number} = {answer}")
    # Your code here:
    
    print()

print("All done! Great practice!")
