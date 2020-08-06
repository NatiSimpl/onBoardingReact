import React, { useState, useEffect } from 'react';
import './index.css';

const paysListe = [
    {value: 'italie', label: 'Italie'},
    {value: 'australie', label: 'Australie'},
    {value: 'namibie', label: 'Namibie'},
    {value: 'canada', label: 'Canada'},
    {value: 'borneo', label: 'Bornéo'},
    {value: 'costa-rica', label: 'Costa-Rica'},
    {value: 'argentine', label: 'Argentine'}
];


const Voyage = props => {

    const [ pays, setPays ] = useState(paysListe);
    const [ lstCountry, setLstCountry ] = useState([]);
    const [ isChecked, setIsChecked ] = useState(false);


    function handleChoosePays(event) {
        const copy = lstCountry.slice();
        if (!lstCountry.includes(event.currentTarget.value)) {
            copy.push(event.currentTarget.value);
        } else {
            copy.splice(lstCountry.findIndex(c => c === event.currentTarget.value), 1);
        }
        setLstCountry(copy);
        
    }
    
    
    

     useEffect(() => {
        console.log(lstCountry);
     }, [lstCountry])
    

    return(
        <div>
            <div className="titre">
                <h1>Quels sont les prochains pays que vous pensez visiter ?</h1>
            </div>

            <div className="liste" >
                {pays.map(pays=> 

                    <label key={pays.value}>
                        <input 
                        type="checkbox" 
                        checked={lstCountry.includes(pays.value)}
                        value={pays.value}
                        onChange={handleChoosePays}
                        />
                    {pays.label}
                    </label>
                )}
            </div>
        </div>
    )
}

export default Voyage;