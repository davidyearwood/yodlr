class TableComponent {
    constructor(config) {
        this.data = config.data; 
        this.root = document.querySelector(config.root);
        this.headers = Object.keys(Array.isArray(config.data) ? config.data[0] : config.data); 
    }
    
    render() {
       this.root.innerHTML = this.createTable(); 
    }
    
    createTable() {
        var tableOpenTag = '<table>',
            tableCloseTag = '</table>';
            
        return tableOpenTag + this.createTableHeader() + this.createTableBody() + tableCloseTag;         
    }
    
    createTableHeader() {
        var theadOpenTag = '<thead>',
            trOpenTag = '<tr>',
            trCloseTag = '</tr>',
            theadCloseTag = '</thead>'; 
        
        var theads = this.headers.map((header) => {
           return '<th>' + header + '</th>';
        });
        
        return theadOpenTag + trOpenTag + theads.join('') + trCloseTag + theadCloseTag; 
    }
    
    createTableBody() {
        var tbodyOpenTag = '<tbody>';
        var tbodyCloseTag = '</tbody>';

        var trs = this.data.map((row) => {
           var tds = this.headers.map((col) => {
                return '<td>' + row[col] + '</td>';
            });
            
            return '<tr>' + tds.join('') + '</tr>';
        });
        
        return tbodyOpenTag + trs.join('') + tbodyCloseTag; 
    }
    
}