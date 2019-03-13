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

        let brand;

        let condition;

        let stock;

        let button;

        let arr;

        let links = [];

        let picTable;

        let shipping;

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

            brand = <h2>Brand: {this.state.prod.brand}</h2>;

            condition = <h2>Condition: {this.state.prod.condition}</h2>;

            stock = <h2>Stock: {this.state.prod.stock}</h2>;

            shipping = <div><h2>Shipping info:</h2><h3>Length: {this.state.prod.shipping_depth} {this.state.prod.dimensions_unit}, Width: {this.state.prod.shipping_width} {this.state.prod.dimensions_unit}, Height: {this.state.prod.shipping_height} {this.state.prod.dimensions_unit}<br></br>Weight: {this.state.prod.weight} {this.state.prod.weight_unit}</h3></div>

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

                {brand}

                {picTable}

                {price}

                {condition}

                {stock}

                {shipping}

                {button}

            </div>

        )

    }

}

export default Product;