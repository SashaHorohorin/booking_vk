import React from "react";
import style from "../Booking/Booking.module.css";

const Input = ({ label, forHtml, handleFunction, ...atr }) => {
    // const [label, forHtml, ...atr] = props;
    return (
        <>
            {label ? (
                <label className={style.form__label} htmlFor={forHtml}>
                    {label}
                </label>
            ) : (
                ""
            )}

            <input
                className={style.form__input}
                onChange={(e) => handleFunction(e)}
                {...atr}
            />
        </>
    );
};

export default Input;
