import IngredientList from "./IngredientList";
import App from "../App";

const BurgerStack = (props) => {
    return (
        <ul>
            {props.stack.map((ingredient, index) => {
                return (
                    <li 
                        key={index} 
                        style={{backgroundColor: ingredient.color}}
                    >
                        {ingredient.name}
                        <button onClick={() => props.removeBurger(index)}>Delete</button>
                    </li>
                );
            })}
        </ul>
    );
};

export default BurgerStack;