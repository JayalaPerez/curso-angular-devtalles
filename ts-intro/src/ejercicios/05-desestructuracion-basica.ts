/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;


//console.log('El segundo actual es: ', segundo);
//console.log('El volumen actual es: ', volumen);
//console.log('La canción actual es: ', cancion);
//console.log('El autor es: ', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = dbz;   //Para que se pueda ver el personaje 3, se debe dejar un espacio vacío para los personajes 1 y 2, de lo contrario no se podrá ver el personaje 3

//console.log('Personaje 1: ', p1);
//console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);

/* Destrucción de objetos y arreglos */