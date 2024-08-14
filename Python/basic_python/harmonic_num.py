def harmonic_num(num) :
    """
    description : Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N
    params : The Harmonic Value N. Ensure N != 0
    result : Print the Nth Harmonic Value.
    """
    result = 0
    if(num == 0) :
        return "Enter a valid positive integer"
    for i in range(1, num + 1):
        result += 1/i
        return f"{result:.2f}"
    
if __name__ == "__main__" :
    num = int(input("Enter the harmonic value: "))
    print(harmonic_num(num))