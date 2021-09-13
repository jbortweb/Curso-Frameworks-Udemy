var coche = {
    modelo: 'Mercedes clase A',
    maxima: 300,
    año:'2020',
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.año);
    },
    propiedad1:'valor aleatorio'
};
document.write('<h1>'+coche.año+'</h1>')
coche.mostrarDatos();



var nombres = ['Jordi', 'Victor', 'David']

nombres.forEach((nombre)=>{
    document.write("<p>"+nombre+"</p>");
})

var saludar = new Promise((resolve, reject)=>{ /*Espera una respuesta que puede darse en algun momento*/

    setTimeout(()=>{
    let saludo = 'Hola muy buenas';
    saludo=false;
    if(saludo){
        resolve(saludo);
    }else{
        reject('No hay saludo disponible');
    }
},2000);
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err=>{
    alert(err);
});