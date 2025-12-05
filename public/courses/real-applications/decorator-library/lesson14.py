current_user = "guest"

def admin_only(func):
    def wrapper():
        if current_user != "admin":
            print("Access Denied! Admins only.")
        else:
            func()
    return wrapper

@admin_only
def delete_database():
    print("Database Deleted! 💥")

delete_database()
