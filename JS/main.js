/*
//String - ตัวอักษร
let fname = 'John'
console.log('name',fname)
const idcard = 123

//Number
let age = 30
let hight = 160.5

idcard = '456'

fname = 'Tom'

console.log(idcard)

console.log(fname,age,age)
//console.log('Age =',age)
*/

/** 
 * + บวก
 * - ลบ
 * * คูณ
 * / หาร
 * % mod หารเอาเศษ
*/
/**
    condition statemant(if,else,switch)
    == เท่ากับ
    != ไม่เท่ากับ
    > มากกว่า
    >= มากกว่าเท่ากับ
    < น้อยกว่า
    <= น้อยกว่าเท่ากับ
 */
/*
let number1 = 5
let number2 = 5

//if - else condition
if (number1 != number2){
    console.log('this if')

}else if(number1==number2){
    console.log('this else if')

}else{
    console.log('this else')
}
*/
/*
let score = prompt('ใส่ตัวเลข')
if(score >= 80){
    console.log('Grade : A')
}else if(score >= 70){
    console.log('Grade : B')
}else if(score >= 60){
    console.log('Grade : C')
}else if(score >= 50){
    console.log('Grade : D')
}else {
    console.log('Grade : F')
}
*/

/*
 && และ
 || หรือ
 ! Not ไม่
 */
/*
let number1 = 5
let number2 = 10

//let condition = number1 >= 3 && number2 >= 5
// T && T

//let condition = number1 >= 3 && number2 >= 11
// T && F
 
let condition = !(number1 >= 3 || number2 >=11)
// T||F = T
console.log('result of codition',condition)
*/

/*
let number =20
if(!(number %2 ==0)){
    console.log('Your are event.')
}
*/

/**
 for
 */
/*
let counter = 0

while(counter <= 9){
    console.log('Hi')
    counter+=1

    //counter = counter + 1
    //counter+=1
    //counter++

}
for(let counter = 0; counter < 10; counter++){
    console.log('Hi')
}
*/
/*
let age1 = 20
let age2 = 25
let age3 = 30

let ages = [20,25,30]

//แทนที่
ages = [200,100,50]

console.log('age1 age2 age3',age1,age2,age3)
console.log(`age1 age2 age3 ${age1} ${age2} ${age3}`)
console.log('array',ages)

console.log('index',ages)
//ต่อ Array
ages.push(25)
console.log('push array',ages)

// ลบ Array ตัวสุดท้าย
ages.pop()
console.log('pop array',ages)
*/

/*
let ages = [50,20,25,30,35,40]

ages.sort()
console.log(ages)

let name_list = ['aa','bb','cc']
name_list.push('dd')
console.log(name_list)

name_list.pop()
console.log('pop name_list',name_list)
console.log('name_list',name_list.length)
console.log('name_list',name_list.length[0])
console.log('name_list',name_list.length[1])
console.log('name_list',name_list.length[2])

for(let index = 0; index < name_list.length;index++){
    console.log('name list',name_list[index])
}
*/

/*
object
*/
/*
let student = [{
    age: 30,
    name: 'aa',
    grade: 'A'
},{
    age: 35,
    name: 'bb',
    grade: 'B'
}]
student.push({
    age:40,
    name: 'cc',
    grade: 'C'
})

student.pop()

for(let index = 0;index < student.length;index++){
    console.log('Student Number',(index+1))
    console.log('age',student[index].age)
    console.log('name',student[index].name)
    console.log('grade',student[index].grade)
}

//let age1 = 30
//let name1 = 'aa'
//let grade1 = 'A'
*//*
function
*//*
let score1 = 55
let score2 = 65

let grade =''

function calculat_grade (score){
    if (score>=80){
     grade = 'A'
    }else if (score>=70){
        grade ='B'
    }else if (score>=60){
        grade ='C'
    }else if (score>=50){
        grade ='D'
    }else {
        grade ='F'
    }
return grade
}

//เรียกใช้
let grade1 = calculat_grade(score1)
console.log('Grade',grade1)
*//*
array
*//*

let score =[20,30,40,50]
//let newScore =[]

for (let index =0;index < score.length;index++){
    console.log('score',score[index])
}

let newScore = score.filter((s) => {
    return s >= 30
})
score.forEach((ns) => {
    console.log('New Score',ns)
})
*//*
Object function
*/
let students = [
    {
        name:'aa',
        score: 50,
        grade: 'D'
    },{name:'bb',
        score: 80,
        grade: 'A'
    }
]

let student = students.find((s) => {
    if (s.name== 'aa'){
        return true
    }
})

let double_score = students.map((s) => {
    s.score = s.score*2
    return s
})
let hightScore = students.filter((s) =>{
    if(s.score >= 60){
        return true
    }
})

console.log(student)
console.log('doble_score',double_score)
console.log('hightScore',hightScore)