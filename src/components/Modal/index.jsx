import { useContext, useState } from 'react';
import './Modal.css'
import { Rating } from "../Filter/RatingFilter/Rating"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { SearchContext } from '../../contexts/SearchContext';


function Modal () {
    const {
        setIsOpen,
        imageProduct,
        titleProduct,
        priceProduct,
        descriptionProduct
    } = useContext(SearchContext);
    const [counter, setCounter] = useState(0);
    const setCloseModal = () => {
        setIsOpen(false)
    }
    
     //var clicks = 0

    function Adding() {
        setCounter(counter + 1);
        //document.getElementById("clicks").innerHTML = clicks
    }

    function Minus() {
        setCounter(counter - 1);
        //document.getElementById("clicks").innerHTML = clicks
    }
    return (
        <div className='ModalContainer'>
            <div className='ContentModalContainer'>
                <div className='ProductImageContainer'>
                    <AiOutlineCloseCircle className='closeModal' onClick={setCloseModal}/>
                    <img src={imageProduct}/>
                </div>
                <div className="DetailsModalContainer">
                    <div className="HeaderDetailModalContainer">
                        <h3>{titleProduct}</h3>
                        <h3>${priceProduct}</h3>
                    </div>
                    <Rating stars={3}/>
                    <h6>{descriptionProduct}</h6>
                    <div className="HeaderDetailModalContainer">
                        <button type="button" onClick={Adding}>+</button>
                        <p> {counter}</p>
                        <button type="button" onClick={Minus}>-</button>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Modal }