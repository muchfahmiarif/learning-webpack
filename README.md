<h1 align="center">Common JS</h1>

Di branch ini contoh sederhana penggunaan Common JS yang kemudian di bundle dengan webpack. Module formatting system pada common js meliputi :
1. Menggunakan keyword `module.exports` dan `require()`
2. Diterapkan di dalam **nodeJS**
3. Butuh **module bundler** jika ingin dijalankan di browser

##### Cara menjalankan
1. Repo ini harus di init dengan `npm init -y`
2. Install webpack dengan `npm install webpack webpack-cli --save-dev`
3. Jalankan perintah `npm run build` untuk menjalankan webpack
4. Buka file `index.html` di browser dan ubah src pada tag `<script>` menjadi `dist/main.js`

<figure>
  <img src="https://i.ibb.co/64nPHpv/common-js.png"
    alt="Albuquerque, New Mexico" width="400">
</figure>