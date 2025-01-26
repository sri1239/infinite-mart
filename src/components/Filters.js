import React from "react";
import { Button, FormCheck } from "react-bootstrap";
import Rating from "./Rating";
import "./styles.css";
import { CartState } from "../context/Context";

const Filters = () => {
  const {
    productDispatch,
    productState: { sort,byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  return (
    <div className="filters">
      <span className="title">Filter products</span>
      <span>
        <FormCheck
          inline
          label="Ascending"
          name="group-1"
          type="radio"
          id={`inline-1`}
          onClick={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <FormCheck
          inline
          label="Descending"
          name="group-1"
          type="radio"
          id={`inline-2`}
          onClick={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <FormCheck
          inline
          label="Include Out of stock"
          name="group-1"
          type="checkbox"
          id={`inline-3`}
          onClick={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <FormCheck
          inline
          label="Fast Delivery Only"
          name="group-1"
          type="checkbox"
          id={`inline-4`}
          onClick={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTER",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
