class cursos
{
    constructor({
        name,
        clases = []
    }){
        this.name = name;
        this.clases = clases;
    }
}
class RutadeAprendizaje
{
    constructor({
        name,
        teacher,
        cursos = []
    }){
        this._name = name;
        this.teacher = teacher;
        this.cursos = cursos;
    }
    get name()
    {
        return this._name;
    }
    set name(nuevoNombre)
    {
        if(nuevoNombre === "un nombre malo")
        {
            console.warn("epa porque escribe eso");
        }else{
            this._name = nuevoNombre;
        }
    }
}

let HtmlBasico = new cursos({
    name: "Curso de Html básico",
    clases: ['Js Basico',
            'clase 2',
            'clase 3',
            'clase 4',
            'clase 5',]
})
let jsBasico = new cursos({
    name: "Curso de js básico",
    clases: ['Js Basico',
            'clase 2',
            'clase 3',
            'clase 4',
            'clase 5',]
})
let CssBasico = new cursos({
    name: "Curso de css básico",
    clases: ['css Basico',
            'clase 2',
            'clase 3',
            'clase 4',
            'clase 5',]
})

let escuelaWeb = new RutadeAprendizaje({
    name : "Escuela de desarrollo web",
    teacher: "Gala",
    cursos : [
        HtmlBasico,
        CssBasico,
        jsBasico
    ]
})
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
    RutasInscritas : [
        HtmlBasico,
        jsBasico
    ]
})

const dairon = new student({
    name: 'dairon',
    age: 30,
    email: 'dairon@dairon.com',
    twitter: 'dairon_twitter',
    RutasInscritas : [
        CssBasico,
        jsBasico
    ]
})