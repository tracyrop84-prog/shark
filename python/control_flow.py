# age=int(input("what is your age"))
# if age<13:
#     print("Child")
# elif age>=13 and age<=17:
#     print("Teenager")
# else:
#     print("Adult")

# if age < 13:
#     print("Child")
# elif 13 <= age <= 17: #chained comparison
#     print("Teenager")
# else:
#     print("Adult")

age=int(input("what is your age"))
if age>=18:
    has_id=input("do you have an id? yes/no")
    if has_id=="yes":
     print("you can enter")
    else:
       print("id required")
else:
   print("you are too young")
