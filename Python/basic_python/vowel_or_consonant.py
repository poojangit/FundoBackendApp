VOWELS = "aeiouAEIOU"
def vowel_or_consonant(char):
    
    """
    description : check if the alphabet is vowel or not
    params : take the parameter of any char
    result : results if it is vowel or consonant
    """
    
    if char.isdigit() :
        return "Please enter an alphabet"
    if char in VOWELS :
        return f"{char} is a Vowel"
    else : 
        return f"{char} is a Consonant"

if __name__ == '__main__' :
    alphabet = input("Enter an alphabet: ")
    print(vowel_or_consonant(alphabet))
    
