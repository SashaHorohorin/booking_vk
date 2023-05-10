import React from "react";
import style from "../Booking/Booking.module.css";


const Button = ({action, type, text}) => {
    return (
        <button
            onClick={() => action()}
            className={style.form__btn}
            type={type}
        >
            {text}
        </button>
    );
};

export default Button;
