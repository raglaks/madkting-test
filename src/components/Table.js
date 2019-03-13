import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';

class Table extends Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    componentDidMount() {

        this.apiCheck();

    }

    apiCheck() {

        return axios.get('https://api.software.madkting.com/shops/76/products/?page_size=100', {headers: {'Accept': 'application/json', 'Authorization': 'Token cb0763f1c60a3583dd23f629e3a8bf9c2eebc8a0'}}).then(res=>{

            console.log(res.data);

            this.setState({results: res.data});

        }).catch(err=>{

            console.log(err);

        });

    }

    handleClick = event => {

        event.preventDefault();
    
        let click = event.target.id;
    
        this.updateState(click);
    };

    updateState(click) {

        this.setState({id: click});

    }

    closeButtonCheck = event => {

        event.preventDefault();

        // let click = event.target;

        this.setState({id: false});

    }

    render() {

        console.log('state of state for render', this.state);

        let rows;

        if (this.state.id) {

            let chosen = this.state.id;

            let info = this.state.results[chosen];

            return (

                <Product data={info} check={this.closeButtonCheck}/>

            )

        }

        if (this.state.results) {

            rows = this.state.results.map((el, key)=>{

                let images = el.images;

                let url = images[0].url_source;

                let pic = <img className='pic' src={url} alt={el.name}></img>

                let button = <button onClick={this.handleClick} id={key} type="button">Product details</button>

                return (

                    <tr><td>{key + 1}</td><td>{el.name}</td><td>{pic}</td><td>{el.price}</td><td>{el.stock}</td><td>{button}</td></tr>

                )

            });

        } else {

            console.log('state is not ready');

            rows = <tr><td><h1>LOADING</h1></td><td><h1>LOADING</h1></td><td><h1>LOADING</h1></td><td><h1>LOADING</h1></td><td><h1>LOADING</h1></td><td><h1>LOADING</h1></td></tr>

        }

        return(

            <table className='full center'>

                <thead>

                <tr>

                    <th>ID</th>

                    <th>Name</th>

                    <th>Image</th>

                    <th>Price</th>

                    <th>Stock</th>

                    <th></th>

                </tr>

                </thead>

                <tbody>

                    {rows}

                </tbody>

            </table>

        )

    }

}

export default Table;