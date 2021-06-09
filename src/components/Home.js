import React,{useState,useEffect} from "react";
import Base from "./Base"
import Data from "../data/Data";
const Home=()=>{

    let productList=Data;
    const [filteredProduct,setFilteredProduct]=useState([]);
    const [onHomePage,setOnHomePage]=useState(true)
    const [cartList,setCartList]=useState([]);
    let ct=[];

    const categoryFilter=(value)=>{
        console.log(value)
        if(value=='All'){
            setFilteredProduct(productList);
            return
        }
        let filtered=productList.filter((product)=>{
            return product.category==value.toLowerCase();
        })
        setFilteredProduct(filtered)
    }

    const nameFilter=(value)=>{
        console.log(value);
        let filtered=filteredProduct.filter((product)=>{
            return product.name.startsWith(value.toLowerCase())
        });
        setFilteredProduct(filtered)
    }

    const goToCart=()=>{
        setOnHomePage(false);
        return

    }

    const goToHome=()=>{
        setOnHomePage(true);
        return
    }

    const addToCart=(id,prod)=>{
        prod.addedToCart=true;
        let ind=cartList.find((val)=>{
            return val.id==id
        })
        if(ind!=undefined){
            return
        }
        else{
            console.log("pushing in cart",prod)
            let list=cartList;
            list.push(prod)
            setCartList(list);
            console.log(cartList)
            ct=cartList;
            setOnHomePage(false);
        }
    }

    const removeFromCart=(id,prod)=>{
        prod.addedToCart=false;
        let list=cartList.filter((val)=>{
            return val.id!=id;
        })
        
        setCartList(list);
    }

    const calculateBalance=()=>{
        let price=0;
        cartList.forEach((val)=>{
            price=price+val.price;
        })
        return price;
    }

    useEffect(()=>{
        setFilteredProduct(productList);
    },[])

    return onHomePage ? (
      <Base title="Home Page">
        <div className="row mt-1 mb-1">
          <div className="col-sm-3">
            <input
              onChange={(e) => nameFilter(e.currentTarget.value)}
              className="form-control"
              placeholder="search with name"
            ></input>
          </div>
          <div className="col-sm-3">
            <select
              onChange={(e) => categoryFilter(e.currentTarget.value)}
              placeholder="select category"
              className="form-control dropdown-toggle"
            >
              <option unselectable="on">select category</option>
              <option value="summer">Summer</option>
              <option value="winter">Winter</option>
              <option value="Rainy">Rainy</option>
              <option value="All">All</option>
            </select>
          </div>
          <div className="col-sm-3"></div>
          <div className="col-sm-2 d-flex justify-content-center">
            <button
              onClick={goToCart}
              type="button"
              className="btn btn-primary"
            >
              Go To Cart
            </button>
          </div>
        </div>

        <div style={{ marginBottom: "75px" }} className=" productList ">
          {filteredProduct.map((product,index) => {
            return (
              <div
                style={{ width: "400px" }}
                key={product.id}
                className="card ml-2"
              >
                <img src={product.photo} className="card-img-top"></img>
                <div className="card-body bg-dark">
                  <h5 className="card-title">Rupee {product.price}</h5>
                  <p className="crad-text">
                    {product.name}- {product.description}
                  </p>
                  {product.addedToCart?
                  <button
                  onClick={(e)=>removeFromCart(product.id,product)}
                  className="btn btn-primary">
                    Remove From Cart
                  </button>
                  : <button
                  onClick={(e)=>addToCart(product.id,product)}
                  className="btn btn-primary">
                    "Add To Cart"
                  </button>}
                  
                </div>
              </div>
            );
          })}
        </div>
      </Base>
    ) : (
      <Base title="Cart Page">
        <div className="row mt-1 mb-1">
          
          <div className="col-sm-9">
              <button className="btn btn-block btn-success form-control btn-block">Checkout</button>
          </div>
          <div className="col-sm-3 d-flex justify-content-center">
            <button
              onClick={goToHome}
              type="button"
              className="btn btn-primary"
            >
              Go To Home
            </button>
          </div>
        </div>
        <div className="row">
            <div className="col-sm-12 d-flex justify-content-center">
                <h5 className="text-secondary">Total Balance= {calculateBalance()}</h5>
            </div>
        </div>

        <div style={{ marginBottom: "75px" }} className=" productList ">
          {cartList.map((product,index) => {
            return (
              <div
                style={{ width: "400px" }}
                key={index}
                className="card ml-2"
              >
                <img src={product.photo} className="card-img-top"></img>
                <div className="card-body bg-dark">
                  <h5 className="card-title">Rupee {product.price}</h5>
                  <p className="card-text">
                    {product.name}- {product.description}
                  </p>
                  <button 
                  onClick={(e)=>removeFromCart(product.id,product)}
                  className="btn btn-primary">
                    Remove From Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Base>
    );
}

export default Home;