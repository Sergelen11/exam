// 1. 0 - ээс 100 хүртэлх тоог хэвлэ.
for(let i=0;i<100;i++){
    console.log(i+1)
}


// 2. 60 - с 30 хүртэлх бүх СОНДГОЙ тоог хэвлэ.
for(let i=60; i>=30; i--){
    console.log(i)
}

// 3. Чагтаас бүрдсэн квадрат зурах ба баруун тийшээ налсан диагональ нь нэмэх тэмдэг байна:
// ######+
// #####+#
// ####+##
// ###+###
// ##+####
// #+#####
// +######
for(let i=0, j=7; i<6; i++, j--){
    let txt = ''
    txt +='#'
    console.log(txt)
    if((i-j)===1){

    }
}

// 4. Регистрийн дугаар өгөхөд төрсөн он, сар, өдөр (YYYY-MM-DD) хүйсийг хэвлэдэг convertRegNum функц бич.
//      РД - гийн сүүлийн орон сондгой бол эрэгтэй, тэгш бол эмэгтэй байна.
// Жишээ нь:
//      convertRegNum('АБ90020321')
//      >> 1990-02-03 онд төрсөн эрэгтэй
//function convertRegNum(reg){
//    const string = reg.split('')
//    console.log(string)
//}
//convertRegNum(АБ90020321)
// 5. Бүх .red-boxes гэсэн класстай элемэнтийг улаан болго;
let arr = []
for(let i=0;i<3;i++){
     arr[i]=document.querySelector('.red-boxes').innerHTML
}

console.log(arr)
    document.querySelector('.red-boxes').innerHTML
// 6. blue-box гэсэн ID-тай элемэнтийг цэнхэр болго;
    document.querySelector('#blue-box').style.color = "blue";
  

// 7. Бүх div - ийг бор болго;
   let brown =  document.getElementsByTagName('div').innerHTML
   brown.style.color = "brown"


// 8. Шинээр box гэсэн класстай section tag үүсгээд, хар өнгөтэй болгоно.
//    Дотор нь box гэсэн класстай article tag үүсгэнэ.
//    article tag - ыг улаан өнгөтэй бөөрөнхий болгоно (JS - ээр)
//    section tag - ыг body руу append хийнэ.
//    улаан бөөрөнхий дээр дарахад бөөрөнхийг ногоон болгоно.
    const newsection = document.createElement('section')
    newsection.style.color = "black"
    const newarticle = document.createElement('article')
    newarticle.classList.add(box)
