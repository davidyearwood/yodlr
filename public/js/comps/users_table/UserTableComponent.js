var UserTableComponent = (function() {
    "use strict";
    
    function _createHeaders(data) {
        return Object.keys(Array.isArray(data) ? data[0] : data); 
    }
    
    function createTable(data) {
        if (!Array.isArray(data)) {
            throw new Error('Argument must be an array'); 
        }
    
      var tableOpenTag = '<table class="data-table">',
        tableCloseTag = '</table>';
            
        return tableOpenTag + createTableHeader(data) + createTableBody(data) + tableCloseTag;         
    }
    
    function createTableHeader(data) {
        var theadOpenTag = '<thead>',
            trOpenTag = '<tr>',
            trCloseTag = '</tr>',
            theadCloseTag = '</thead>',
            headers = _createHeaders(data); 
        
        var theads = headers.map((header) => {
           return '<th>' + header + '</th>';
        });
        
        return theadOpenTag + trOpenTag + theads.join('') + trCloseTag + theadCloseTag; 
    }
    
    function createTableBody(data) {
        if (!Array.isArray(data)) {
            throw new Error('Argument must be an array'); 
        }
        
        var tbodyOpenTag = '<tbody>',
            tbodyCloseTag = '</tbody>',
            headers = _createHeaders(data);
        
        var trs = data.map((row) => {
           var tds = headers.map((col) => {
                return '<td>' + row[col] + '</td>';
            });
            
            return '<tr>' + tds.join('') + '</tr>';
        });
        
        return tbodyOpenTag + trs.join('') + tbodyCloseTag; 
    }
    
    return {
        createTable: createTable, 
        createTableHeader: createTableHeader, 
        createTableBody: createTableBody
    }; 
})();