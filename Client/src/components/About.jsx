import React from 'react';
import style from './About.module.css'
import myImage from '../images/imagenCarlos.jpg';

const About = () => {

    return (
        <div className={style.container}>
            <div className={style.div}>
                <h1 className={style.h1}>Acerca de...</h1>
                <p className={style.p}>Hola! Soy Carlos Maya y esta es mi primera 
                    aplicacion con React y Javascript! Bienvenidos! </p>
                    <br />
                    <h2 className={style.h2}>Status: Alive</h2>
                    <h2 className={style.h2}>Species: Human</h2>
                    <h2 className={style.h2}>Gender: Male</h2>
                    <h2 className={style.h2}>Origin: Earth</h2>
                    <br />
                    <img src={myImage} alt="Mi imagen" className={style.img}/>
                    <br />
                </div>
            </div>
        );

    }

export default About;
