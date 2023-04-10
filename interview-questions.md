# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer:OOP is programming where everything is an object whether functional programming is based more on functions but can still have objects.

Researched answer: OPP is programming that is everything is based on objects and in functional programming it is based more on the functions and variables that are preforming the actions. Opp is better suited for operations that have many inputs but not as many operations to take place versus functional programming is better sutied for preforming more operations but have less inputs to process. From personal experience it seemed to me that OPP is a bit easier to understand as a novice programmer the main thing that I noticed from coding JS and Ruby is that the syntax in Ruby seems to be simpler and not as hard to recreate.

https://intellipaat.com/blog/functional-programming-vs-oop-difference/

1. What is the difference between a Float and an Integer in Ruby?

Your answer:In Ruby integers and floats are both 'numbers' the difference between both of them are that integers are whole numbers while floats are numbers that have a decimal ending.

Researched answer: In Ruby an example of a float is 1.25 while an example of an integer is 3. The imporatance of the differnce is when it comes to the accuracy of the calculations that you are preforming the float can give you a higher degree of accuracy. An exmaple would be when diving 2/113 that would return a interger of 0 but that is not a true statement because that would be equal to 0.01470588 (this would be a decimal type data in Ruby) but ingeters are rounded down to the nearest whole number. The use of integer vs float and decimal has to be decided when you think about what level of accuray you need in the result of the operation.

1. Ruby has an implicit return. What does that mean?

Your answer: Implicit return means that even if you do not state a return Ruby will read the last line of code in and return that.

Researched answer: In JavaScript a function needs to have a return statement in order for it to have a value for the return. In Ruby there is no need to use the "return" in order to recive an output when a method is ran this is what is known as implicit return and this occurs due to Ruby evaluating the last statement before "end" and returning that. If the progammer where to use "return" that would be known as an explicit return but the result would be exactly the same of implicit and explicit return for the method.

https://franzejr.github.io/best-ruby/idiomatic_ruby/implicit_return.html

1. What is a block in Ruby?

Your answer: A block is a function that is passed to a method to determine an outcome.

Researched answer: A block is a block of code that is used to get a return that is diffrent from the function but typically utilizes some of the data that is processed in the orginal function. Blocks are invoked by using the same name of the function. The logic or code of the block is always enclosed in curly braces ex. block ({}). You can also pass parameters into a block by using the word "yield" in the function that corresponds to the block if you want to pass more than one parameter you would use ||'s.

https://www.tutorialspoint.com/ruby/ruby_blocks.htm#:~:text=Similarly%2C%20Ruby%20has%20a%20concept,as%20that%20of%20the%20block.

1. How do you extract a value in a Ruby hash?

Your answer:To extract a value from a Ruby hash you will need to state the name of the hash and followed by square brackets and the key name inside of the brackets this will give access to the value that belongs to that key.

Researched answer: It is a data type in Ruby that allows to store data by key-pair values that cna be easily acessed by the key. The structure of a hash is cat = {"name" => "Maki", "age" => 1} as you can see the key and value is separated by the arrow syntax. To call the value from the key you would use the following notation puts cat ["name"] that should output "Maki". Hashes such like arrays have built-on methods that can be used to manipulate the data that is stored whitin the hash.

https://ruby-doc.org/core-2.7.0/Hash.html

## Looking Ahead: Terms for Next Week

1. RSpec: Ruby Specification is a testing framework for Ruby that is a behavior driven tool. What that means is that the test is checking how the code behaves and not if works such as out previous testing with jest.

2. Test-driven development: Test-driven development is a form of programming where the test are developed for for each feature of the code and the test typically is failed the the first time it. Then the developer is tasked with creating code or re=working existing code to make the test pass. An expample of a framework that is t-d-d is jest which does exactly as described thetest is written first then the code to pass the test is made or refactored after.

3. PostgreSQL: It is an open source relational database system. It allows applications to store data safely.

4. CRUD: This stands for Create, Read, Update and Delete. These are the basic operations that are necessary for creating and managing data.

5. HTTP: This stands for Hypertext Transfer Protocol. It is protocol that is used to transmit data to other computers or servers but can also be used to transmit data over the internet.
