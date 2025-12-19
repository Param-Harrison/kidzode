# Access Granted ✅

What if the user doesn't exist? The program will crash!
We first check `if user in db`.

### The Safe Way
1. Ask for username.
2. Check if username exists.
3. If yes, ask for password.
4. Check password.

### Your Goal
1. Create `users = {"me": "123"}`.
2. Create `input_user = "you"`.
3. Check `if input_user in users`.
4. Inside `else`, print "User not found".

### Achievement
✅ **Logic Master**: You handled missing users safely!
