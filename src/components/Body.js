import React, { Component } from 'react';
import axios from 'axios';

class Body extends Component {

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

            console.log(res);

        }).catch(err=>{

            console.log(err);

        });

    }

    render() {

        return(

            <div>hi</div>

        )

    }

}

export default Body;