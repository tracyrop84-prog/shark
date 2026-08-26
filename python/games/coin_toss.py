import random
desired_outcome="tails"
num_occurences=int(input("how many tails do you want"))
total_tosses = 0
occurrences = 0
while occurrences<num_occurences:
   toss_result=random.choice(["heads","tails"])
   total_tosses+=1
   if toss_result==desired_outcome:
      occurrences+=1
print("total tosses",total_tosses)
print(desired_outcome,"occured",occurrences,"times")
