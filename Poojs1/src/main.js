class RutadeAprendizaje
{
    constructor({
        name,
        teacher,
        clases = []
    }){
        this.name = name;
        this.teacher = teacher;
        this.clases = clases;
    }

    AgregarRuta(name,teacher,clases){
        this.name = name;
        this.teacher = teacher;
        this.clases.push(clases)
    }
}

class student{
    constructor({
        name,
        age,
        email,
        twitter  = undefined,
        facebook = undefined,
        instagram = undefined,
        cursoAprovado = [],
        RutasInscritas = []
        })
    {
        this.name = name;
        this.age = age;
        this.socialMedia = {
            twitter,
            facebook,
            instagram
        };
        this.email = email;
        this.cursoAprovado = cursoAprovado;
        this.RutasInscritas = RutasInscritas;
    }
    AprovarCursos(nuevoCurso){
        this.cursoAprovado.push(nuevoCurso)
     }   
    
}

const vanesa = new student({
    name: 'vanesa',
    age: 30,
    email: 'vanesa@vanesa.com',
    twitter: 'vanesa_twitter',
    RutasInscritas : [new RutadeAprendizaje({
        name:'ruta de Javascript',
        teacher: 'luciano moreno',
        clases : [
            'clase 1',
            'clase 2',
            'clase 3',
            'clase 4',
            'clase 5',
        ]
    })]
})

const dairon = new student({
    name: 'dairon',
    age: 30,
    email: 'dairon@dairon.com',
    twitter: 'dairon_twitter',
    RutasInscritas : [new RutadeAprendizaje({
        name:' ruta de php',
        teacher: 'Roman Riquelme',
        clases : [
            'clase php introduccion',
            'clase 2',
            'clase 3',
            'clase 4',
            'clase 5',
        ]
    })]
})