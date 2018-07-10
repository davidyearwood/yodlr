var expect = chai.expect; 
var assert = chai.assert; // just in case you wanna change 


describe('The UserTableComponent module', () => {
    var table_data_as_object, 
        table_data_as_array, 
        root,
        dataArray,
        dataObject;
            
    beforeEach(() => {
        root = '.test'; 
        dataObject = {id: 1, name: 'Steve', email: 'stevesucks@gmail.com'};
        dataArray = [
            {id: 1, name: 'Steve', email: 'stevesucks@gmail.com'},
            {id: 2, name: 'Jeff', email: 'jeff@gmail.com'}
        ];
        
        table_data_as_object = new TableComponent({
            data: dataObject,
            root: root
        });
            
        table_data_as_array = new TableComponent({
            data: dataArray,
            root: root
        });
    });
    describe('when the createTableHeader() is called with an array type argument', () => {
        it('should return a string datatype', () => {
            var theader = UserTableComponent.createTableHeader(dataArray); 
            assert.typeOf(theader, 'string');
        });
        
        it('should return a HTML thead with the argument\'s first element\'s keys as the THs', () => {
           var theader = UserTableComponent.createTableHeader(dataArray); 
           var expected = "<thead><tr><th>id</th><th>name</th><th>email</th></tr></thead>";
           assert.strictEqual(theader, expected); 
        }); 
    });
    
    describe('when the createTableHeader() is called with an argument of object literal', () => {
        it('should return a String data type', () => {
            var theader = UserTableComponent.createTableHeader(dataObject);  
            assert.typeOf(theader, 'string'); 
        });
        
        it('should return a HTML thead with the argument\'s key as THs', () => {
            var expected = "<thead><tr><th>id</th><th>name</th><th>email</th></tr></thead>";
            var theader = UserTableComponent.createTableHeader(dataObject); 
            assert.strictEqual(theader, expected);
        });
    }); 
    
    describe('when createTableBody() is called with an Array argument', () => {
        
        it('should return a String data type', () => {
            var tbody = UserTableComponent.createTableBody(dataArray);  
            assert.typeOf(tbody, 'string'); 
        });
        
        it('should return a HTML tbody with data as td', () => {
            var tbody = UserTableComponent.createTableBody(dataArray); 
            var expected = "<tbody>" + 
                           "<tr><td>1</td><td>Steve</td><td>stevesucks@gmail.com</td></tr>" +
                            "<tr><td>2</td><td>Jeff</td><td>jeff@gmail.com</td></tr>" + 
                            "</tbody>";
            assert.strictEqual(tbody, expected);  
        });
    });
    
    describe('when createTable() is called with an argument of Array', () => {
        it('should create a table with the appropraite values', () => {
            var table = UserTableComponent.createTable(dataArray); 
            var expectedThead = "<thead><tr><th>id</th><th>name</th><th>email</th></tr></thead>";
            var expectedTbody = "<tbody>" + 
                                "<tr><td>1</td><td>Steve</td><td>stevesucks@gmail.com</td></tr>" +
                                "<tr><td>2</td><td>Jeff</td><td>jeff@gmail.com</td></tr>" + 
                                "</tbody>";
            var expected = '<table>' + expectedThead + expectedTbody + '</table>';
            
            assert.strictEqual(table, expected); 
        });
    });
});

//dataObject = {id: 1, name: 'Steve', email: 'stevesucks@gmail.com'};


// {id: 1, name: 'Steve', email: 'stevesucks@gmail.com'},
// {id: 2, name: 'Jeff', email: 'jeff@gmail.com'}