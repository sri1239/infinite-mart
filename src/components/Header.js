import React from "react";
import {Nav,Badge,Container,FormControl,Navbar,Dropdown, Button} from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
import "./styles.css"

const Header = () => {
  const {
    state: { cart },
    dispatch,productDispatch
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Infinite-Mart</Link>
        </Navbar.Brand>
        <Navbar.Text>
          <FormControl
            style={{ width: 500 }}
            placeholder="Search for a product"
            className="m-auto"
            onChange={(e)=>productDispatch({
              type:"FILTER_BY_SEARCH",
              payload: e.target.value
            })}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown align="end">
            <Dropdown.Toggle variant="success">
              <FaCartArrowDown color="white" fontSize="25px" />
              <Badge bg="none">{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.item}>
                      <img
                        className="cartItemImg"
                        src={prod.image}
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name} </span>
                        <span>${prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch({ type: "REMOVE_FROM_CART", payload: prod });
                        }}
                      />
                    </span>
                  ))}
                  <Link to= "/cart">
                    <Button style={{width : "95%", margin: "0 10px"}}>
                      Go to Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
