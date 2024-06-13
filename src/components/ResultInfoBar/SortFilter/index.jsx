import './SortFilter.css'
import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';

function SortFilter () {
    const {
        searchedProducts,
    }= useContext(SearchContext);
    searchedProducts.sort(function(a, b){return a.price - b.price});
    return (
        <div className='SortFilterContainer'>
            <select name="order" id="order">
                <option value="Name">Name</option>
                <option value="Price_Low">Price: Low to High</option>
                <option value="Price_High">Price: High to Low</option>
            </select>
        </div>
    )
}

export { SortFilter }
