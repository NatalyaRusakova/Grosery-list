import { Component } from 'react';
import check from './check.JPG';

export class GroseryList extends Component {
    state = {
        userInput: '',
        GroseryList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert("Please enter an item")
        }
        else {
        let listArray = this.state.GroseryList;
        listArray.push(input);
        this.setState({GroseryList: listArray, userInput: ''});
        console.log(listArray)
        }
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.GroseryList;
        listArray = []; 
        /*listArray.length = 0;*/
        this.setState({GroseryList: listArray});
    }

    onFormSubmit(e) {
        e.preventDefault();        
    }

    render() {
        return (

        <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text"
                    placeholder="What do you want to buy?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}
                    />
            </div>

            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn btn-add">Add</button>
            </div>

            <ul>
                {this.state.GroseryList.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>
                    <img src={check} width = "40px" alt="check"/> 
                    {item}
                </li>
                ))}
            </ul>
            <div className="container">
                <button onClick={() => this.deleteItem()} className="btn btn-delete">Delete</button>
            </div>
            </form>
        </div>
        )
    }

}