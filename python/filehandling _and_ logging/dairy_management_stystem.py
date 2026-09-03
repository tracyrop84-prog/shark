cow = input("Enter cow name: ")
morning = input("Morning litres: ")
evening = input("Evening litres: ")

# with open("milk_records.txt","a") as file:
#     file.write(cow + "," + morning + "," + evening + "\n")

with open("milk_records.txt", "r") as file:
    records = file.read()

print(records)
with open("milk_records.txt", "r") as file:
    first_record = file.readline()

print(first_record)
with open("milk_records.txt", "r") as file:
    records = file.readlines()

print(records)
for record in records:
    print(record.strip())
with open("milk_records.txt", "w") as file:
    file.write("Daisy,10,8\n")