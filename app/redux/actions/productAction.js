import { FETCH_PRODUCTS } from './types';
import { getProducts } from '../../data';
import axios from 'axios';
export const fetchProducts = () => dispatch => {

    const books = getProducts();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: books
    })
}