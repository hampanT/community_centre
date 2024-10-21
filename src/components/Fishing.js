import { useState, useEffect } from "react";
import { LegendCard } from "./LegendCard";
import fishingIcon from '../images/fishing.png'


export const Fishing = ({fishingItems, season}) => {
    const [selectedFishingRows, setSelectedFishingRows] = useState(() => {
        const storedSelectedFishingRows = localStorage.getItem(`selectedFishingRows_${season}`);
        return storedSelectedFishingRows ? JSON.parse(storedSelectedFishingRows) : [];
    });

    const [fishingCompletionCount, setFishingCompletionCount] = useState(() => {
        const storedFishingCompletionCount = localStorage.getItem(`fishingCompletionCount_${season}`);
        return storedFishingCompletionCount ? JSON.parse(storedFishingCompletionCount) : 0;
    })

    const tableLength = fishingItems.length

      //uppdatera localstorage när completioncount ändras
        useEffect(() => {
        localStorage.setItem(`fishingCompletionCount_${season}`, JSON.stringify(fishingCompletionCount))
    }, [fishingCompletionCount, season])
    
      // Uppdatera localStorage när selectedRows ändras
        useEffect(() => {
        console.log('Uppdaterar localStorage med:', selectedFishingRows);
        localStorage.setItem(`selectedFishingRows_${season}`, JSON.stringify(selectedFishingRows));
    }, [selectedFishingRows, season]);
    
    const handleRowClick = (index) => {
      // Om raden redan är vald, ta bort den från selectedRows, annars lägg till den
        if (selectedFishingRows.includes(index)) {
        console.log('Ta bort raden', index)
        setSelectedFishingRows(selectedFishingRows.filter(row => row !== index)); // Tar bort raden om den är vald
        setFishingCompletionCount(fishingCompletionCount - 1)
    } else {
        console.log('hejsan test 2')
        setSelectedFishingRows([...selectedFishingRows, index]); // Lägg till raden om den inte är vald
        setFishingCompletionCount(fishingCompletionCount + 1)
    }
};

return (
    <div>
        <fieldset>
        <LegendCard legendIcon={fishingIcon} legendTitle="Fishing" completionCount={fishingCompletionCount} tableLength={tableLength}/>

        <table className={'table-class'}>
        <thead>
        <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Time</th>
            <th>Alternate Season</th>
            <th>Bundle</th>
        </tr>
        </thead>
        <tbody>
        {fishingItems.map((item, index) => (
            <tr
                key={index}
                onClick={() => handleRowClick(index)}
                style={{
                backgroundColor: selectedFishingRows.includes(index) ? 'green' : '#0f1a36',
                color: selectedFishingRows.includes(index) ? 'black' : 'white',
                cursor: 'pointer',
            }}
            >
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{item.time}</td>
                <td>{item.otherSeason}</td>
                <td>{item.bundle}</td>
            </tr>
        ))}
        </tbody>
    </table>
        </fieldset>

    </div>
)
}