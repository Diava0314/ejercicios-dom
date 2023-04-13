let cajas: string= "";
const app = document.getElementById("app")!;


for (let i = 1; i <=10; i++){

cajas = cajas + `
<div style="background: yellow; width: 50px; height: 50px; border: 2px solid green; margin: 10px;" >
caja ${i}

</div>


`
}

app.innerHTML=`
<div>
${cajas}
</div>



`










export {}