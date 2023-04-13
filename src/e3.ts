let texto: string= "";

const app = document.getElementById("app")!;
 

for (let i = 1; i <=30; i++){
texto = texto + 
`
<div style: color: red;>hoola${i} </div>
`
}

app.innerHTML =`

<ul>${texto}</ul>

`










export {}






