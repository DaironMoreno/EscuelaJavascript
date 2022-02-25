class comment{
    constructor({
        content,
        studentName,
        studentRole = "estudiante"
    })
    {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(nuevoComentario){
        console.log(this.studentName + " ( " + this.studentRole + " )");
        console.log(this.likes + "likes")
        console.log(this.content);
    }
}
class cursos
{
    constructor({
        name,
        clases = [],
        isFree = false,
        lang = "spanish"
    }){
        this.name = name;
        this.clases = clases;
        this.isFree = isFree;
        this.lang = lang;
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
            'clase 5',],
    isFree: true        
})
let jsBasico = new cursos({
    name: "Curso de js básico",
    clases: ['Js Basico',
            'clase 2',
            'clase 3',
            'clase 4',
            'clase 5',],
    lang: "english"
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
     publicarComentario(publicacion)
     {
        const comentario = new comment({
            content : publicacion,
            studentName : this.name,
            
        })
        comentario.publicar();
     }
    
}

class FreeStudent extends student
{
    constructor(params)
    {
        super(params)
    }
    aprobarCurso(nuevoCurso){
        if(nuevoCurso.isFree)
        {
            this.cursoAprovado.push(nuevoCurso)
        }else{
            console.log("Lo lamento "+ this.name +" no puedes tomar este curso")
        }
    }
}

class BasicStudent extends student
{
    constructor(params)
    {
        super(params)
    }
    aprobarCurso(nuevoCurso){
        if(nuevoCurso.lang !== "english")
        {
            this.cursoAprovado.push(nuevoCurso)
        }else{
            
            console.warn("Lo lamento "+ this.name +" no puedes tomar este curso porque esta en ingles y ud no sabe")
        }

    }
}
class ExpertStudent extends student
{
    constructor(params)
    {
        super(params)
    }
    aprobarCurso(nuevoCurso){ 
        this.cursoAprovado.push(nuevoCurso)
    }
}
class TeacherStudent extends student
{
    constructor(params)
    {
        super(params)
    }
    aprobarCurso(nuevoCurso){ 
        this.cursoAprovado.push(nuevoCurso)
    }
    publicarComentario(publicacion)
     {
        const comentario = new comment({
            content : publicacion,
            studentName : this.name,
            studentRole : "Teacher",
            
        })
        comentario.publicar();
     }
}
const vanesa = new FreeStudent({
    name: 'vanesa',
    age: 30,
    email: 'vanesa@vanesa.com',
    twitter: 'vanesa_twitter',
    RutasInscritas : [
        HtmlBasico,
        jsBasico
    ]
})

const dairon = new BasicStudent({
    name: 'dairon',
    age: 30,
    email: 'dairon@dairon.com',
    twitter: 'dairon_twitter',
    RutasInscritas : [
        CssBasico,
        jsBasico
    ]
})

const luciano = new TeacherStudent({
    name: 'Luciano',
    age: 0,
    email: 'Luciano@Luciano.com',
    twitter: 'luciano_twitter',
})