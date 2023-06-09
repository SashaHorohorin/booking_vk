import React, { useEffect, useState } from "react";
import style from "./Booking.module.css";
import Select from "../Select/Select";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Booking = () => {
    const [floors, setFloors] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [obj, setObj] = useState({
        tower: "",
        floor: "",
        room: "",
        date: "",
        fromTime: "",
        toTime: "",
        comment: "",
    });
    const towers = ["А", "B"];

    useEffect(() => {
        let arrFloor = [];
        let arrRoom = [];

        for (let i = 3; i <= 27; i++) {
            arrFloor.push(i);
        }
        for (let i = 1; i <= 10; i++) {
            arrRoom.push(i);
        }
        setFloors(arrFloor);
        setRooms(arrRoom);
    }, []);

    const handleFunction = (e) => {
        // e.preventDefault();
        const name = e.target.name;
        let value = e.target.value;
        let newObj = {
            ...obj,
            [name]: value,
        };
        setObj(newObj);
        // console.log(obj);
    };

    const showResult = () => {
        let count = true;
        for (var key in obj) {
            if (obj[key] === "") {
                count = false;
                break;
            }
        }
        if(count){
            let json = JSON.stringify(obj);
            console.log(json)
        }else{
            alert("Заполните все поля");
        }
        // count ? console.log(obj) : alert("Заполните все поля");
    };
    const handleSubmit = (event) => {
        // alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    };

    const resetObj = () => {
        setObj({
            tower: "",
            floor: "",
            room: "",
            date: "",
            fromTime: "",
            toTime: "",
            comment: "",
        });
    };

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.form} action="">
                <div className={style.form__title}>
                    Бронирование переговорной
                </div>

                <Select
                    rooms={towers}
                    handleFunction={(e) => handleFunction(e)}
                    title="tower"
                    forHtml="tower-select"
                    label="Выберите башню:"
                />
                <Select
                    rooms={floors}
                    handleFunction={(e) => handleFunction(e)}
                    title="floor"
                    forHtml="floors-select"
                    label="Выберите этаж:"
                />
                <Select
                    rooms={rooms}
                    handleFunction={(e) => handleFunction(e)}
                    title="room"
                    forHtml="room-select"
                    label="Выберите номер переговорки:"
                />

                <Input
                    type="date"
                    name="date"
                    id="date"
                    handleFunction={(e) => handleFunction(e)}
                    forHtml="date"
                    label="Выберите дату:"
                />

                <Input
                    type="time"
                    name="fromTime"
                    id="time"
                    handleFunction={(e) => handleFunction(e)}
                    forHtml="time"
                    label="Выберите интервал бронирования:"
                />
                <Input
                    type="time"
                    name="toTime"
                    id="time"
                    handleFunction={(e) => handleFunction(e)}
                    forHtml="time"
                    label=""
                />

                <label className={style.form__label} htmlFor="comment">
                    Напишите комментарий:{" "}
                </label>
                <textarea
                    className={style.form__textarea}
                    onChange={(e) => handleFunction(e)}
                    name="comment"
                    id="comment"
                ></textarea>

                <Button action={() => showResult()} type='submit' text='Отправить'/>
                <Button action={() => resetObj()} type='reset' text='Стереть всё'/>
            </form>
        </div>
    );
};

export default Booking;
