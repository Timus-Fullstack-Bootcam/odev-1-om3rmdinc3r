function job() {
    return new Promise(function (resolve, reject) {
      reject();
    });
  }
  let promise = job(); // Fonksiyon çalıştırıldı ve Promise oluşturuldu.
  promise
    .then(function () { // Then Handler 1
      console.log("Success 1");
    })
    .then(function () { // Then Handler 2
      console.log("Success 2");
    })
    .then(function () { // Then Handler 3
      console.log("Success 3");
    })
    .catch(function () { // Catch Handler 1
      console.log("Error 1");
    })
    .then(function () { // Then Handler 4
      console.log("Success 4");
    });
  
    /**
     * Bu kodun çıktısı sırasıyla 
     * `Error 1` ve 
     * `Success 4` olacaktır.
     * 
     * `Job` isimli fonksiyon, `reject` olarak dönen bir Promise olarak tanımlanmıştır.
     * 6. Satırda kod çalıştırıldığı zaman , direkt `rejected` state olacaktır. Bu durumda,
     * 14. satırda bulunan `catch` handler çalışacaktır. Bu handler'da verilen callback fonksiyonu,
     * konsola `Error 1` yazdıracaktır. Promise chain yapısının gereği,`catch` handler'dan sonra 
     * yazılan `then` blokları çalışır, bu yüzden örnek koddaki then çalıp , ve konsola
     * `Success 4` yazdıracaktır. Bu yapı, Promise chain'den bir catch durumuna düşülse bile son bir işlem yapmak,
     * veya chain i devam ettirmek için kullanılabilir, ama kodun sadeliği açısından dikkat edilmesi gereken bir konudur.
     *  */
  