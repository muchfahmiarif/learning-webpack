<p align="center"><a href="https://webpack.js.org/" target="_blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm20jbQw0zoVfUqtiExWi-jmCiOGoacf95MhVaEOhixAxiPfPxAz2GRYE6Psv1m6rv-ow&usqp=CAU" width="300" alt="Webpack Bundler"></a></p>

This repo for me to learning webpack bundler from [Web Programming Unpas](https://www.youtube.com/@sandhikagalihWPU). This is history from module system on javascript :
- No module system at 1995 - 2000 on Netscape and Internet Explorer
- IIFE (Immediately Invoked Function Expression) at 2000 - 2010 on Yahoo and JQuery
- CommonJS at 2010 - 2015 on NodeJS
- ES6 Module at 2015 - Now on Javascript Official

##### No Modules
Before the existence of modules :
1. Harus membuat fungsi pembungkus *wrapper function* untuk menampung semua kode javascript
2. Agar memiliki scope, sehingga tidak ada global variable
3. Tetap muncul function wrapper yang bisa diakses secara global
4. Kurang *reusable*
5. Masalah pengelolaan *dependensy*

Contoh kode pada No Modules :
```javascript
var users = ["Fahmi", "Rizal", "Rahman"];

function getUsers() {
  return users;
}
```

```javascript
function usersWrapper() {
  var users = ["Fahmi", "Rizal", "Rahman"];

  function getUsers() {
    return users;
  }

  app.getUsers = getUsers;
}

usersWrapper();
```
##### IIFE (Immediately Invoked Function Expression)
Immediately Invoked Function Expression (IIFE) adalah sebuah fungsi yang dieksekusi secara langsung setelah ia dibuat. IIFE biasanya digunakan untuk membuat *scope* baru, sehingga variabel yang dibuat di dalamnya tidak akan terlihat dari luar.
- Tidak perlu membuat nama function
- Tidak perlu menjalankan function
- Tidak ada function yang bisa diakses secara global
- Harus ditulias di setiap module
- Masih bukan module system

Contoh kode pada IIFE :
```javascript
(function() {
  var users = ["Fahmi", "Rizal", "Rahman"];

  function getUsers() {
    return users;
  }
})();
```