import React, { Component } from 'react';
import axios from 'axios';

class Table extends Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    componentDidMount() {

        console.log('it mounted');

        this.apiCheck();

    }

    apiCheck() {

        return axios.get('https://api.software.madkting.com/shops/76/products/', {headers: {'Accept': 'application/json', 'Authorization': 'Token cb0763f1c60a3583dd23f629e3a8bf9c2eebc8a0'}}).then(res=>{

            console.log(res.data);

            this.setState({results: res.data});

        }).catch(err=>{

            console.log(err);

        });

    }

    render() {

        console.log(this.state);

        let rows;

        if (this.state.results) {

            console.log('state is ready');

            rows = this.state.results.map(el=>{

                return (

                    <tr><td>{el.name}</td><td></td><td>{el.price}</td><td>{el.stock}</td></tr>

                )

            });

        } else {

            console.log('state is not ready');

        }

        return(

            <table className='full'>

                <tr>

                    <th>Name</th>

                    <th>Image</th>

                    <th>Price</th>

                    <th>Stock</th>

                </tr>

                {rows}

            </table>

        )

    }

}

export default Table;