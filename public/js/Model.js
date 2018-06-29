class Model {
    constructor(config) {
        this.resource = config.resource; 
    }
    
    get() {
        let request = new Request(this.resource); 
        return fetch(request)
                .then(response => response.json())
                .catch((error) => console.error(error));
    }
}