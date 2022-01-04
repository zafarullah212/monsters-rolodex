import React ,{Component} from 'react';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/searchbox-component';

import './App.css';

class App extends Component{
  
    constructor() {
        super();
        
        this.state = {
            monster : [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (resp => resp.json())
        .then(users => this.setState({monster: users}));
    }

    render() {

        const {monster , searchfield} = this.state;

        const searchResult = monster.filter(monster => (
            monster.name.toLowerCase().includes(searchfield.toLocaleLowerCase())
        ))

        return (
            
          <div className="App">
            <h1>Monster Rolodex</h1>
            
            <SearchBox placeholder="Search Monster Card" handleChange={(e) => (this.setState({searchfield: e.target.value}))}/>

            <CardList monsters={searchResult}/>

          </div>
        )

    }

}

export default App;
