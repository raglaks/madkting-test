import React, { Component } from 'react';

class Product extends Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    componentDidMount() {

        this.setState({prod: this.props.data});

    }
    
    render() {

        let title;

        let stock;

        let button

        if (this.state.prod){

            title = this.state.prod.name;

            stock = this.state.prod.stock;

            button = <button onClick={this.props.check} id={this.state.prod.id} type="button">Close</button>

        }

        return(

            <div className='center'>

                {title}

                {stock}

                {button}

            </div>

        )

    }

}

export default Product;