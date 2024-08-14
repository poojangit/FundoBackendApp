import random

def filp_coin(num_of_flips):
    
    """
    Description: flipping a coin and calculating percentage of head and tail
    Params:
        num_of_flips(int) : The number of times to flip the coin
    Returns: returns percentage of heads and tails
    """
    
    head = 0
    tail = 0

    for _ in range(num_of_flips):
        toss = random.random()
    if toss < 0.5:
        tail = tail + 1
    else:
        head = head + 1
    head_per = (head / num_of_flips) * 100
    tail_per = (tail / num_of_flips) * 100
    return head_per, tail_per

if __name__ == "__main__":
    print("hiiiiiii")
    num_of_flips = int(input("Enter number of timses to flip coins : "))
    head_per, tail_per = filp_coin(num_of_flips)
    print(f"head percentage is {head_per} and tails percentage is {tail_per}")
