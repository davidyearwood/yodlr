import React from 'react';
import UserRowList from './UserRowList';

class UserTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            users: [], 
            isLoaded: false
        }
    }
    
    componentDidMount() {
        fetch("/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        users: Object.keys(result).map(i => result[i]),
                        isLoaded: true
                    });
                }, 
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }
    
    render() {
        if (this.state.error) {
            console.error(this.state.error);
            return <div>Error: {this.state.error.message}</div>; 
        }
        
        if (!this.state.isLoaded) {
            return <div>Loading....</div>; 
        }
        
        return (
            <table className="data-table">
                <tbody>
                    <UserRowList users={this.state.users}/>
                </tbody>
            </table>
        );
    }
} 



export default UserTable;