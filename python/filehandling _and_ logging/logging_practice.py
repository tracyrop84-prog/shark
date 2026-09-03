import logging
logging.basicConfig(
    filename="app.log",
    level=logging.INFO
)

logging.info("Application started")
logging.warning("something might be wrong")
logging.error("could not save student data")
logging.critical("The student database is completely unavailable")
name=input("Enter student name")
course=input("Enter your course")
try:
    with open("students.txt","a") as file:
        file.write(name + "," + course + "\n")
except Exception as e:
    logging.error(f"could not save student data: {e}")
    print("something went wrong")
logging.info(f"Registered student: {name}")
print("Student registered successfully.")