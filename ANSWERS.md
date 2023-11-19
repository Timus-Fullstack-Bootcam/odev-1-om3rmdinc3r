
# Project Title

A brief description of what this project does and who it's for


# Ödev 1 - Ömer Dinçer

### 1 - JavaScript nedir ve tarihsel gelişiminden bahsedin

JavaScript , 1995 Yılında Brandan Eich tarafından geliştirilmeye başlanmıştır. Geliştirilme süreçleri içerisinde Mocha, Mona gibi isimlerle anılmış, en sonunda JavaScript ismi ile devam etmiştir. HTML ve CSS ile geliştirilmiş Web sayfalarını dinamik hale getiren, web tarayıcıları tarafından yorumlanan, yani compile edilmeyen, browser tabanlı çalışabilen bir script dilidir. 2009 yılında NodeJs'in Google Chrome tarafından kullanılan V8 JavaScript Motoru'nu browser'lardan bilgisayarlara taşıması ile birlikte, Express, Fastify gibi sunucu geliştirme kütüphaneleri ve React, Vue gibi ön yüz geliştirme kütüphanelerinin önü açılmış, JavaScript hem ön yüz hem de sunucu geliştirme tarafında birlikte kullanılmaya başlanarak büyük bir ekosistem haline gelmiştir.

JavaScript, zaman içinde birçok versiyon geçirmiş ve her yeni sürümle birlikte bir dizi özellik eklenmiştir. Bugüne kadar **ECMAScript** adı ile 12 adet yeni versiyonu çıkarılmış,Try/catch blokları , JSON nesneleri , Promise objeleri , **null** , **undefined** gibi veri tipleri bu versiyonlar ile eklenmiştir. 

--------
--------
--------

### 2 - Java ile JavaScript arasındaki fark nedir

Java dili nesneye yönelik, derlenen, farklı ortamlar üzerinde çalıştırılabilen (bilgisayar,telofon vs) çeşitli alanlarda uygulamalar geliştirilebilen bir programlama diliyken, JavaScript web tarayıcıları üzerinde çalışarak web sayfalarını daha dinamik hale getirmeye yarayan, yorumlanan bir script dilidir. Yazılım camiasının deyimiyle :  **Java is to JavaScript as Car is to Carpet** 

--------
--------
--------
### 3 - JavaScript'teki veri tipleri nelerdir.

Javascript'te farklı kategorilerde sınıflandırılmakla beraber, 8 adet veri tipi bulunmaktadır. Bunlar :
* String : Metin şeklinde ifadelerin tutulduğu veri tipidir.
```javascript
   let company = "Timus Networks";  
   ```

* Number : Sayıların tutulduğu veri tipidir. (-2^53-1 ile 2^53-1 aralığı) 
 ```javascript
   let yas = 27;     // Tam sayı
   const pi_sy = 3.14;   // Ondalık sayı
   ```

* Bigint : Number veri tipinin sınırlarından daha büyük olan sayıların tanımlanması için kullanılan veri tipidir.
```javascript
   const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111"); //bu sayı, JavaScript'te Number sınırlarını aşan bir sayıdır.
   ```

* Boolean: **true** ve **false** değerler için kullanılan veri tipidir.
```javascript
   const isTrue = true;     
   const isFalse = false;
   ```

* Undefined : **null** tipi ilen karıştırılmasına karşın,**undefined** veri tipi *herhangi bir değer atanmamış* anlamına gelir, yani değişken tanımlanmış ama herhangi bir değer atanmamış anlamına gelir.

* Null :  Kendi başına null değerini tutan bir veri türüdür.

```javascript
   const isUndefined;
   const isNull = null;
   ```

Yukarıda verilen veri tipleri, JavaScript ekosisteminde **Primitive** veri tipleri olarak isimlendiriliyor. Aşağıdaki tipler ise, JavaScript'in gelişimini takiben farklı problemleri çözmek için dile eklenmiştir veya geliştirilmiştir

* Object : 
Objeler,  **Non-primitive** veri tipleri olarak isimlendirilir, farklı özellikleri olmasına karşın, en büyük ortak özellikleri *Reference Type*  olarak isimlendirilmelidir, yani bu tipler, doğrudan değişkenleri tutmak yerine, bir bellek adresi (referansı) tutarlar, asıl değerler, bellekte başka bir adreste tutulur.

* Object : JavaScript'te, primitive tipler hariç her şey bir objedir, basitçe bir obje, karmaşık veri yapılarını bir araya getirip yönetebileceğimiz yapılardır.

```javascript
   var student = {
       name: "Ömer",
       age: 26,
       course: "Timus Bootcamp"
   };
   ```

![Data Types](https://phpforever.com/javascript/data-types-in-javascript/)

--------
--------
--------
### 4 - null ile undefined arasıdaki fark nedir açıklayınız
Bir önceki alanda da ifade edildiği gibi, **null** tipi Kendi başına null değerini tutan bir veri türüdür. Buna karşın **undefined** değişken tanımlanmış ama herhangi bir değer atanmamış anlamına gelir. Farklı kullanım durumları olmasına rağmen , if clause içerisinde ikisi de **false** döner.

--------
--------
--------
### 5 - NaN nedir ?
NaN, JavaScript'te bir değerin **sayı olmadığını** (Not a Number) belirtir. Bir sayıyı sıfıra bölmek gibi tanımlanamayan bir işlem veya bir string ifadenin sayıya çevirilmesi (eğer karakterlerden oluşuyorsa) gibi işlemler sonucunda ortaya çıkabilir. Dikkat edilmesi gereken en önemli özelliği, NaN değerlerin kendilerine veya başka bir NaN ifadeye eşit olmadığıdır. Eşitlik karşılaştırmaları yerine **isNaN** kullanılarak kontrol edilmedilir.
```javascript
  NaN === NaN; // false
  isNaN(NaN); // true
   ```

--------
--------
--------
### 6 - Javascript’te yorum satırı eklemenin kaç farklı yolu vardır ?

Javascript'te tekli yorum satırı eklemek için "//" karakterleri , çoklu yorum satırı eklemek için ise "/**/" kullanılabilir
Örn:

 ```javascript
 let bootcamp = "Timus";
//Javascript'te bu bir tekli yorum satırıdır.
/*
    JavaScript'te
    Bu
    Çoklu
    Yorum
    Satırıdır.
*/ 
   ```
--------
--------
--------
### 7 - Global değişken nedir ?

JavaScript'te, "global değişken" terimi, bir değişkenin programın herhangi bir yerinden erişilebilir ve kullanılabilir olduğunu ifade eder. Yani, global bir değişken programın herhangi bir bölümünde tanımlandıysa, o değişkenin değerine herhangi bir yerden ulaşılabileceği ve değiştirilebileceği anlamına gelir.Global değişkenlerin kullanımı, kodun karmaşıklığını artırabilir ve hata riskini artırabilir. Bu yüzden, bu riskleri en aza indirmek için **scope** kavramına önem verilmelidir.

--------
--------
--------
### 8 - Javascript’te this anahtar kelimesi nedir açıklayınız ?
Javascript'te this anahtarı , o an içerisinde bulunduğu nesneyi temsil eder.
- Bir metot içerisinde kullanıldığı zaman ait olduğu nesneyi temsil eder.

- Tek başına kullanıldığı zaman global bir nesneyi temsil eder.

- Bir fonksiyon içerisinde kullanılırsa global bir nesneyi ifade eder.

- Eğer katı modda bir fonksiyonun içerisinde kullanılırsa undefined yani tanımsız değerini döndürür.

- Bir olayda (tıklama, çift tıklama gibi) olayın gerçekleştiği elementi temsil eder.
```javascript
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
   ```
yukarıdaki **this** anahtarı, içinde bulunduğu **person** objesini temsil eder. *this.firstName*, person objesinin *firstName* değişkenini temsil eder.

--------
--------
--------
### 9 - == ile === farkını örnekler ile açıklayınız
'==' ile '===' arasındaki fark, tip ve değerlerin karşılaştırılmasıdır. '==' ile yapılan eşitlik değeri kontrollerinde, operatör tip değişimi gerçekleştirir.
1.String ve Number karşılaştırılması

```javascript
"5" == 5; // true, çünkü string "5", sayıya dönüştürülerek karşılaştırılır
   ```

2. Boolean ve Diğer Tipler:

```javascript
true == 1; // true, çünkü true sayıya dönüştürülerek karşılaştırılır
   ```

3. Null ve Undefined Karşılaştırması:

```javascript
null == undefined; // true, çünkü null ve undefined birbirine eşittir
   ```

'===' operatörü, bunun gibi karşılaştırma problemlerine çözüm olarak, değer ve tip eşitliğini arar.

```javascript
"5" === 5; // false, çünkü string "5", ve sayı 5 farklı tiplerdir
null == undefined; // false, çünkü null ve undefined farklı TÜRLERDİR.
   ```

### 10 - let var const farkını tablo yapınız

|  Özellik | let     | var      | const    |
| ---------|:-------:| --------:| --------:|
| Değer ataması        | İlk kullanımda atanır  | İlk kullanımda atanabilir        |  Tanımlama sırasında atanır        |          
| Değer atanmazsa        | undefined olarak atanır   | undefined olarak atanır       | Hata verir         |
| Hoisting        | Evet     | Evet     |  Hayır        |
| Scope        | Blok kapsamı     | Fonksiyon kapsamı    |  Blok kapsamı        |
| Yeniden tanımlama	        | Evet     | Evet    | Hayır         |
| Değer değiştirme        | Evet     | Evet     | Hayır         |

--------
--------
--------
### 11 - Arrow fonksiyonun normal fonksiyondan farkları nelerdir
Arrow functions , JavaScript'te EcmaScript 2015 ile birlikte eklenmiştir.Normal function'lardan farklı olarak aşağıdaki bir kaç farklılığa sahiptir : 

* Arrow fonksiyonları daha kısa bir sözdizimine sahiptir. Eğer basit bir ifade döndürüyorsa , '{ }' bloğu içerisinde tanımlanması gerekmez. Ayrıca Arrow functions, kendi this bağlamını korur. Normal functions ise çağrıldıkları bağlama bağlı olarak this değerini değiştirebilir.

```javascript
// Normal function
function sum(num1, num2) {
  return num1 + num2;
}

// Arrow function
const sum = (num1, num2) => num1 + num2;
```
--------
--------
--------
### 12 - Switch bloğu içinde hatasız nasıl değişken tanımlanır.
JavaScript'te switch bloğu içinde değişken tanımlamak, genellikle case ifadeleri içinde kullanılan bir yöntem değildir. Bunun yerine, switch bloğu dışında, genellikle blok içinde veya switch bloğu öncesi bir değişken tanımlanıp , switch bloğu içinde bu değişken kullanılabilir.
```javascript
let color = "red";

switch (color) {
  case "red":
    let message = "The color is red.";
    console.log(message);
    break;
  case "blue":
    message = "The color is blue.";
    console.log(message);
    break;
  default:
    console.log("Unknown color.");
}
```
--------
--------
--------
### 13 - Pure fonksiyon ne demektir açıklayınız
JavaScript'te Pure Function, sadece kendi aldığı elemanlar üzerinde işlem yaparak bir sonuç üreten, herhangi bir I/O işlemi yapmayan (Veritabanı işlemleri vs) fonksiyon türüdür.Kod okunurluğu ve basitliği açısından önemlidir. Aynı parametrelerle her çağırılışlarında aynı çıktıyı verirler. Ayrıca verilen parametreleri değiştirmezler.
```javascript
const sum = (a, b) => {
  return a + b;
}

console.log(5,6) // Bu kod, bu argümanlarla her zaman aynı sonucu verir, argümanlarını yeni bir değer hesaplamak için kullanır.
```
--------
--------
--------
### 14 - Rest operatör nedir örnekle açıklayınız
Rest operatörünün2 farklı kullanım alanı vardır. 

* İlk olarak, fonksiyon içerisine gönderilecek değişken sayıda parametreyi belirtmek için kullanılır. Bu parametreler fonksiyon içerisinde bir dizi gibi işlem görür
```javascript
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}
//Bu fonksiyon, içerisine gönderilen n boyutlu dizilerin içerisindeki elemanların toplamlarını geri döndürür
```

* Ayrıca, dizilerin içerisinden bazı elemanlarını ve nesnelerin içerisinden istenilen özellikleri almak için kullanılabilir.

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5]
console.log(first)   // dizinin ilk elemanı , 1
console.log(second)  // dizini ikinci elemanı , 2
console.log(rest)    // dizinin geri kalan elemanlarının bulunduğu dizi , [3,4,5]
/////////////////////////////////////////////////////////////////////////////////

const {firstname , surname , ...rest} = {firstname : "Ömer" , surname : "Dinçer" , yas:"26", course : "Timus Fullstack Bootcamp"}

console.log(firstname)  // Objenin firstname parametresi , "Ömer"
```
--------
--------
--------
### 15 - Object destructuring nedir örnekle açıklayınız
Bu konu ile ilgili açıklama ve örnek bir önceki konuda verilmiştir.

--------
--------
--------
### 16 - 2 elemanlı bir objeyi 6 farklı şekilde oluşturunuz
```javascript

//Direct Declaration
const user1 = { firstname: "Ömer", lastname: "Dinçer" };

//Object Constructor
const user2 = new Object();
user2.firstname = "Ömer";
user2.lastname = "Dinçer";

//Object.create
const userProp = { firstname: "Ömer", lastname: "Dinçer" };
const user3 = Object.create(userProp);

//Constructor Function
function createUser(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}
const user4 = new createUser("Ömer", "Dinçer");

//Object.assign
const user5 = Object.assign({}, { firstname: "Ömer", lastname: "Dinçer" });

//Class
class user {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const user6 = new user("Ömer", "Dinçer");

console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)
console.log(user5)
console.log(user6)
```
--------
--------
--------
### 17 - 2 elemanlı bir objenin key ve value değerlerinin karakter sayısı ile 2 farklı döngü methodu kullanarak yeni bir obje oluşturunuz

```javascript
function createNewObject() {
  let myObject = {
    name: "Ömer",
    surname: "Dinçer"
  };
  let newObj = {};

  Object.keys(myObject).forEach(function (item) {
    newObj[item] = item.length + myObject[item].length;
  });
  return newObj;
}
console.log(createNewObject());
```

```javascript
function createNewObject() {

  let myObject = {
     name: "Ömer",
    surname: "Dinçer"
  };

  let newObj = {};

  for (var key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      newObj[key] = key.length + myObject[key].toString().length;
    }
  }

  return newObj;
}
console.log(createNewObject());
```
--------
--------
--------
### 18 - Cookie, local storage ve session storage farkını tablo yapınız

| Özellik                 | Cookie                                | Local                              | Session                           |
|------------------------|---------------------------------------|--------------------------------------------|------------------------------------------|
| Veri Türleri           | Sadece string                          | String (key-value çiftleriyle)            | String (key-value çiftleriyle)           |
| Kapasite               | 4 KB                                  | Yaklaşık 5 MB (tarayıcı bazlı değişebilir) | Oturum süresi boyunca (tarayıcı kapandığında veriler silinir) |
| Tarayıcı Tarafından Gönderilir | Evet                                  | Hayır                                      | Hayır                                    |
| Güvenlik               | Düşük (tarayıcı tarafından değiştirilebilir) | Daha güvenli (tarayıcı tarafından değiştirilemez, aynı köken politikasına tabidir) | Daha güvenli (tarayıcı tarafından değiştirilemez, aynı köken politikasına tabidir) |
| Oturum (Session) Yönetimi | Hayır                                | Hayır                                      | Evet (tarayıcı kapandığında otomatik olarak silinir) |
| Kullanım Alanları      | Oturum yönetimi, tercih bilgileri       | Genel veriler, uzun süreli saklama         | Oturum boyunca geçici veri saklama        |

--------
--------
--------
### 19 - Asenkron ve Senkron işlem farkı nedir

Asenkron ve senkron işlem, bilgisayar bilimleri ve programlama bağlamında iki temel işlem türünü ifade eder. İşte bu iki kavramın temel farkları:

#### Senkron İşlem (Synchronous):
* Senkron işlem, adım adım ve sırasıyla ilerleyen bir işlem türüdür.
* Her işlem bir öncekinin tamamlanmasını bekler ve bir sonraki işlem başlamadan önce önceki işlemin bitmesini bekler.

* Senkron işlemler, sıralı ve tahmin edilebilir bir şekilde çalışır.

* Genellikle işlemlerin sonuçları elde edildikten sonra bir sonraki işlem gerçekleştirilir.

#### Asenkron İşlem (Asynchronous):
* Asenkron işlem, işlemlerin sırasız ve bağımsız bir şekilde çalıştığı bir modeldir.
* Bir işlem başlatıldığında, sonucunun beklenmeden diğer işlemler devam eder.

* Asenkron işlemler, genellikle zaman alabilecek işlemlerde kullanılır, örneğin ağ çağrıları veya dosya okuma/yazma işlemleri.

* Callbacks, Promises veya Async/Await gibi mekanizmalar asenkron programlamada sıklıkla kullanılır.

| Özellik                    | Senkron İşlem                         | Asenkron İşlem                         |
|---------------------------|---------------------------------------|---------------------------------------|
| İlerleme Sıralaması         | Adım adım ve sırasıyla ilerler        | Sırasız ve bağımsız bir şekilde ilerler |
| İşlemlerin Beklenmesi       | Bir işlem tamamlanmadan diğeri başlamaz | İşlemler birbirini bekletmez, bağımsızdır |
| Çalışma Mekanizması         | Sıralı ve tahmin edilebilir            | Bağımsız ve sırasız, genellikle callback, promises veya async/await ile kontrol edilir |

--------
--------
--------
### 20- Promise nedir ve neden ihtiyaç duyar.
Promise, Javascript'te asenkron programlama işlemlerinin yönetilmesi için kullanılır, Bir işlemin başarıyla tamamlanması, başarasız olması veya işlemin henüz bitirilip bitirilmemesi gibi durumların temsili objelerinin program içerisinde kullanılmasını sağlar. Promise yapısı 3 temel durumdan oluşur:

* Pending : Promise oluşturulduğunda atanan başlangıç durumudur. Henüz tamamlanmamış bir işlemi temsil eder.

* Fulfilled : İşlem başarıyla tamamlandığında bu duruma geçer. Sonuç başarılı bir şekilde elde edilmiştir. Bu sonuç, promise yapısı ile birlikte program akışında kullanılabilir.

* Rejected : şlem başarısız olduğunda bu duruma geçer. Hata nedeniyle işlem tamamlanamamıştır. Hata, program içerisinde kullanılabilir (Hata mesajı , loglama vs.)