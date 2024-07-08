import './SortFilter.css'
import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';

function SortFilter () {
    const {
        searchedProducts,
    }= useContext(SearchContext);

    function filterOrder(event){
        var sort_order = event.target.value;
        alert(sort_order);
        sortfrom_hightolow(sort_order);
        sortfrom_lowtohigh(sort_order);
             
    }

    function sortfrom_hightolow(sort_order){
        if (sort_order == 'Price_High') {alert("high to low");
            searchedProducts.sort(function(a, b){return b.price - a.price})
        }
    }
    function sortfrom_lowtohigh(sort_order){
        if (sort_order == 'Price_Low') {alert("low to high")
            searchedProducts.sort(function(a, b){return a.price - b.price})
        }
    }




    return (
        <div className='SortFilterContainer'>
            <select name="order" id="order" onChange={event => filterOrder(event)}>
                <option value="Name">Name</option>
                <option value="Price_Low">Price: Low to High</option>
                <option value="Price_High">Price: High to Low</option>
            </select>
        </div>
    )
}

export { SortFilter }
