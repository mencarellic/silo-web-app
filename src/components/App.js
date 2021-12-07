import React from 'react';
import axios from 'axios';
import IPData from './IP';
import RandomCat from './cat';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ip: [], cat: [] }
    }
    async componentDidMount() {
        const ip_response = await axios.get('https://ip-fast.com/api/ip/?format=json&location=True', {});
        this.setState({ ip: ip_response.data });
        console.log(this.state.ip)

        const cat_response = await axios.get('https://aws.random.cat/meow', {});
        this.setState({ cat: cat_response.data });
        console.log(this.state.cat)
    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <p>
                    For more details on this, visit the GitHub repos:
                </p>
                <ul>
                    <li><a href="https://github.com/mencarellic/silo-terraform" className="text-white">mencarellic/silo-terraform</a></li>
                    <li><a href="https://github.com/mencarellic/silo-web-app" className="text-white">mencarellic/silo-web-app</a></li>
                </ul>
                <div className="px-4 py-5 my-5 text-center">
                    <IPData ip={this.state.ip} />
                </div>
                <div className="px-4 py-5 my-5 text-center">
                    <RandomCat cat={this.state.cat} />
                </div>
            </>
        );
    }
}

export default App;