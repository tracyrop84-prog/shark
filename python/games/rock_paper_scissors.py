import random

player1=input("choose rock, paper, or scissors")
player2=random.choice(["rock", "paper", "scissors"])

if player1==player2:
    print("its a tie")
elif player1=="rock" and player2=="scissors":
    print("player1 won rock crushes scissors")
elif player1=="paper" and player2=="rock":
    print("player1 won paper cover rock")
elif player1=="scissors" and player2=="paper":
    print("player1 won scissors cuts paper")
else:
    print("computer won")











# choices=["rock","paper","scissors"]
# player_choice="rock"
# computer_choice=random.choice(choices)

# print("player chose:",player_choice)
# print("computer chose:",computer_choice)

# #check for a tie
# if player_choice==computer_choice:
#     print("its a tie")
# #check if player wins
# elif player_choice=="rock" and computer_choice=="scissors":
#     print("player wins! Rock crushes scissors")
# elif player_choice=="paper" and computer_choice=="rock":
#     print("player wins! Paper covers rock")
# elif player_choice == "scissors" and computer_choice == "paper":
#     print("Player wins! Scissors cut paper.")
#     #if none of the above are true ,the computer wins
# else:
#     print("Computer wins!")

