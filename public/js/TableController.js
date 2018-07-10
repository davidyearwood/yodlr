class TableController {
    constructor() {
        
        window.addEventListener('load', () => {
            this.model.get().then(this.component.render.bind(this)); 
        });
    }
}