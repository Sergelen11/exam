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
for(let i=6, k=0; i>=1; i--, k++){
    let char = ''
    for(let j=1; j<=i;j++){
        char+='# ' 
    }
    char+='* '
    if(i>=1 && k!==6 && i!==6){
        for(let g=1; g<=k; g++){
            char+='# '
        }
    }
    console.log(char)
    
}

// 4. Регистрийн дугаар өгөхөд төрсөн он, сар, өдөр (YYYY-MM-DD) хүйсийг хэвлэдэг convertRegNum функц бич.
//      РД - гийн сүүлийн орон сондгой бол эрэгтэй, тэгш бол эмэгтэй байна.
// Жишээ нь:
//convertRegNum('АБ90020321')
//     >> 1990-02-03 онд төрсөн эрэгтэй
function convertRegNum(reg){
    const string = reg.split('')
    string.splice(0,2)
    if(string[0]!==0 && string[0]!==1 && string[string.length-1]%2===1){
        console.log('19'+string[0]+string[1]+'-'+string[2]+string[3]+'-'+string[4]+string[5]+" ond tursun eregtei")
    }else if(string[string.length-1]%2===0){
        console.log('19'+string[0]+string[1]+'-'+string[2]+string[3]+'-'+string[4]+string[5]+" ond tursun emegtei")
    }else{
        console.log('20'+string[0]+string[1]+'-'+string[2]+string[3]+'-'+string[4]+string[5]+" ond tursun eregtei")
    }
}
convertRegNum('АБ90020320')
// 5. Бүх .red-boxes гэсэн класстай элемэнтийг улаан болго;
const red = document.getElementsByClassName('red-boxes')
for(let i=0;i<red.length;i++){
    red[i].style.color = "red"
}

// 6. blue-box гэсэн ID-тай элемэнтийг цэнхэр болго;
document.querySelector('#blue-box').style.color = "blue";
  

// 7. Бүх div - ийг бор болго;
let brown =  document.getElementsByTagName('div')
for(let i=0;i<brown.length;i++){
    brown[i].style.color = "brown"
}


// 8. Шинээр box гэсэн класстай section tag үүсгээд, хар өнгөтэй болгоно.
//    Дотор нь box гэсэн класстай article tag үүсгэнэ.
//    article tag - ыг улаан өнгөтэй бөөрөнхий болгоно (JS - ээр)
//    section tag - ыг body руу append хийнэ.
//    улаан бөөрөнхий дээр дарахад бөөрөнхийг ногоон болгоно.
    const body = document.querySelector('body')
    const newsection = document.createElement('section')
    newsection.style.backgroundColor = "black"
    const newarticle = document.createElement('article')
    newarticle.classList.add('box')
    newarticle.style.backgroundColor = "red"
    newarticle.style.borderRadius = "50%"
    newsection.style.display = "flex"
    newsection.style.justifyContent = "center"
    newarticle.setAttribute.onmouseup = "mUp(this)"
    function mUp(obj){
    obj.style.backgroundColor = "green"
    console.log('blabla')
    }
    newsection.append(newarticle)
    body.append(newsection)

    
