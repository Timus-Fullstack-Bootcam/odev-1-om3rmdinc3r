function job(state) {
    return new Promise(function (resolve, reject) {
      if (state) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  let promise = job(true);
  promise
    .then(function (data) {
      console.log(data);
      return job(true);
    })
    .then(function (data) {
      if (data !== "victory") {
        throw "Defeat";
      }
      return job(true);
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
      return job(false);
    })
    .then(function (data) {
      console.log(data);
      return job(true);
    })
    .catch(function (error) {
      console.log(error);
      return "Error caught";
    })
    .then(function (data) {
      console.log(data);
      return new Error("test");
    })
    .then(function (data) {
      console.log("Success:", data.message);
    })
    .catch(function (data) {
      console.log("Error:", data.message);
    });
  
  /**
   * Bu kodun çıktısı sırasıyla;
   * `success`
   * `Defeat`
   * `error`
   * `Error caught`
   * `Success: test`
   *  olacaktır.
   *
   *  Öncelikle `job` ismiyle tanımlanmış fonksiyonu inceleyelim,
   *  Bu fonksiyon, "state" adında bir değişkeni kontrol eden bir promise döndürür.
   *  "state" değişkeninin if-clause bloğu içerisinde kontrol ederek `true` olması durumunda
   *  "success" datasıyla resolve, değilse "error" datasıyla reject durumuna geçer.
   *
   * 10.satırda fonksiyon "true" değeriyle çağıralarak promise, "success" değeri ile birlikte `resolve` duruma geçecektir.
   *
   * 12.satırda tanımlanan `Then Handler 1` içerisinde girerek, callback fonksiyonu içerisine gönderilen "success" değeri ile birlikte
   * ilk Promise handle edilmiş olur. Bu sırada , konsola `success` yazdıracaktır. Ardından `job` fonksiyonunu return edilecektir,ancak henüz promise
   * chain den çıkılmadığı için, bir sonraki `then` handler'ının çalışmasını beklenecektir.
   *
   * Chain'nin bir sonraki adımı olarak , 17.satırda tanımlanan `Then Handler 2` çalışacaktır. Bu handle, bir önceki adımdan gelen `success` ifadesini
   * callback fonksiyonunun içerisine gönderecektir. Bu callback fonksiyonunun içerisindeki if-clause bloğu, gelen verinin "victory" değeri ile
   * eşit olup olmadığını kontrol eder. Gelen değer `success` olduğundan dolayı, bu blok çalışacak ve `Defeat` objesini `fırlatacaktır.`
   * Javascript'te, "throw" edilen, yani fırlatılan objeler, bir `catch` mekanizması tarafından yakalanırlar, bu örnekte, 20. satırdaki "throw" işlemi
   * sonucunda, kod akışı orada kesilir ve ilk catch bloğu tarafından yakalanır.
   *
   * 29. satırdaki `catch` bloğu , bir üstteki adımda fırlatılan hatayı yakalar ve gelen data olan `Defeat` değerini consola yazdırır.
   * 11. satırda başlayan promise chain, bu durumda kırılmış haldedir. Bu yüzden konsola yazdırma işleminin bir alt satırında,
   * job fonksiyonu `false` parametresi ile çalıştırılır. Bu fonksiyondan içeriği "error" ve durumu reject olan bir obje döner.
   * Bu obje, 38.satırdaki `catch` bloğu tarafından yakalanır.
   *
   * 38. satırda, bir önceki adımda oluşturulan fonksiyondan dönen reject objesi yakalanır ve içeriği olan `error` konsola yazdırılır,
   * ardından "Error caught" değeri return edilir. Bu return edilen değer , 43. satırdaki `then` bloğu tarafından yakalanır,
   * ve konsola "Error caught" yazdırılır. Ardından bir "Error" objesi döndürür.
   * Javascript'te "Error" objelerinin , catch blokları tarafından yakalanmaları için "throw" edilmesi yani "fırlatılması gerekir".
   * Bu nedenle, bu geri döndürülen hata objesi, normal bir obje gibi bir sonraki `then` bloğu tarafından işlenecektir.
   *
   * 48. satırdaki `then` objesi, geri dönen objeyi yakalar ve objenin 'message' adlı özelliğini ekrana yazdırır.
   * (JavaScript'te Error objeleri, default olarak message özelliği içermektedir). Bu adımdan sonra, promise chain son bulur.
   *
   */
  