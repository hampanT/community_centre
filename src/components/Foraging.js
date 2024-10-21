import { useState, useEffect } from "react";
import { LegendCard } from "./LegendCard";
import foragingIcon from '../images/foraging.png'

export const Foraging = ({ foragingItems, season }) => {
    const [selectedForagingRows, setSelectedForagingRows] = useState(() => {
        const storedSelectedForagingRows = localStorage.getItem(`selectedForagingRows_${season}`);
        return storedSelectedForagingRows ? JSON.parse(storedSelectedForagingRows) : [];
    });

    const [foragingCompletionCount, setForagingCompletionCount] = useState(() => {
        const storedForagingCompletionCount = localStorage.getItem(`foragingCompletionCount_${season}`);
        return storedForagingCompletionCount ? JSON.parse(storedForagingCompletionCount) : 0;
    });

    const tableLength = foragingItems.length;

    // Uppdatera localStorage när completionCount ändras
    useEffect(() => {
        localStorage.setItem(`foragingCompletionCount_${season}`, JSON.stringify(foragingCompletionCount));
    }, [foragingCompletionCount, season]);

    // Uppdatera localStorage när selectedRows ändras
    useEffect(() => {
        console.log('Uppdaterar localStorage med:', selectedForagingRows);
        localStorage.setItem(`selectedForagingRows_${season}`, JSON.stringify(selectedForagingRows));
    }, [selectedForagingRows, season]);

    const handleRowClick = (index) => {
        // Om raden redan är vald, ta bort den från selectedRows, annars lägg till den
        if (selectedForagingRows.includes(index)) {
            setSelectedForagingRows(selectedForagingRows.filter(row => row !== index));
            setForagingCompletionCount(foragingCompletionCount - 1);
        } else {
            setSelectedForagingRows([...selectedForagingRows, index]);
            setForagingCompletionCount(foragingCompletionCount + 1);
        }
    };

    return (
        <div>
            <fieldset>
                <LegendCard 
                    legendIcon={foragingIcon} 
                    legendTitle={'Foraging'} 
                    completionCount={foragingCompletionCount} 
                    tableLength={tableLength}
                />

                <table className={'table-class'}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Bundle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foragingItems.map((item, index) => (
                            <tr
                                key={index}
                                onClick={() => handleRowClick(index)}
                                style={{
                                    backgroundColor: selectedForagingRows.includes(index) ? 'green' : '#0f1a36',
                                    color: selectedForagingRows.includes(index) ? 'limegreen' : 'white',
                                    cursor: 'pointer',
                                }}
                            >
                                <td>{item.name}</td>
                                <td>{item.location}</td>
                                <td>{item.bundle}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </fieldset>
        </div>
    );
};