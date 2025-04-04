//single accordion selection
//mutli selection
import React from 'react'
import Data from './data';
import './accordion.css';

function Accordion() {
    const [selected, setSelected] = React.useState(null);
    const [multiSelected, setMultiSelected] = React.useState(false);
    const [multipleIDs, setMultipleIDs] = React.useState([]);

    function toggleAccordion(id) {
        console.log(id);
        setSelected(id === selected ? null : id);
    }

    function toggleMultiple() {
        console.log(multiSelected);
        setMultiSelected(!multiSelected);

        let newMultipleIDs = [...multipleIDs];
        if (multiSelected === true) {
            newMultipleIDs = [];
        } else {
            newMultipleIDs = Data.map((item) => item.id);
        }
        setMultipleIDs(newMultipleIDs);
    }

  return (
    <div>
        <h1>Accordion</h1>
        <div className="wrapper">
            <button className="expand-btn" onClick={() => toggleMultiple()}>
                {multiSelected === true ? 'Collapse All' : 'Expand All'}
            </button>
            <div className="accordion">
                {
                    Data && Data.length > 0 
                    ?  Data.map((item) => {
                        return (
                            <div className="accordion-item" key={item.id}>
                                <div 
                                    className="accordion-title" 
                                    onClick={() => toggleAccordion(item.id)}
                                    >
                                        {item.title}
                                        <span className="accordion-icon">+</span>
                                </div>
                                {   
                                    multiSelected === true
                                    ?   <div className="accordion-content">
                                            {item.description}
                                        </div>
                                    :   selected === item.id
                                        ?   <div className="accordion-content">
                                                {item.description}
                                            </div>
                                        :   null
                                }
                            </div>
                        )
                    })
                    : <div>No Data found !!!</div>
                }
            </div>
        </div>
    </div>
  )
}

export default Accordion