# Hints

You need TWO loops - one inside the other! The outer loop asks for each times table, the inner loop prints 1-10.

---

Start with asking how many tables: `how_many = int(input("How many times tables? "))`. Then use `for table_num in range(how_many):` for the outer loop.

---

Inside the outer loop, ask which table number: `table_number = int(input(f"Enter times table #{table_num + 1}: "))`. Use `table_num + 1` to show friendly numbers (1, 2, 3 instead of 0, 1, 2).

---

Then add the inner loop to print the times table: `for number in range(1, 11):` and multiply `table_number * number` inside!

