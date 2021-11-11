
def max_pairwise_product(numbers):
# should be at least two items in the arr
    if len(numbers) < 1:
        return -1
#set value for maxFirst
    maxFirstIndex = 0
#iterate the arr
    for i in range(len(numbers)):
#compearing items
        if numbers[maxFirstIndex] < numbers[i]:
            maxFirstIndex = i
    print(numbers[maxFirstIndex])

#set value for maxSecond
    maxSecondIndex = 0
#iterate the arr
    for i in range(len(numbers)):
# maxSecond shouldn't equal maxFirst
        if i != maxFirstIndex and numbers[maxSecondIndex] < numbers[i]:
            maxSecondIndex = i
    print (numbers[maxSecondIndex])
        
    return numbers[maxSecondIndex]* numbers[maxFirstIndex]

    
    
result = max_pairwise_product([12, 8, 11,15])

print(result)
