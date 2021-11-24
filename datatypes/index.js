const string = 'apple, banana, kiwi';

// 1. Өгсөн string - ийн бүх үсгийг том болго: 'APPLE, BANANA, KIWI'
let upper = string.toUpperCase();
console.log(upper)

// 2. Өгсөн string - ийг дараах хэлбэртэй болго: 'Apple; Banana; Kiwi'
let newarr = []
string.split(',').join()
console.log(string)
newarr.push(string)
console.log(newarr)

const array = ['d', 'e', 'c', 'a', 'b'];
// 3. Өгсөн array - ыг үсгийн дарааллаар эрэмблэ.
array.sort()

// 4. Өгсөн array - ын голын 3н элемэнтийг салгаж аваад array1 - гэсэн хувьсагчид хийнэ.
//    array болон array1 ийг хэвлэ.
let array1 = []
array1.push(array.splice(1,3))
console.log(array)
console.log(array1)
// 5. Өгсөн array - ын эхний элемэнтийг устага
array.shift()

// 6. Өгсөн array - ын сүүлийн элемэнтийг устага
array.pop()

// 7. Өгсөн array - ын урд 'z' үсэг нэм
array.unshift('z')

// 8. Өгсөн array - ын ард 'j' үсэг нэм
array.push('j')

// 9. Өгсөн array - ыг JSON string болго.
// -- Энд кодоо бичнэ үү!
