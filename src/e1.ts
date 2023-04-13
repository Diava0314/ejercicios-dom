
const app = document.getElementById("app")!;
let items = "";

for (let i = 1; i <=20; i +=1){
 items = items + `
 <button>boton ${i}</button>
 `

}

app.innerHTML=`
<div>
${items}
</div>

`

export {}