class Coche {
    constructor(modelo, velocidad, año){
        this.modelo= modelo;
        this.velocidad = velocidad;
        this.año= año;
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    reducirVelocidad(){
        this.velocidad -= 1;
    }
}

var coche1= new Coche('BMW',250,2017);
var coche2 = new Coche('Opel',200,2018);
var coche3 = new Coche('Seat',180,2015);
var coche4 = new Coche('Renault',170,2012);

document.write("Velocidad: "+coche1.velocidad+'<br>');

coche1.aumentarVelocidad();
coche1.aumentarVelocidad();

document.write("Velocidad: "+coche1.velocidad+'<br>');

class Autobus extends Coche{    /*Hereda metodos de la clase padre, en este caso Coche*/
    constructor(modelo, velocidad, año){
        super(modelo, velocidad, año);
    }
}
var autobus1= new Autobus('Pegaso',150,2017);
document.write(autobus1.modelo);