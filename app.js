// ------------------------------------Chapter 1------------------------------------------\


// alert("Hello user! Welcome to JAVASCRIPT")

// alert("Error! please enter a valid password")

// alert("Welcome to JS Land.. \nHappy Coding")

// alert("Welcomt to JS Land..")

// alert("Happy Coding \n prevent this page from creating additional dialogs")

// alert("Hello... I can run JS through my web browser's console")
// console.log("Hello... I can run JS through my web browser's console")




// -----------------------------------Chapter 2-------------------------------------------\

// // task 1
// var username

// // task 2
// var myName = "Muhammad Nabeel Jan"

// // task 3
// var message = "Hello World"
// alert(message)

// // task 4
// var student_name = "Muhammad Nabeel"
// var age = 25
// var course = "Certified Mobile Application Development"
// alert(student_name)
// alert(age)
// alert(course)

// // task 5
// var a = "PIZZA"
// alert( a + "\n" + "PIZZ" + "\n" + "PIZ" + "\n" + "PI" + "\n" + "P")

// // task 6
// var email = "jannnabeel12@gmail.com"
// var message = "My email address is : "
// alert(message + email)

// // task 7
// var Book = "A smarter way to learn JAVASCRIPT"
// alert("I am learning from book " + Book)
 
// //  task 8
// document.write("Yah! I can write HTML content through JavaScript")



// ------------------------------------Chapter 3-------------------------------------------\

// //  task 1
// age = 25
// alert("I am " +age+ " years old")

// //  task 2
// var visit = 13
// alert("you have visited this site " + parseInt((visit + 1)) + " times")

// //  task 3
// var birthYear = 1997
// var message = "Data type of my birth year : "
// document.write("My birth year is : " + birthYear + "<br>" + message + typeof(birthYear))

// // //  task 4
// var yourName = (prompt("Enter Name"))
// var product_name = prompt("Product")
// var qty = parseInt(prompt("Enter Quantity"))
// var storename = prompt("Enter store")
// document.write(yourName + " ordered " + qty + " " + product_name + " on " + storename )



// ------------------------------------Chapter 4-------------------------------------------\

// //  task 1
// var i=1,j=2,k=3 


// //  task 2
// // legal variables
// var a = 5
// var a5 = 25
// var my_name = "Nabeel"
// var myName = "Muhammad Nabeel"
// var a_1b = 20
// // illegal variables
// var 2a = 3
// var %5 = 4
// var ^a = 9
// var @a = 2
// var s+ = 1

// //task  3
// document.write("<h1>Rules for Naming JS Variables</h1> 1-Names can contain letters, digits, underscores, and dollar signs.<br> 2-Names must begin with a letter.<br> 3-Names can also begin with $ and _ (but we will not use it in this tutorial).<br> 4-Names are case sensitive (y and Y) are different variables.")
// document.write("<br>Variable names can only contain numbers, $, and _.<br>For example $my_1stVariable.<br>Variables must begin with a letter, $ or_.<br>For example $name, _name or name<br>Variable names are case<br>Variable names should not be JS _________")




// --------------------------------------Chapter 5---------------------------------------------\


//  task 1
// var a = parseInt(prompt("Enter first value"))
// var b = parseInt(prompt("Enter second value"))
// var c = a+b
// document.write("Sum of " + a + " and " + b + " is " + c)

// //  task 2
// var a = parseInt(prompt("Enter first value"))
// var b = parseInt(prompt("Enter second value"))
// var sum = a+b
// var sub = a-b
// var mul = a*b
// var div = a/b
// var mod = a%b
// document.write("Sum of "+a+" and "+b+ " is "+sum+"<br>"+"Subtraction of "+a+" and "+b+ " is "+sub+"<br>"+"Multiplication of "+a+" and "+b+ " is "+mul+"<br>"+"Division of "+a+" and "+b+" is "+div+"<br>"+"Modulus of "+a+" and "+b+ " is "+mod)

// // task 3
// //  a
// var a
// //  b
// document.write("The value after variable declarion is " +a)
// //  c
// a=5
// //  d
// document.write("<br>The value after initialization is a = " +a)
// document.write("<br>Initial value is "+a)
// //  e
// a++
// //  f
// document.write("<br>Value after increment is : "+a)
// // g
// a+=7
// //  h
// document.write("<br>Value after addition is : "+a)
// //  i
// a--
// //  j
// document.write("<br>Value after decrement is : "+a)
// //  k
// a%=3
// //  l
// document.write("<br>The remainder is : "+a)

// // task 4
// var cost = 600
// var qty = parseInt(prompt("How many tikets you want to buy"))
// document.write("Total cost to buy "+qty+" tickets is "+cost*qty)

// // task 5
// var table_num = parseInt(prompt("Enter Table Number"))
// document.write("Table of "+table_num+"<br>")
// for(var i=1; i<=10; i++){
    
//     document.write(table_num+" * "+i+" = "+table_num*i+"<br>")
// }

// // task 6
// var cel = parseInt(prompt("Enter Temperature in Celcius to convert in Fahrenheit"))
// var feh = parseInt(prompt("Enter Temperature in Fahrenheit to convert in Celcius"))

// var fah = (cel*9/5) + 32
// var cal = (fah-32)*5/9 

// document.write("Temperature in Celcius is "+cel+" Temperature in Fahrenheit is "+fah)
// document.write("<br>Temperature in Fahrenheit is "+feh+" Temperature in Celcius is "+cal)

// // task 7
//  var p1 = parseInt(prompt("Enter Price of item 1"))
//  var p2 = parseInt(prompt("Enter price of item 2"))
//  var q1 = parseInt(prompt("Enter Quantity of item 1"))
//  var q2 = parseInt(prompt("Enter quantity of Item 2"))
//  var sc = 100
//  var total_cost= p1*q1 + p2*q2 + sc

//  document.write("Price of item 1 is "+p1+"<br>Quantity of item 1 is : "+q1+"<br>")
//  document.write("Price of item 2 is : "+p2+"<br>Quantity of item 2 is : "+q2+"<br>")
//  document.write("Shipping Charge : "+sc+"<br>")
//  document.write("Total cost of your order is "+total_cost)


// // task 8
// var obt_marks = parseInt(prompt("Enter obtained marks"))
// var ttl_marks = parseInt(prompt("Enter total marks"))
// var per = (obt_marks*100)/ttl_marks

// document.write("Total marks are "+ttl_marks+"<br>")
// document.write("Obtained marks are "+obt_marks+"<br>")
// document.write("percentage is "+per)

// // task 9
// var dollar_in_rupee = 104
// var qty_dollars = 10
// var riyal_in_rupee = 28
// var qty_riyals = 25
// var exh_in_rupee = (104*10)+(28*25)

// document.write("Total Currency in PKR:"+exh_in_rupee)

// // task 10
// var num = parseInt(prompt("Enter Number"))
// var a=5,b=10,c=2
// document.write("The Result is : "+((num+a)*b)/c)

// // task 11
// var curr_year = parseInt(prompt("enter current year"))
// var birth_year = parseInt(prompt("enter your birth year"))
// var poss_age1 = curr_year-birth_year
// var poss_age2 = curr_year-birth_year-1
// document.write("Current year is "+curr_year)
// document.write("<br>Birth year is "+birth_year+"<br>")
// document.write("you may be "+poss_age1+" years old or<br>you may be "+poss_age2+" years old.")

// // task 12
// var rad = parseInt(prompt("Enter Radius"))
// var pie = 3.14159
// var cir = 2*pie*rad
// var area = pie*rad*rad

// document.write("Radius of a circle is "+rad+"<br>")
// document.write("Circumference of a circle is "+cir+"<br>")
// document.write("Area of a circle is "+area)

// // task 13
// var fav_snacks = prompt("Enter Your Favourite snacks")
// var age = parseInt(prompt("Enter Your Age"))
// var est_age = parseInt(prompt("Enter Estimated Maximum Age"))
// var amont_of_snacks = parseInt(prompt("Enter amount of snacks you eat per day"))
// document.write("<h1>The Lifetime Supply Calculator</h1>")
// document.write("Favourite Snacks are " + fav_snacks + "<br>")
// document.write("Current Age is "+age+"<br>Estimated Maximum age is "+est_age+"<br>")
// document.write("Amount of Snacks per day "+amont_of_snacks+"<br>")
// document.write("You will need "+amont_of_snacks*(est_age-age)*365+" "+fav_snacks)
// document.write(" to last you until the ripe age of "+est_age)




// ---------------------------------------Chapter 6-9-------------------------------\


// // task 1
// var a=10
// document.write("Result<br>The value of a is : "+a)
// ++a
// document.write("<br><br>........................................<br><br>")
// document.write("The value of ++a is : "+a)
// document.write("<br>Now the value of a is :"+a)

// document.write("<br><br>The value of a is : "+a)
// a++
// document.write("<br>Now the value of a++ is :"+a)

// a--
// document.write("<br><br>The value of a-- is : "+a)
// document.write("<br>Now the value of a is :"+a)

// document.write("<br><br>The value of a is : "+a)
// a--
// document.write("<br>Now the value of a-- is :"+a)

// // task 2
// var a=2, b=1
// document.write("--a : "+ (--a) + "<br>")
// document.write("--b : "+(--b)+"<br>")
// document.write("--a - --b : "+((--a)-(--b))+"<br>")
// document.write("--a - --b + ++b : "+((--a)-(--b)+(++b))+ "<br>")
// document.write("--a - --b + ++b +b-- : "+((--a)-(--b)+(++b)+(b--)))

// var result= --a - --b + ++b + b--
// document.write("<br>a is : "+a+"<br>b is : "+b+"<br>result is : "+result) 

// // // task 3
// var user = prompt("Enter your name")
// alert("Welcome ! "+ user)

// // task 5
// var table_num = (prompt("Enter Table Number"))
// var cont = ""
// for(var i=1; i<=10; i++){
//     if(table_num==cont){
//         document.write(5+" * " +i+ " = " + 5*i + "<br>")
//     }
//     else{
//         document.write(table_num+" * " +i+ " = " + table_num*i + "<br>")
//     }
// }

// // task 6
// var sub1 = prompt("Enter subject 1")
// var sub2 = prompt("Enter subject 2")
// var sub3 = prompt("Enter subject 3")
// var mark1 = parseInt(prompt("Enter marks of first subject"))
// var mark2 = parseInt(prompt("Enter marks of 2nd subject"))
// var mark3 = parseInt(prompt("Enter marks of third subject"))
// var total = 100
// var totall = 300
// var total_obt= mark1+mark2+mark3

// document.write("<table><tr><td><b>Subject</b></td><td><b>Total Marks</b></td><td><b>Obtained Marks<b></td><td><b>Percentage</b></td></tr>")
// document.write("<tr><td>"+sub1.toUpperCase()+"</td><td>"+total+"</td><td>"+mark1+"</td><td>"+(mark1*100)/100+"%</td></tr>")
// document.write("<tr><td>"+sub2.toUpperCase()+"</td><td>"+total+"</td><td>"+mark2+"</td><td>"+(mark2*100)/100+"%</td></tr>")
// document.write("<tr><td>"+sub3.toUpperCase()+"</td><td>"+total+"</td><td>"+mark3+"</td><td>"+(mark3*100)/100+"%</td></tr>")
// document.write("<tr><td><b>Result</b></td><td>"+totall+"</td><td>"+total_obt+"</td><td>"+((total_obt*100)/totall).toFixed(2)+"</td></table>")






// ------------------------------------Chapter 9-11----------------------------------------\


// // task 1
// var city_name = prompt("Enter City Name")

// if(city_name.toUpperCase()=="KARACHI"){
    
//     document.write("Welcome to city of lights "+city_name)
// }
// else{
//     document.write("Welcome to "+city_name)
// }

// // task 2
// var gender = prompt("Enter Gender")
// if(gender.toUpperCase()=="MALE"){
//     document.write("Good Morning Sir")
// }
// else if(gender.toUpperCase()=="FEMALE"){
//     document.write("Good Morning Ma'am")
// }
// else{
//     document.write("please enter your gender")
// }


// // task 3
// var color = prompt("Enter Road Traffic Color")
// if(color.toUpperCase()=="RED"){
//     document.write("You Must Stop")
// }
// else if(color.toUpperCase()=="GREEN"){
//     document.write("Move Now")
// }
// else if(color.toUpperCase()=="YELLOW"){
//     document.write("Get Ready to Move")
// }
// else{
//     document.write("Please enter traffic color")
// }



// // task 4
// var fuel = parseInt(prompt("Enter Remainig Fuel in Litres "))
// if(fuel<=0.25){
//     alert("please refill the fuel in your car.")
// }
// else{
//     alert("fuel")
// }



// task 5

// var a = 4
// if(++a === 5){
//     alert("Given condition for variable is true")
// }

// var b=82
// if(b++ === 83){
//     alert("Given condition for variable b is true")
// }

// var c = 12
// if(c++ === 13){
//     alert("condition 1 is true")
// }
// if(c === 13){
//     alert("condition 2 is true")
// }
// if(++c<14){
//     alert("condition 3 is true")
// }
// if(c === 14){
//     alert('condition 4 is true')
// }

// var materialCost = 20000
// var laborCost = 2000
// var totalCost = materialCost+laborCost
// if(totalCost === materialCost+laborCost){
//     alert("The cost equals")
// }
// if(true){
//     alert('true')
// }
// if(false){
//     alert('false')
// }

// if('car'<'cat'){
//     alert('car is smaller than cat')
// }


//     // task 6
// var totalMarks = parseInt(prompt("Enter Total Marks"))
// var obtainedMarks = parseInt(prompt("Enter marks obtained"))
// var percentage = (obtainedMarks*100)/totalMarks
// var grade
// var remarks

// document.write('<h1>Marks Sheet</h1><br><br><br>')

// if(percentage>= 80 && percentage<=100){
//     grade = 'A-one'
//     remarks = 'Excellent'
//     document.write('<h2>Total Marks : '+ totalMarks+'<br>')
//     document.write('Marks Obtained : '+ obtainedMarks+'<br>')
//     document.write('Percentage : '+percentage+'%'+'<br>')
//     document.write('Grade : '+grade+'<br>')
//     document.write('Remarks : '+remarks+'</h2>')
// }
// if(percentage>= 70 && percentage<80){
//     grade = 'A'
//     remarks = 'Good'
//     document.write('<h2>Total Marks : '+ totalMarks+'<br>')
//     document.write('Marks Obtained : '+ obtainedMarks+'<br>')
//     document.write('Percentage : '+percentage+'%'+'<br>')
//     document.write('Grade : '+grade+'<br>')
//     document.write('Remarks : '+remarks+'</h2>')
// }
// if(percentage>= 60 && percentage<70){
//     grade = 'c'
//     remarks = 'You need to improve'
//     document.write('<h2>Total Marks : '+ totalMarks+'<br>')
//     document.write('Marks Obtained : '+ obtainedMarks+'<br>')
//     document.write('Percentage : '+percentage+'%'+'<br>')
//     document.write('Grade : '+grade+'<br>')
//     document.write('Remarks : '+remarks+'</h2>')
// }
// if(percentage< 60 ){
//     grade = 'Fail'
//     remarks = 'Sorry'
//     document.write('<h2>Total Marks : '+ totalMarks+'<br>')
//     document.write('Marks Obtained : '+ obtainedMarks+'<br>')
//     document.write('Percentage : '+percentage+'%'+'<br>')
//     document.write('Grade : '+grade+'<br>')
//     document.write('Remarks : '+remarks+'</h2>')
// }


//     // task 7

// var num = 4
// var guessnum = prompt('Guess a num between 0 to 9')
// if(guessnum == num){
//     alert('"Bingo! Correct answer".')
// }
// else if(guessnum == num+1 || guessnum == num-1){
//     alert('"Close enough to the correct answer".')
// }
// else{
//     alert('Try again')
// }


//     // task 8

// var num = prompt('Enter a number')
// if(num%3 == 0){
//     alert(num+' is divisible by 3')
// }
// else{
//     alert('Try again')
// }

// // task 9

// var num = prompt('Enter a number')
// if(num%2 == 0){
//     alert('Even number')
// }
// else{
//     alert('Odd number')
// }

// // task 10

// var temp = prompt('Enter temperature')
// if(temp >= 40){
//     alert('"It is too hot outside."')
// }
// else if(temp >= 30 && temp<40){
//     alert('"The weather today is normal."')
// }
// else if(temp >= 20 && temp<30){
//     alert('"Today'+'s weather is cool."')
// }
// else if(temp < 20){
//     alert('"OMG! today'+'s weather is so cool".')
// }

// // task 11
// var fnum = parseInt(prompt('Enter first number'))
// var snum = parseInt(prompt('Enter second number'))
// var op = prompt('Enter Operator')
// if(op == '+'){
//     document.write('Sum of '+fnum+' & '+snum+' is '+(fnum+snum))
// }
// else if(op == '-'){
//     document.write('Difference of '+fnum+' & '+snum+' is '+(fnum-snum))
// }
// else if(op == '*'){
//     document.write('Product of '+fnum+' & '+snum+' is '+(fnum*snum))
// }
// else if(op == '/'){
//     document.write('Division of '+fnum+' & '+snum+' is '+(fnum/snum))
// }
// else if(op == '%'){
//     document.write('Remainder of '+fnum+' & '+snum+' is '+(fnum%snum))
// }





//---------------------     Chapter 12-13       -------------------------//


//  task 1


// var alpha = prompt('Enter any Alphabet')
// if(alpha >= charCodeAt(65) || alpha <= charCodeAt(90)){
//     document.write("You enter uppercase letter "+ alpha)
// }
// else if(alpha >= charCodeAt(97) || alpha <= charCodeAt(122)){
//     document.write("You entered lowercase letter "+ alpha)
// }
// else{
//     document.write('Only english letters are allowed')
// }

// // task 2
// var int1 = parseInt(prompt('Enter integer 1'))
// var int2 = parseInt(prompt('Enter integer 2'))
// if(int1 > int2){
//     document.write('Integer no 1; '+ int1 + ' is greater')
// }
// else if(int2 > int1){
//     document.write('Integer no 2; '+ int2 + ' is greater')
// }
// else if(int1 == int2){
//     document.write('Both intgers are equal')
// }

// // task 3
// var num = prompt("enter a number")
// if(num >=1){
//     alert('Positive Number')
// }
// else if(num <0){
//     alert('Negative Number')
// }
// else if(num ==0){
//     alert('Xero')
// }

// // task 4 
// var char = prompt('Enter a character')
// if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U'){
//     document.write(true)
// }
// else{
//     document.write(false)
// }

// task 5

// var correctPass = 'nabeel123'
// var inputPass = prompt('Enter your password ')
// if(inputPass !== correctPass){
//     alert('please enter your password')
//     document.write('Password you entered is "'+inputPass+'"')
// }
// else if(inputPass == correctPass){
//     alert('Correct! The password you enters matches the correct pass')
// }


// // task 6

// var greeting;
// var hour = 13
// if(hour < 18){
//     document.write('"Good Day"')
// }
// else{
//     document.write('"Good Evening"')
// }

// task 7

// var time = prompt("Enter time in 24 hours format")
// if(time >= 1 && time <= 12){
//     document.write(time+":OO = "+time)
// }
// else if(time == 13){
//     document.write(time+":OO = "+ 1)
// }
// else if(time == 14){
//     document.write(time+":OO = "+ 2)
// }
// else if(time == 15){
//     document.write(time+":OO = "+ 3)
// }
// else if(time == 16){
//     document.write(time+":OO = "+ 4)
// }
// else if(time == 17){
//     document.write(time+":OO = "+ 5)
// }
// else if(time == 18){
//     document.write(time+":OO = "+ 6)
// }
// else if(time == 19){
//     document.write(time+":OO = "+ 7)
// }
// else if(time == 20){
//     document.write(time+":OO = "+ 8)
// }
// else if(time == 21){
//     document.write(time+":OO = "+ 9)
// }
//     document.write(time+":OO = "+ 10)
// }
// else if(time == 23){
//     document.write(time+":OO = "+ 11)
// }
// else if(time == 24){
//     document.write(time+":OO = "+ 12)
// }
// else{
//     document.write('Please enter time only in 24 hours format 1-24')
// }




// -----------------------------------  Chapter 14-16   --------------------------------

// // task 1

// var studentsName = []

// // task 2

// var studentsName = ['']

// // task 3

// var stringArr = ['Hyderabd', 'Karachi', 'Mirpurkhas']
// console.log(stringArr)

// // task 4

// var numArr = [0,1,2,3,4,5,6,7,8,9]
// console.log(numArr)

// // task 5

// var boolArr = [true,false]
// console.log(boolArr)

// // task 6

// var mixArr =['Hyderabad',1,4,5,false]

// // task 7

// var qualArr = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M. phil", "PhD"]

// document.write("<h1>Qualifications</h1><br><br><br>")
// for(i=0; i<qualArr.length; i++){
    
//     document.write((i+1)+") "+qualArr[i]+"<br>")

// }

// task 8

// var students = ['Micheal', 'John', 'Tony']
// var Michealscore = prompt("Enter Michael's score")
// var johnscore = prompt("Enter John's score")
// var Tonyscore = prompt("Enter Tony's score")
// var totalscore = 500

// document.write("Score of Michael is "+Michealscore+". Percentage: "+(Michealscore*100)/totalscore+"%<br>")
// document.write("Score of John is "+johnscore+". Percentage: "+(johnscore*100)/totalscore+"%<br>")
// document.write("Score of Tony is "+Tonyscore+". Percentage: "+(Tonyscore*100)/totalscore+"%<br>")

// task 9
var colorNames = ['Red','Green','Blue','White','Black','Yellow','Purple']

    document.write("<h1>Color Names</h1>"+colorNames+"<br>")
    
    chooseColor = prompt('What color do you want to add in the beginning.')
    if(chooseColor == toLowerCase('red')){
        colorNames.push(chooseColor)
        document.write(colorNames)
    }
    else if(chooseColor == toLowerCase('green')){
        colorNames.push(chooseColor)
        document.write(chooseColor)
    }
    
    



