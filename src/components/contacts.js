import React, {Component} from "react";
import Card from "./Card";

class Contacts extends Component{

    constructor(props) {
        super(props);
        this.state = {
            users:[],
            isLoading: false,
            hasError: false
        }
    }

    async componentDidMount() {
        this.setState({isLoading: true});

        const response = await fetch("https://jsonplaceholder.typicode.com/users/");

        if (response.ok) {
            const users = await response.json();
            this.setState({users, isLoading:false});
        } else {
            this.setState({hasError: true, isLoading: false});
        }
            
    }


    render() {
        const {isLoading, hasError} = this.state;


        if (isLoading) {
            return <div>Loading contacts...</div>
        } else if (hasError) {
            return <div>An unexpected error occured when requesting contacts. Please refresh the page and try again.</div>
        } else {
            return <div>{this.state.users.map(user => (
                <Card 
                    key={user.id}
                    name={user.name}
                    tel={user.phone}
                    email={user.email}
                    website={user.website}
                />
            ))}</div>
        }
        
    }
}
export default Contacts;