# ☁️ API ARCHITECT: CASE 008
# Goal: Auto-ID Generation

db = [{"id": 1}, {"id": 2}, {"id": 3}]

# 1. Calculate next ID
next_id = len(db) + 1

# 2. Create new record
new_record = {"id": next_id, "status": "active"}

# 3. Save
db.append(new_record)

print("New ID Assigned:", next_id)
