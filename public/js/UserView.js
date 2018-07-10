class UserView {
    constructor() {
        
    }
    
    renderTable(users) {
        var trs = users.map(function(user) {
            let tr = "<tr class='a-panel-table__tr'>"; 
            let tds = [
                "<td class='user-id'>" + user.id + "</td>",
                "<td class='user-email'>" + user.email + "</td>",
                "<td class='user-firstName'>" + user.firstName + "</td>",
                "<td class='user-lastName'>" + user.lastName + "</td>",
                "<td class='user-state'>" + user.state + "</td>"
                ];
                
            return tr + tds.join("") + "</tr>";
        });
          
        this.tbody.innerHTML = trs.join("");
    }
}