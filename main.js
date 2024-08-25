'use strict'
// const names = ['ali', 'vali', 'sali', 'sadi', 'soli']
// for(let i=0; i<names.length; i++){
//       console.log(names[i]);
// }

// let prom = prompt('Isim Kiriting')
// alert(prom.concat('jon'));

// let prom = prompt('Isim Kiriting')
// let big = prom.charAt(0).toUpperCase();
// let smal = prom.substr(1).toLowerCase();
// alert(big.concat(smal).concat('bek'));

// let prom = prompt('Time Selection')
// if(prom <= 12){
//       console.log('Hayrli Kun');
// }else if(prom >= 12 && prom <= 24){
//       console.log('Hayrli Tun');
// }else if(prom > 24){
//       console.log("bunday vaqt yo'q");
// }else{
//       alert('error')
// }
// let yosh = prompt('Yoshingizni kiriting')
// if(yosh < 18){
//       alert('Armiya yoshidan kichkinasiz 👶🏼👶🏼👶🏼');
// }else if(yosh >= 18 && yosh <= 27 ){
//       alert('Armiya yoshidasiz 🥷🏻🥷🏻🥷🏻');
// }else if(yosh > 27){
//       alert('Qaribsiz 🧓🏻🧓🏻🧓🏻');
// }else{
//       alert('error')
// }
// let yoshing = prompt('Yoshingizni kiriting')
// if(yoshing < 16){
//       console.log('Pasport Olish yoshidan kichkinasiz ❌');
// }else if(yoshing >= 16){
//       console.log('Pasport olish yoshidasiz ');
// }else if(yoshing >= 23){
//       console.log("Pasport olish yoshidan o'tgansiz");
// }
// else{
//       alert('error')
// }

// let prom1 = prompt('Ismingizni kiriting');
// let prom2 = prompt('Ismingizni kiriting');
// let prom3 = prompt('Ismingizni kiriting');
// let prom4 = prompt('Ismingizni kiriting');
// let ism1 = prom1
// let ism2 = prom2
// let ism3 = prom3
// let ism4 = prom4
// let array = []
// array.push(ism1);
// array.push(ism2);
// array.push(ism3);
// array.push(ism4);
// for(let i=0; i<array.length; i++){
//       alert(`Salom  ${array[i]}`);
// }

// let prom = prompt('Ismingizni kiriting');
// let al = prom.split('')
// let res = al.reverse()
// let ali = res.join('')
// console.log(ali);

// let ismlar = ['zohid', 'vohid', 'ali', 'vali', 'salim', 'hali']

// for(let i=0; i<ismlar.length; i++){
//       console.log(`Bu:  ${ismlar[i].concat('jon')}`);
// }
// let prom = prompt('Ismingizni kiriting')
// console.log(prom.split(''));
// if(prom % 2 == 0){
//       prom.toUpperCase()
// }else{
//       prom.toLowerCase()
// }


// Function
//  1.Function Decloraton
// function salomAyt(){
//       console.log('Hammaga salom');
// }
// salomAyt()
// 2.Function Experton
// let hayrAyt = function(){
//       console.log('Hammaga hayr');
// }
// hayrAyt()
// 3.Arrow Function
// let misol = ()=>{
//       console.log(5+4);
// }
// misol()

// function salomAyt(a){
//       console.log(`Salom ${a}`);
// }
// salomAyt('Islombek')
// salomAyt('Diyorbek')
// salomAyt('Zilola')

// function square(son){
//       console.log(son ** 2);
// }
// square(10)
// square(12)
// square(6)
// square(9)



// let ism = prompt('Isim kirit')
// let vaqt = prompt('Vaqt kirit')
// function user(ism, vaqt){
//       if(vaqt >= 6 && vaqt <= 19){
//             alert(`${ism} Hayrli kun`);
//       }else if(vaqt >=1 && vaqt <=5){
//             alert(`${ism} Hayrli tun`)
//       }else if(vaqt >= 20 && vaqt <= 24){
//             alert(`${ism} Hayrli tun`)
//       }else{
//             alert(`${ism} maroqli dam oling`)
//       }
// }
// user(ism, vaqt)


// function bar(name=ism, day='kun'){
//       let great = `Salom ${name} hayrli ${day}`
//       return great
// }

// for(let i=5; i<5; i++){
//       console.log('i:', i);
// }
// let a = 5;
// while(a<5){
//       console.log('a:', a);
//       a++
// } 
// let b = 5;
// do{
//       console.log('b:', b);
//       b++
// }while(b<5)

// let ballar = [30,50,70,40,0,15,89,100,23,77,88];
// console.log(ballar);

// for(let i=0; i<ballar.length; i++){
//       if(ballar[i] === 0){
//             console.log(`Sizning balingiz ${ballar[i]} qayta topshiring 🔃`);
//             continue;
//       }else if(ballar[i] === 100){
//             console.log(`Sizning balingiz ${ballar[i]} tugadi 🚫🚫🚫`);
//             break;
//       }
//       console.log(`Sizning balingiz ${ballar[i]}`);
// }

// let meva = 'olma';
// // if(meva === 'olma'){
// //       console.log('ha bu olma');
// // }else if(meva === 'nok'){
// //       console.log('ha bu nok');
// // }else if(meva === 'uzum'){
// //       console.log('ha bu uzum');
// // }else if(meva === 'anor'){
// //       console.log('ha bu anor');
// // }else if(meva === 'behi'){
// //       console.log('ha bu behi');
// // }else{
// //       console.log('bunday meva yoq');
// // }

// switch   
// let meva = 'olma';
// switch(meva){
//       case 'olma':
//             console.log('ha bu olma');
//             break;
//       case 'nok':
//             console.log('ha bu nok');
//             break;
//       case 'uzum':
//             console.log('ha bu uzum');
//             break;
//       case 'anor':
//             console.log('ha bu anor');
//             break;
//       case 'behi':
//             console.log('ha bu behi');
//             break;
//       default:
//             console.log('bunday meva yoq');
//             break;

// }

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<EXAM 1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let ism = prompt('Ismingizni kiriting')
// let ismlar =  ['abror','ahror','asror']
// if(ismlar.includes(ism)){
//       alert('Ha Bunday Ism Bor')
// }else{
//       alert(' Bunday Ism yoq')
// }

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<EXAM 2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let ismlar =  ['abror','ahror','asror']
// let i = 0;
// while(i<ismlar.length){
//       console.log(ismlar[i].concat('bek'));
//       i++
// }

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<EXAM 3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let viloyat = prompt('Viloyat Kirit')
// switch (viloyat) {
//       case 'Andijon':
//             alert(' 3 394 400 aholisi bor')
//             break;
//       case `Farg'ona`:
//             alert(' 3 994 800 aholisi bor')
//             break;
//       case 'Namangan':
//             alert('2931,5 ming aholisi bor')
//             break;
//       case 'Toshkent':
//             alert('2.931 million aholisi bor')
//             break;
//       case 'Sirdaryo':
//             alert('900 ming aholisi bor')
//             break;
//       case 'Jizzax':
//             alert('1 mln 483,1 ming  aholisi bor')
//             break;
//       case 'Samarkand':
//             alert('4 208,5 ming aholisi bor')
//             break;
//       case 'Qashqadaryo':
//             alert('3 560,6 ming aholisi bor')
//             break;
//       case 'Surhandaryo':
//             alert('2821,9 ming aholisi bor')
//             break;
//       case 'Buxoro':
//             alert('2.000.255 ming aholisi bor')
//             break;
//       case 'Navoiy':
//             alert('136 374 ming aholisi bor')
//             break;
//       case 'Xorazm':
//             alert('1,924 ming aholisi bor')
//             break;

//       default:
//             alert('error')
//             break;
// } 

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<EXAM 4>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let son = prompt('Belgilar kirit')
// if(son.length < 15){
//       let small = 15 - son.length
//       alert(`Siz yana ${small} ta belgi kiritishingiz mumkin`)
// }else{
//       let small = son.length - 15
//       alert(`Siz yana ${small} ta ko'p belgi kiritdingiz`)
// }


//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<EXAM 5>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let ism = prompt('Ismingizni kiriting');
// let hozirgiYil = prompt('Hozirgi Yilni Kiriting');
// let yosh = prompt('Yoshingizni kiriting');
// let formula = `${ism} sizni tugilgan yilingiz ${hozirgiYil - yosh}, yashagan oyingiz ${yosh*12}, yahagan haftangiz ${Math.floor((365 / 7) * yosh)}, yahagan kuningiz ${365*yosh}, yahagan soatingiz ${365*24 * yosh}, yahagan minutingiz ${365*24*60*yosh}, yahagan soniyangiz ${24*60*60*365*yosh}`
// alert(formula)



// let time = new Date()
// console.log(time);
// console.log(time.getDate());
// console.log(time.getDay());
// console.log(time.getFullYear());
// console.log(time.getHours());
// console.log(time.getMilliseconds());
// console.log(time.getMinutes());
// console.log(time.getMonth());
// console.log(time.getSeconds());
// console.log(time.getTime());
// console.log(time.getTimezoneOffset());
// console.log(time.getUTCDate());
// console.log(time.getUTCFullYear());
// console.log(time.getUTCHours());
// console.log(time.getUTCMilliseconds());
// console.log(time.getUTCMinutes());
// console.log(time.getUTCMonth());
// console.log(time.getUTCSeconds());

// console.log(Math);
// console.log(Math.floor(Math.random() * 20 + 1));
// console.log(Math.E);
// console.log(Math.LN10);
// console.log(Math.LOG10E);
// console.log(Math.LN2);
// console.log(Math.LOG2E);
// console.log(Math.PI);
// console.log(Math.SQRT1_2);
// console.log(Math.SQRT2);

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<Callback function>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function sayHi(p){
//       console.log("salom", p);
//       p()
// }
// sayHi(function(){
//       console.log(5+4);
// })

// function sayHi(p){
//     p('Tom')
// }
// sayHi(function(ism){
//       console.log(`Salom ${ism}`);
// })
// let user = {
//       ism: 'Islombek',
//       age: 12,
//       fam: 'Isroilov',
//       maktab: true,
//       money: null,
//       bilim: undefined,
//       friends: ['ali', 'vali', 'gani'],
//       dost:{
//             name: 'Ali',
//             age: 14,
//             money: null
//       },
//       salomAyt: function(){
//             console.log('Hammaga salom');
//       }
// }
// console.log(user);
// console.log(user.ism);
// console.log(user['age']);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user);
// console.log(user.dost.name);
// console.log(user.salomAyt());
// let komputers = [
//       {name: 'core i3', hdd: '500gb', color: 'red', ssd: '125gb', ozu: '8gb'},
//       {name: 'core i8', hdd: '1000gb', color: 'black', ssd: '125gb', ozu: '16gb'},
//       {name: 'core i7', hdd: '1000gb', color: 'white', ssd: '256gb', ozu: '8gb'},
//       {name: 'core i9', hdd: '2000gb', color: 'red', ssd: '256gb', ozu: '16gb'},
//       {name: 'core i11', hdd: '2000gb', color: 'blue', ssd: '500gb', ozu: '32gb'}
// ]
// for(let i=0; i<komputers.length; i++){
//       let item = komputers[i]
//       if(item.color === 'red') console.log(item);
// }
// komputers.forEach((item)=>{
//       if(item.color === 'red') console.log(item);
// })


// const myArray = [[false, true], [1,2], 99, 'yaxshi'];
// console.log(myArray.indexOf('yaxshi'));
// console.log(myArray[3]);

// const data = [[1,2,3], 'qizil', [4,5,6], true, false]
// console.log(data);
// console.log(data[2]);
// console.log(data[0]);

// const checkData = [null, `false`, 0,99, false, undefined, '', NaN, '0']
// for (let i = 0; i < checkData.length; i++) {
//       if (!checkData[i]) {
//             console.log(checkData[i]);
//         }
// }

// const numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9]
// for (let i = 0; i < numbers.length; i++) {
//       if (Number.isInteger(numbers[i]) && numbers[i] > 0) {
//           console.log(numbers[i]);
//       }
//   }

// let soz = prompt("So'zni kiriting:");
// let aHarifi = 'a';
// let rez = word.split(charToCount).length - 1;

// console.log(`"${aHarifi}" harfi "${soz}" so'zida ${rez} marta takrorlangan.`);


let tit = document.firstElementChild.lastChild.firstElementChild;
let h1 = document.getElementById('by')
let tit1 = document.getElementsByClassName('hi')
let tit3 = document.getElementsByTagName('h1')
let tit4 = document.getElementsByName('aka')
  