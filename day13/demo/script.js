// console.log(y)
// // console.log(a)
// var y;
// var x=2;
// TDZ
// console.log(y)
// let z=2;
// let  y;

// console.log(i)   //err
// for(let i=0;i<5;i++){
    // console.log(i)
// }
// console.log(i)  //err
// var x=2;
// function abc(){
//     console.log(z)
//      let z=10;
// }
// console.log(z)
// abc()
// console.log(z) 

// console.log(x)
// const x=3.14;
// x=5;
// const x;
// for(const i=0;i<5;i++){

// }

// let x=7;
// x="hii";
// console.log(x) 

// functions
// 1- statment func
// function fun(){

// }
// 2-anonymouse func

// 3-expression func
// var x=function (){

// }

// x()

// 4-arrow func
// var x=(a,y)=>{
// // logic
// return "ljkhhg"
// }

// x(2,4)

// var usrNm="mona";
// var obj={usrNm:"ali",
// usrAge:20,
// dislay:function (){
//     console.log(this)
//     // var _self=this;
//     // lexical binding
//     window.setTimeout(()=>{
//         console.log(this)
//         console.log(this.usrNm)
//     },2000)
// }
// }

// obj.dislay();  //ali  

// rest parameter
// function fun (a,b,c,...param){
//     // for()
//     // sum+=arguments[i]
//     // arguments.join("-")
//     console.log(param)
    
//     return param.reverse();
// }

// console.log(fun(2,1,3,23,5,7,8,9))

// speread operator

// var arr=["mango","apple","orange"];
// var arr2=["kiwi" ,"banana",...arr];

// function fullNameIs(...data){
//     return "welcome ya "+ data[0]+ " " +data[1]
// }
// var myData=["Amany","Ayman"]
// console.log(fullNameIs(myData[0],myData[1]))
// console.log(fullNameIs(...myData))


// var arr=["mango","apple","orange"];
// // var arr3=["j,bhhbhj","jkbjh",...arr]
// // var arr3=arr;
// // arr3.push("ay7aga")

// var newarr=[...arr]

// newarr.push("hello")


var arr=[1,2,3,4,5,6,"a","b",function(){
    console.log('hi')
}]

// var xy=arr[arr.length-1]
// // console.log(xy)
// xy()


// var [a,b,,,,,h,,w]=arr;
// console.log(a)
// console.log(b)
// // console.log(c)
// console.log(h)
// console.log(w)





// var [a,b]="hello"
// console.log(b)
//  var obj={
//     namee:"ES6",
//     main:"JS",
//     born :2015
//  }
// var x=obj.namee
// var y=obj.main

// var {main:ay7aga}=obj;
// console.log(ay7aga)

// var id=1;
// // var age=30;

// var myData={
//     id,   //id=id
//     age   //age=age
// }







// function fullNameIs(fN,lN){
//         // return "welcome ya  fN "+ fN +" " +lN
//         return `welcome ya ${fN} ${lN}`
//     }

//     console.log(fullNameIs("nada" ,"mostafa"))
//     console.log(fullNameIs("aya" ,"mostafa"))

var subjects=["HTML" ,"CSS","JS"];
var newArr=subjects.map((elem)=>`I like ${elem}`)


