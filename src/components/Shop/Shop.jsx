import React, { Component } from "react";
import Product from "./Product";
import CartProduct from "./CartProduct";
import Social from "./Social";

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { id: 1, title: "Album 1", price: 5, img: "images/Album 1.png" },
        { id: 2, title: "Album 2", price: 15, img: "images/Album 2.png" },
        { id: 3, title: "Album 3", price: 20, img: "images/Album 3.png" },
        { id: 4, title: "Album 4", price: 100, img: "images/Album 4.png" },
        { id: 5, title: "Coffee", price: 5, img: "images/Cofee.png" },
        { id: 6, title: "Shirt", price: 50, img: "images/Shirt.png" },
      ],

      shoppingCart: [],
      socials: [
        {
          id: 1,
          href: "https://www.youtube.com",
          img: "images/Youtube Logo.png",
        },
        {
          id: 2,
          href: "https://www.spotify.com",
          img: "images/Spotify-Logo.png",
        },
        {
          id: 3,
          href: "https://www.facebook.com",
          img: "images/Facebook Logo.png",
        },
      ],
    };

    this.addProductToCart = this.addProductToCart.bind(this);
    this.emptyShoppingCart = this.emptyShoppingCart.bind(this);
    this.removeProductFromCart = this.removeProductFromCart.bind(this);
  }

  addProductToCart(productId) {
    console.log(productId);

    let mainProduct = this.state.products.find((product) => {
      return product.id === productId;
    });
    console.log(mainProduct);

    this.setState((prevState) => {
      return {
        shoppingCart: [...prevState.shoppingCart, mainProduct],
      };
    });
  }

  emptyShoppingCart() {
    this.setState({
      shoppingCart: [],
    });
  }

  removeProductFromCart(productId) {
    console.log(productId);

    let newShoppingCart = this.state.shoppingCart.filter((product) => {
      return product.id !== productId;
    });
    console.log(newShoppingCart);
    this.setState({
      shoppingCart: newShoppingCart
    })
  }

  render() {
    return (
      <>
        <header className="main-header">
          <nav className="main-nav nav">
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">STORE</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
            </ul>
          </nav>
          <h1 className="band-name band-name-large">SabzLearn Shop</h1>
        </header>
        <section className="container content-section">
          <div className="shop-items">
            {this.state.products.map((product) => (
              <Product
                {...product}
                key={product.id}
                onAddProduct={this.addProductToCart}
              />
            ))}
          </div>
        </section>
        <section className="container content-section">
          <h2 className="section-header">CART</h2>
          <div className="cart-row">
            <span className="cart-item cart-header cart-column">ITEM</span>
            <span className="cart-price cart-header cart-column">PRICE</span>
            <span className="cart-quantity cart-header cart-column">Doing</span>
          </div>
          <div className="cart-items">
            {this.state.shoppingCart.map((product) => (
              <CartProduct
                {...product}
                key={product.id}
                onRemove={this.removeProductFromCart}
              />
            ))}
          </div>
          <button
            className="btn btn-primary btn-purchase"
            type="button"
            onClick={this.emptyShoppingCart}
          >
            Empty Cart
          </button>
        </section>
        <footer className="main-footer">
          <div className="container main-footer-container">
            <h3 className="band-name">The Generics</h3>
            <ul className="nav footer-nav">
              {this.state.socials.map(social => (
                <Social {...social} key={social.id} />
              ))}
             </ul>
          </div>
        </footer>
      </>
    );
  }
}
