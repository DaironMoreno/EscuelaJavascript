class myElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
         this.titulo =  this.getAttribute('titulo')
         this.parrafo =  this.getAttribute('parrafo')
        }
    static get observedAttributes(){
        return ["titulo","parrafo"];
    }
    attributeChangedCallback(attr,oldVal,newVal){
        if(attr === "titulo"){
            this.titulo = newVal;
        }
        if(attr === "parrafo"){
            this.parrafo = newVal;
        }
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h1>${this.titulo}</h1>
                <p>${this.parrafo}</p>
            </section>
            ${this.getStyle()}
            `;
            return template;
    }
    getStyle(){
        return `
            <style>
                p{
                    color: red;
                    font-weigth: bold;
                    font-size: 24px;
                }
            </style>
            `;
    }
    render(){
        this.shadowRoot.append(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback(){
        /* this.p.textContent = "ejemplo de componente"; */
        this.render();
    }
}

customElements.define('my-element',myElement);