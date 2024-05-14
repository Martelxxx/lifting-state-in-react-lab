import { useState } from 'react';
import { availableIngredients } from '../App';
import App from '../App';
import '../App.css'
import BurgerStack from './BurgerStack';

const IngredientList = (props) => {
    const [selectedIngredient, setSelectedIngredient] = useState([]);

    const handleButtonClick = (ingredient, index) => {
        props.setStack([...props.stack, ingredient]);
    }

    return (
        <ul>
            {props.availableIngredients.map((ingredient, index) => {
                const buttonStyle = {
                    backgroundColor: ingredient.color
                };

                return (
                    <li>
                    <button 
                        key={index} 
                        style={buttonStyle} 
                        
                    >
                        {ingredient.name} 
                        <button style={{marginLeft: '10px'}} onClick={() => handleButtonClick(ingredient, index)}>+</button>
                    </button>
                    </li>
                );
            })}
        </ul>
    );
};
  
  export default IngredientList;