# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
# pseudocode:
# input: integer
# output: String that interpolates the argument to state if odd or not.
# create a method int_checker that takes in the integer. 
# using an conditional statement with an equality operator to check of integer is visible by two using the modulo operator that checks for remainder. 
# if the integer has a reaminder of 0 when divided by 2 that means it is even number and if it has a remainder of 1 the it would be an odd. 
# use the else statement as a catch all to return "not a number".
# once a condition is met the method is return the according result. 

def int_checker integer
    if integer % 2 == 0
         "#{integer} is even"
    elsif integer % 2 == 1 
         "#{integer} is odd"
    else 
        "not a number" 
    end
end
reposts1 = 7 
p int_checker 7  
# Expected output: '7 is odd'
# output: "7 is odd"

reposts2 = 42
p int_checker 42
# output: "42 is even"
# Expected output: '42 is even'


reposts3 = 221
p int_checker 221
# "221 is odd"
# Expected output: '221 is odd'



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# pseudocode:
# input:string 
# output: string with vowels removed. 
# create a function vowel_remover that takes in a string. 
# I first attempted using .downcase to make the string all lowercase and search for "aeiou" but the return was not correct. I tried to combine the .upcase method to method with not sucess for the desired result. lastly i tried combinng downcase with capitalize but return was also diffrent to the expected output. 
# using the .delete method omit the vowels in the string since some of the entries include capital letters I will include 'aeiouAEIOU' so when it copys the string it will look for lowercase and capital letters. 

def vowel_remover string
     string.delete "aeiouAEIOU"
    
end

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
p vowel_remover beatles_album1
# output: "Rbbr Sl"

beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'

p vowel_remover beatles_album2
# output "Sgt Pppr"

beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

p vowel_remover beatles_album3

# output "bby Rd"


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# pseudocode: 
# input; string 
# output: interpolated string notifying if the argument is a palindrome or not.
# create a mathod pali_checker that take in a string. 
# using a conditinal statement with an equality operator to preform the logic of the string being a palindrome. first we call the string that utulizes the downcase method and if that string is stricly equal to the string the uses the .reverse.downcase  method to flip all the letters in the string then it is a palindrome. Using else as a catch if the first condition is not met. (I had to add the .downcase method to both string and the reverse string due to reciving the output stating words where not palindromes that actually where and that was due to the capital letter.)
# return the interpolated string whether the arguement is a palindrome or not. 


def pali_checker string
    if string.downcase == string.downcase.reverse
        "#{string} is a palindrome"
    else 
        "#{string} is not a palindrome"
    end
end

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'

p pali_checker palindrome_tester1
# output: "Racecar is a palindrome"

palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'

p pali_checker palindrome_tester2
# output: "LEARN is not a palindrome"

palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

p pali_checker palindrome_tester3
# output: "Rotator is a palindrome"
