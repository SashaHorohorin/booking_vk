import React from "react";
import style from "../Booking/Booking.module.css";

const Select = ({ rooms, handleFunction, title, label, forHtml }) => {
    return (
        <>
            <label className={style.form__label} htmlFor={forHtml}>
                {label}
            </label>
            <select
                className={style.form__select}
                onChange={(e) => handleFunction(e)}
                name={title}
                id={forHtml}
            >
                {rooms
                    ? rooms?.map((room, index) => (
                          <option
                              className={style.form__option}
                              key={room}
                              value={room}
                          >
                              {room}
                          </option>
                      ))
                    : `Sorry, we don't have a free ${title}`}
            </select>
        </>
    );
};

export default Select;
