class myElement extends HTMLElement{
    constructor(){
        super();
        console.log('epale que mas');
        this.p = document.createElement('p');
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <p>Ejemplo de un parrafo para mi componente</p>
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
        this.append(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback(){
        /* this.p.textContent = "ejemplo de componente"; */
        this.render();
    }
}

customElements.define('my-element',myElement);