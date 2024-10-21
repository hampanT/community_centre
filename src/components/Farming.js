import { useState, useEffect } from "react";
import { LegendCard } from "./LegendCard";
import farmingIcon from '../images/farming.png'

export const Farming = ({ farmingItems, season }) => {
    const [selectedFarmingRows, setSelectedFarmingRows] = useState(() => {
        const storedSelectedFarmingRows = localStorage.getItem(`selectedFarmingRows_${season}`);
        return storedSelectedFarmingRows ? JSON.parse(storedSelectedFarmingRows) : [];
    });

    const [farmingCompletionCount, setCompletionCount] = useState(() => {
        const storedFarmingCompletionCount = localStorage.getItem(`farmingCompletionCount_${season}`);
        return storedFarmingCompletionCount ? JSON.parse(storedFarmingCompletionCount) : 0;
    })

    const tableLength = farmingItems.length


    //uppdatera localstorage när completioncount ändras
    useEffect(() => {
        localStorage.setItem(`farmingCompletionCount_${season}`, JSON.stringify(farmingCompletionCount))
    }, [farmingCompletionCount, season])

    // Uppdatera localStorage när selectedRows ändras
    useEffect(() => {
        console.log('Uppdaterar localStorage med:', selectedFarmingRows);
        localStorage.setItem(`selectedFarmingRows_${season}`, JSON.stringify(selectedFarmingRows));
    }, [selectedFarmingRows, season]);

    const handleRowClick = (index) => {
      // Om raden redan är vald, ta bort den från selectedRows, annars lägg till den
        if (selectedFarmingRows.includes(index)) {
        console.log('Ta bort raden', index)
        setSelectedFarmingRows(selectedFarmingRows.filter(row => row !== index)); // Tar bort raden om den är vald
        setCompletionCount(farmingCompletionCount - 1)
        } else {
        console.log('hejsan test 2')
        setSelectedFarmingRows([...selectedFarmingRows, index]); // Lägg till raden om den inte är vald
        setCompletionCount(farmingCompletionCount + 1)
        }
    };

    return (
        <div>

        <fieldset>
            <LegendCard legendIcon={farmingIcon} legendTitle="Farming" completionCount={farmingCompletionCount} tableLength={tableLength}/>

            <table className={'table-class'}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Bundle</th>
            </tr>
        </thead>
        <tbody>
            {farmingItems.map((item, index) => (
                <tr
                key={index}
                onClick={() => handleRowClick(index)}
                style={{
                    backgroundColor: selectedFarmingRows.includes(index) ? 'green' : '#0f1a36',
                    color: selectedFarmingRows.includes(index) ? 'limegreen' : 'white',
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