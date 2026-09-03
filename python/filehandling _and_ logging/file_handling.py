name = input("Enter your name: ")
course = input("Enter your course: ")

with open("students.txt", "a") as file:
    file.write(name + ", " + course + "\n")