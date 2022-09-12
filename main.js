let v;
let p;
const R= 0.082;
let t;
let n;

let boton2
let variable1
let variable2
let variable3

const boton = document.querySelector('#boton');        
const radioBotones = document.querySelectorAll('input[name="variableIncognita"]');
let seleccionVariable
let variable
boton.addEventListener("click", () => {
    resultados.innerHTML = "";
    for (const radioBoton of radioBotones) {
        if (radioBoton.checked) {
            seleccionVariable = radioBoton.value;
            switch (seleccionVariable) {
                case "P":
                    variable = `<div class="contenedor"><h3 class="leyenda">Ingrese los valores de cálculo</h3>
                    <div><label for='variable1'>V= </label><input type='number' id='variable1'></div>
                    <div><label for='variable2'>T= </label><input type='number' id='variable2'></div>
                    <div><label for='variable3'>n= </label><input type='number' id='variable3'></div>
                    <button id="boton2">Calcular</button>
                    </div>`
                    ingresos.innerHTML = variable
                    boton2 = document.querySelector('#boton2');
                    variable1 = document.querySelector("#variable1");
                    variable2 = document.querySelector("#variable2");
                    variable3 = document.querySelector("#variable3");
                    boton2.addEventListener("click", () => {
                        v=parseFloat(variable1.value);
                        t=parseFloat(variable2.value);
                        n=parseFloat(variable3.value);
                        t=t+273.15;
                        p=(n*R*t)/v;
                        resultado = `<p class="resultado">El valor de la presión es: <strong> ${p} atm</strong></p>`
                        resultados.innerHTML = resultado;
                    })
                    break;
                case "V":
                    variable = `<div class="contenedor"><h3 class="leyenda">Ingrese los valores de cálculo</h3>
                    <div><label for='variable1'>P= </label><input type='number' id='variable1'></div>
                    <div><label for='variable2'>T= </label><input type='number' id='variable2'></div>
                    <div><label for='variable3'>n= </label><input type='number' id='variable3'></div>
                    <button id="boton2">Calcular</button>
                    </div>`
                    ingresos.innerHTML = variable
                    boton2 = document.querySelector('#boton2');
                    variable1 = document.querySelector("#variable1");
                    variable2 = document.querySelector("#variable2");
                    variable3 = document.querySelector("#variable3");
                    boton2.addEventListener("click", () => {
                    p=parseFloat(variable1.value);
                    t=parseFloat(variable2.value);
                    n=parseFloat(variable3.value);
                    t=t+273.15;
                    v=(n*R*t)/p;
                    resultado = `<p class="resultado">El valor del volumen es: <strong> ${v} l</strong></p>`
                    resultados.innerHTML = resultado;
                    })
                    break;
                case "T":
                    variable = `<div class="contenedor"><h3 class="leyenda">Ingrese los valores de cálculo</h3>
                    <div><label for='variable1'>P= </label><input type='number' id='variable1'></div>
                    <div><label for='variable2'>V= </label><input type='number' id='variable2'></div>
                    <div><label for='variable3'>n= </label><input type='number' id='variable3'></div>
                    <button id="boton2">Calcular</button>
                    </div>`
                    ingresos.innerHTML = variable
                    boton2 = document.querySelector('#boton2');
                    variable1 = document.querySelector("#variable1");
                    variable2 = document.querySelector("#variable2");
                    variable3 = document.querySelector("#variable3");
                    boton2.addEventListener("click", () => {
                    p=parseFloat(variable1.value);
                    v=parseFloat(variable2.value);
                    n=parseFloat(variable3.value);
                    t=(p*v)/(n*R)-273.15;
                    resultado = `<p class="resultado">El valor de la temperatura es: <strong> ${t} °C</strong></p>`
                    resultados.innerHTML = resultado;
                    })
                    break;
                case "n":
                    variable = `<div class="contenedor"><h3 class="leyenda">Ingrese los valores de cálculo</h3>
                    <div><label for='variable1'>P= </label><input type='number' id='variable1'></div>
                    <div><label for='variable2'>V= </label><input type='number' id='variable2'></div>
                    <div><label for='variable3'>T= </label><input type='number' id='variable3'></div>
                    <button id="boton2">Calcular</button>
                    </div>`
                    ingresos.innerHTML = variable
                    boton2 = document.querySelector('#boton2');
                    variable1 = document.querySelector("#variable1");
                    variable2 = document.querySelector("#variable2");
                    variable3 = document.querySelector("#variable3");
                    boton2.addEventListener("click", () => {
                    p=parseFloat(variable1.value);
                    v=parseFloat(variable2.value);
                    t=parseFloat(variable3.value);
                    t=t+273.15;
                    n=(p*v)/(t*R);
                    resultado = `<p class="resultado">El número de moles es: <strong> ${n} moles</strong></p>`
                    resultados.innerHTML = resultado;
                    })
                    break;
            }
            break;
        }
    }
});
