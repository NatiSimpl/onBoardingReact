import React, { useState, useEffect } from 'react';
import bus from './bus.png';
import moto from './moto.svg';
import train from './train.svg';
import trott from './trott.png';
import velo from './velo.svg';
import voiture from './voiture.svg';
import walk from './walk.svg';
import './index.css';

const transportMode = [
    {value: 'moto', label: 'Moto', image: moto},
    {value: 'auto', label: 'Voiture', image: voiture},
    {value: 'velo', label: 'Vélo', image: velo},
    {value: 'trottinette', label: 'Trottinette', image: trott},
    {value: 'bus', label: 'Autobus', image: bus},
    {value: 'pied', label: 'A pied', image: walk},
    {value: 'train', label: 'Train', image: train}
]


const Transport = props => {

    const [ transport, setTransport ] = useState(transportMode);
    const [ transportChoose, setTransportChoose] = useState('');

    function handleChooseTransport(choosen) {
        setTransportChoose(choosen);
    }
    

    useEffect(() => {
        console.log(transportChoose);
    }, [transportChoose])
    

    return(
        <div>
            <div className="titre">
                <h1>Choisissez votre mode de transport préféré</h1>
            </div>

            <div className="card">

                {transport.map(transport=> 

                <button className="elem" onClick={() => handleChooseTransport(transport.value)} key={transport.value} value={transport.value}>

                    <img key={transport.value} src={transport.image} alt={transport.label} className="photo"/>
                    <h4>{transport.label}</h4>
                
                </button>

                )}

            </div>
        </div>
    )
}

export default Transport;