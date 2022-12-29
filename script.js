//task 1---------------------------------------

console.log( "TASK 1" );


let sister = {
    name : "Ana" ,
    age : 28 ,
}


let brother = {
    name :  "Levani" ,
    age : 21,
}
let difference = sister.age - brother.age;

let ageDiff = `ანა ლევანზე ${difference} წლით უფროსია`;



console.log(ageDiff);








//task 2------------------------------------------

console.log( "TASK 2" );


const nameArray = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
let mid_Name = (nameArray.length - 1) / 2;
console.log(nameArray[mid_Name]);




//task 3------------------------------------------

console.log( "TASK 3" );



let student = {
    firstName :"Harry",
    lastName : "Potter",
    age : 17,
    subjects: ["Dark Magic" , "Quidich" , "Poisions" , "Astronomy" , "Muggle Studies" , "Transfiguration"],
    roommate : {
        fulltName : "Ronald Weasley",
        age : 17,
        
    }

}


for(i = 0; i < student.subjects.length; i++){
    console.log(student.subjects[i]);
}


let studentFullname = `${student.firstName} ${student.lastName}`
console.log(studentFullname);

let result = `${studentFullname} არის ${student.age} წლის და მისი რუმმეითი არის : ${student.roommate.fulltName}`;
console.log(result);





//task 4------------------------------------------

console.log( "TASK 4" );



const boxArray = ["Banana", "Orange", "Apple", "Mango",2,12];

let p = 0;

while(typeof (boxArray[p]) == 'string'){
    console.log(boxArray[p]);
    p++;
}



//task 5------------------------------------------

console.log( "TASK 5" );



const numbersArray = [12,23,43,11,9,2,121,90];





for(n = 0; n < numbersArray.length; n++) {
        if(numbersArray[n]> 31 & numbersArray[n] % 2 == 0){
            console.log('Element is greater than provided value and is EVEN');
        }
        else if(numbersArray[n] < 31 & numbersArray[n] % 2 !=0){
            console.log('Element is less than provided value and is ODD');
        }
    
    }





