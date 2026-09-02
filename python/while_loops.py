# count = 10
# while count >= 1:
#     print(count)
#     count = count - 1
# print("Blast off!")
# password=input("enter password")
# while password!="tracy":
#     print("invalid password")
#     password=input("enter password")
# print("Access granted!")


guess_count=0
secret_number=5
while guess_count<3:
    guess=int(input("guess number btn 1-10"))
    guess_count+=1
    if guess ==secret_number:
        print("guessed correct number")
        break
    else:
        print("wrong guess")
    if guess !=secret_number:
     print("run out of guesses number is",secret_number)