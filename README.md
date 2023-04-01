<h1 align="center">ES6 Modules</h1>

Pada branch es6 module ini mempelajari bagaimana javscript di jalankan menggunakan ecmascript module. Nama ES6 yaitu ECMAScript Harmony tetapi banayak orang bilangnya ES6 Module. Berikut kelebihan dan kekurangan pada ES6 Module
- Menggunakan keyword **exports** dan **import**
- Secara default **asynchronous**
- Tidak butuh module bundler jika ingin dijalankan di browser
- Harus menambahkan **type="module"** pada tag `<script>` di html

##### Berikut Contoh code pada ES6 Module
```javascript
// users.js
var users = ["Fahmi", "Rizal", "Rahman"];

export function getUsers() {
  return users;
}
```

```javascript
// app.js
import { getUsers } from "./users.js";

getUsers(); // ["Fahmi", "Rizal", "Rahman"]
```

```html
<!-- index.html -->
    .......
    <script type="module" src="app.js"></script>
  </body>
</html>
```

