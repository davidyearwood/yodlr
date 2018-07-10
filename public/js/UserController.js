class UserController {
    constructor(config) {
        this.tbody = document.getElementById('tbody'); 
        this.totalUsers = {
            active: 0, 
            pending: 0
        };
        
        this.getUsers(this.renderTable.bind(this));
        this.getUsers(this.countUsers.bind(this));
    }

    countUsers(users) {
        var that = this; 
        users.forEach((user) => {
            switch(user.state) {
                case "active":
                    that.totalUsers.active++; 
                    break;
                case "pending":
                    that.totalUsers.pending++;
                    break; 
            }
        });
    }
    
    getUsers(cb) {
        let request = new Request('/users'); 
        
        return fetch(request)
            .then((response) => { return response.json(); })
            .then((json) => { return cb(json) })
            .catch((error) => { console.error(error); }); 
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