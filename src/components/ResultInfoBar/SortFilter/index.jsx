import './SortFilter.css'
import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';

function SortFilter () {
    const {
        searchedProducts,
    }= useContext(SearchContext);
   
    function filterOrder(selectedOrder){
        var order = selectedOrder;
        var order = "Price_High"
        //console.log(order);
        if (order == 'Price_Low') {
            searchedProducts.sort(function(a, b){return a.price - b.price});
        } else if (order == 'Price_High'){
            searchedProducts.sort(function(a, b){return b.price - a.price});
        }      
    }
    
    return (
        <div className='SortFilterContainer'>
            <select name="order" id="order" onChange={filterOrder(this)}>
                <option value="Name">Name</option>
                <option value="Price_Low">Price: Low to High</option>
                <option value="Price_High">Price: High to Low</option>
            </select>
        </div>
    )
}

export { SortFilter }
