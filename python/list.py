animals = ["cow", "goat", "sheep"]
print(animals[0])
print(animals[1])
#changing an item
animals = ["cow", "goat", "sheep"]

animals[1] = "donkey"

print(animals)
#Adding items
animals = ["cow", "goat", "sheep"]

animals.append("chicken")
animals.remove("goat")
animals.pop(0)

print(animals)

fruits = ["apple", "banana", "orange"]
fruits[1]="mango"
fruits.append("pineapple")
fruits.remove("mango")
fruits.pop(1)
print(fruits)
print("mango" in fruits)
if "pinapple" in fruits:
    print("we have pineapple")

colors=["pink","blue","purple","red","orange"]
print(len(colors))
print(colors[0])
print(colors[4])
names=["racy","peter","parker","mary","jane"]
for name in names:
    print(name)
    print("tracy" in names)