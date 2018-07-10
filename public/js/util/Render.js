function render(root) {
    var rootElement = document.querySelector(root); 
      
    return (data) => {
        rootElement.innerHTML = data; 
    };
}