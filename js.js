/// carrito de compras
alert ("¡Bienvenido/a a la página de Frávega Electrónica! Aquí podrás ver los últimos productos del mercado y comprar desde la facilidad de tu hogar")


//productos
class productos { 
constructor (nombre, precio, categoría)
 {	    this.nombre = nombre
        this.precio = precio
        this.categoría = categoría 
        
    } }

//variables de los productos que puse en mi tienda

let p0 = new productos ("Teclado", 3200, "electrónica")
let p1 = new productos ("Mouse", 1200, "electrónica")
let p2 = new productos ("Parlantes", 6000, "electrónica")
let p3 = new productos ("Notebook", 150000, "electrónica")
let p4 = new productos ("Monitor", 70000, "electrónica")

alert ("Estos son los productos que actualmente tenemos en stock: " + p0.nombre + ", " + p1.nombre + ", " +  p2.nombre + ", " +  p3.nombre + ", " +  p4.nombre + ".") 

arrayStock = ["Teclado", "Mouse", "Parlantes", "Notebook", "Monitor"]

//array vacío, que será llenado con los productos que seleccione en mi tienda 
let arrayProductosElegidos = []
let opcionUsuario
while (opcionUsuario != 5){    
opcionUsuario = parseInt (prompt ("Estos son los productos que tenemos en stock: " + arrayStock + ". Selecciona el número, del 0 al 4, del producto que deseas comprar. Aprieta 5 para salir de la opción compras")) 


//lo que seleccionará el usuario
if (opcionUsuario == 0) 
    {
        arrayProductosElegidos.push(p0.precio)
        alert ("Elegiste un " + p0.nombre + ". Su precio es: $" + p0.precio + "ARS")
        console.log ("Elegiste un " + p0.nombre + ". Su precio es: $" + p0.precio + "ARS")
    }
else if (opcionUsuario == 1)
{
    arrayProductosElegidos.push(p1.precio)
    alert ("Elegiste un " + p1.nombre + ". Su precio es: $" + p1.precio + "ARS")
    console.log ("Elegiste un " + p1.nombre + ". Su precio es: $" + p1.precio + "ARS")
}
else if (opcionUsuario == 2)
{
    arrayProductosElegidos.push(p2.precio)
    alert ("Elegiste un " + p2.nombre + ". Su precio es: $" + p2.precio + "ARS")
    console.log ("Elegiste un " + p2.nombre + ". Su precio es: $" + p2.precio + "ARS")
}
else if (opcionUsuario == 3)
{
    arrayProductosElegidos.push(p3.precio)
    alert ("Elegiste un " + p3.nombre + ". Su precio es: $" + p3.precio + "ARS")
    console.log ("Elegiste un " + p3.nombre + ". Su precio es: $" + p3.precio + "ARS")
}
else if (opcionUsuario == 4)
{
    arrayProductosElegidos.push(p4.precio)
    alert ("Elegiste un " + p4.nombre + ". Su precio es: $" + p4.precio + "ARS")
    console.log ("Elegiste un " + p4.nombre + ". Su precio es: $" + p4.precio + "ARS")
}
else if (opcionUsuario ==5)
{ 
    alert ("Finalizaste tu compra!")
    console.log ("Finalizaste tu compra!")
}

else { 
    alert ("Error! Opción inválida")
    console.log ("Error! Opción inválida")
}
}

//total de la compra
alert ("Seleccionaste " + arrayProductosElegidos.length + " productos!")
console.log ("Seleccionaste " + arrayProductosElegidos.length + " productos!")
alert ("Estos son los precios de tus productos: " + arrayProductosElegidos.join ("$, "))
console.log ("Estos son los precios de tus productos: " + arrayProductosElegidos.join ("$, "))

//suma de los productos elegidos 
const valorInicial = 0;
const suma = arrayProductosElegidos.reduce (
    (accumulator, currentValue) => accumulator + currentValue, valorInicial
);
alert ("El total de tu compra es: $" + suma)
console.log ("El total de tu compra es: $" + suma)

alert ("¡Gracias por elegir Frávega electrónica! Hasta la próxima ;)")
console.log ("¡Gracias por elegir Frávega electrónica! Hasta la próxima ;)")
