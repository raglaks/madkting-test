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

        let price;

        let stock;

        let button;

        let arr;

        let links = [];

        let picTable;

        if (this.state.prod){

            arr = this.state.prod.images;

            arr.map((el)=>{

                links.push(el.url_source);
    
            });

            let arrRows = links.map(el=>{

                return (

                    <img className='product' src={el} alt={this.state.name}></img>

                )

            });

            title = <h1>{this.state.prod.name}</h1>;

            price = <h2>Price: {this.state.prod.price}</h2>;

            stock = <h2>Stock: {this.state.prod.stock}</h2>;

            picTable = 
            
            <table className='full center'>
                <thead>
                    <td>
                        {arrRows}
                    </td>
                </thead>
            </table>

            button = <button onClick={this.props.check} id={this.state.prod.id} type="button">Close</button>;

        }

        return(

            <div className='center'>

                {title}

                {picTable}

                {price}

                {stock}

                {button}

            </div>

        )

    }

}

export default Product;