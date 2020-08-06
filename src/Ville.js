import React, { useState, useEffect } from 'react';
import './index.css';

const cityListe = [
    {value: 'lyon', label: 'Lyon'},
    {value: 'grenoble', label: 'Grenoble'},
    {value: 'marseille', label: 'Marseille'},
    {value: 'bordeaux', label: 'Bordeaux'},
    {value: 'strasbourg', label: 'Strasbourg'},
    {value: 'biarritz', label: 'Biarritz'},
    {value: 'paris', label: 'Paris'}
]


const Ville = props => {

    const [ ville, setVille ] = useState(cityListe);
    const [ cityChoose, setCityChoose] = useState('');

    function handleChooseCity(event) {
        setCityChoose(event.currentTarget.value);
    }
    

     useEffect(() => {
         console.log(cityChoose);
     }, [cityChoose])
    

    return(
        <div>
            <div className="titre">
                <h1>D'où venez-vous ?</h1>
            </div>

            <div className="liste" >
                {cityListe.map(ville=> 

                    <label key={ville.value}>
                        <input 
                        type="radio" 
                        value={ville.value}
                        onChange={handleChooseCity}
                        checked={cityChoose === ville.value}  />
                    {ville.label}
                    </label>
                )}
            </div>
        </div>
    )
}

export default Ville;