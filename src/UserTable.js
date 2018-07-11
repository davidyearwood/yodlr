import UserRowList from './UserRowList';

const UserTable = props => {
    return (
        <table>
            <tbody>
                <UserRowList users={props.users}/>
            </tbody>
        </table>
    );
};