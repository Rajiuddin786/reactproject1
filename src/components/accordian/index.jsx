import { useState } from 'react';

import data from './data';
import './styles.css';

export default function Accordian(){

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiSelected, setMultiSelected] = useState([]);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId){
        let cpyMutliSelected = [...multiSelected];
        if(cpyMutliSelected.includes(getCurrentId)){
            cpyMutliSelected = cpyMutliSelected.filter(item => item !== getCurrentId);
        }else{
            cpyMutliSelected.push(getCurrentId);
        }

        setMultiSelected(cpyMutliSelected);
    }
    return(
        <div className="wrapper">
            <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable MultiSelection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ? 
                    data.map(dataItem => <div className="item">
                        <div onClick={enableMultiSelection ? ()=>handleMultiSelection(dataItem.id):() => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ? 
                            multiSelected.includes(dataItem.id) ? <div className="content">{dataItem.answer}</div>:<div></div>:
                            selected === dataItem.id ? <div className="content">{dataItem.answer}</div>:<div></div>
                        }
                    </div>)
                    :console.log('data', data)
                }
            </div>
        </div>
    )
}