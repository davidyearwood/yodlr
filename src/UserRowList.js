import UserRow from './UserRow';
const UserRowList = props => {
    let rows = props.users.map(user => {
        return (
            <UserRow 
                id={user.id} 
                email={user.email}
                firstName={user.firstName}
                lastName={user.lastName}
                state={user.state}
            />
        );
    });
};