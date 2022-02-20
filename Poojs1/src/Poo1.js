let natalia = {
     name : "natalia",
     age : 30,
     courseAprove : [
         "curso de html",
         "curso de css",
         "curso de js "
     ],
     AprovarCursos(nuevoCurso){
        this.courseAprove.push(nuevoCurso)
     }   
}

function student1(name,age,cursoAprovado){
    this.name = name;
    this.age = age;
    this.cursoAprovado = cursoAprovado;
}

student1.prototype.aprovarCursos = function(nuevoCurso)
{
    this.courseAprove.push(nuevoCurso);
}

let dairon = new student1('dairon',
30,
[
    'comer y dormir',
    'hacer nada'
])

//sintaxis con clases

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
    twitter: 'vanesa_twitter'
})

const dairon = new student({
    name: 'dairon',
    age: 30,
    email: 'dairon@dairon.com',
    twitter: 'dairon_twitter'
})