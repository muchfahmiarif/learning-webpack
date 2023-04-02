<h1 align="center">Webpack</h1>

##### Cara Menggunakan Webpack
Dengan menggunakan default configuration webpack, langkah-langkah yang harus dilakukan adalah:
1. Inisisasi package.json dengan perintah `npm init -y`
2. Install webpack dengan perintah `npm install webpack webpack-cli --save-dev`
3. Gunakan tag `<script src="./dist/main,js"></scrtipt>` pada file index.html

##### Custom Configuration Webpack
- Ubah nama file `main.js` dan mengubah nama file default output dengan menambahkan pada script di package.json
```json
"scripts": {
    "build": "webpack -o ./[nama fodler] --output-filename [nama file].js"
  },
``` 
Kalian dapat melihat configuration webpack [disini](https://webpack.js.org/api/#cli) 

- Membuat file webpack.config.js
Script configuration webpack dapat dilihat [disini](https://webpack.js.org/configuration/)