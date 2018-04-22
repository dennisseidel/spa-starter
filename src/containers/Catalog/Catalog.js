import React, { Component } from 'react';
import FrontHero from '../../components/FrontHero/FrontHero';


class Catalog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {
          "product_name": "Contracts",
          "product_description": "Access the contract information of our customer with his consent and offer him value added services.",
          "product_domain": ['Ecosystem'],
          "docs_url": "/docs/contracts"
        },
        {
          "product_name": "Pricing",
          "product_description": "Use the pricing engine based on the data of the largest insurance company in europe.",
          "product_domain": ['Function'],
          "docs_url": "/docs/pricing"
        },
        {
          "product_name": "Products",
          "product_description": "Access our product information to build your business as a digital insurance broker or other inovative ideas.",
          "product_domain": ['Business'],
          "docs_url": "/docs/products"
        },
        {
          "product_name": "Fraud Detection",
          "product_description": "Access the contract information of a Pfefferminzia customer with his consent.",
          "product_domain": ['Function'],
          "docs_url": "/docs/frauddetection"
        },
        {
          "product_name": "Contractmanagement",
          "product_description": "Access the contract information of a Pfefferminzia customer with his consent.",
          "product_domain": ['Function'],
          "docs_url": "/docs/contractmanagement"
        }
      ]
    }
  }

  render() {
    return(
      <div>
        <FrontHero bgColor="info" title="Products Index" alignTitle="has-text-centered"/>
        <section className="section">
          <div className="container">
            <h1 className="title is-3">Products</h1>
            <br />
          </div>
          <div className="container">
            {this.state.products.map((product) => <div className="box" onClick={() => this.props.history.push(product.docs_url)}>
                <div className="subtitle">{product.product_name}</div>
                <div className="has-text-dark has-text-weight-light">{product.product_description}</div>
              </div>)}
          </div>
      </section>
      </div>
    )
  }
}

export default Catalog;