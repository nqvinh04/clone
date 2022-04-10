import React from "react";
import axios from "../helpers/axios";
import { productConstansts } from "./constants";

export const getProductsBySlug = (slug) => {
    return async dispatch => {
        const res = await axios.get(`/products/${slug}`);
        console.log(res.status)
        if(res.status === 200){
            dispatch({
                type: productConstansts.GET_PRODUCT_BY_SLUG,
            })
            
        }
    }
}