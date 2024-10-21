import { useState, useEffect } from "react";
import { LegendCard } from "./LegendCard";
import fruitTreeIcon from '../images/fruit_tree.png'

export const FruitTrees = ({ fruitTreeItems, season }) => {
    const [selectedFruitTreeRows, setSelectedFruitTreeRows] = useState(() => {
        const storedSelectedFruitTreeRows = localStorage.getItem(`selectedFruitTreeRows_${season}`);
        return storedSelectedFruitTreeRows ? JSON.parse(storedSelectedFruitTreeRows) : [];
    });

    const [fruitTreeCompletionCount, setCompletionCount] = useState(() => {
        const storedFruitTreeCompletionCount = localStorage.getItem(`fruitTreeCompletionCount_${season}`);
        return storedFruitTreeCompletionCount ? JSON.parse(storedFruitTreeCompletionCount) : 0;
    })

    const tableLength = fruitTreeItems.length


    //uppdatera localstorage när completioncount ändras
    useEffect(() => {
        localStorage.setItem(`fruitTreeCompletionCount_${season}`, JSON.stringify(fruitTreeCompletionCount))
    }, [fruitTreeCompletionCount, season])

    // Uppdatera localStorage när selectedRows ändras
    useEffect(() => {
        console.log('Uppdaterar localStorage med:', selectedFruitTreeRows);
        localStorage.setItem(`selectedFruitTreeRows_${season}`, JSON.stringify(selectedFruitTreeRows));
    }, [selectedFruitTreeRows, season]);

    const handleRowClick = (index) => {
      // Om raden redan är vald, ta bort den från selectedRows, annars lägg till den
        if (selectedFruitTreeRows.includes(index)) {
        console.log('Ta bort raden', index)
        setSelectedFruitTreeRows(selectedFruitTreeRows.filter(row => row !== index)); // Tar bort raden om den är vald
        setCompletionCount(fruitTreeCompletionCount - 1)
        } else {
        console.log('hejsan test 2')
        setSelectedFruitTreeRows([...selectedFruitTreeRows, index]); // Lägg till raden om den inte är vald
        setCompletionCount(fruitTreeCompletionCount + 1)
        }
    };

    return (
        <div>

        <fieldset>
            <LegendCard legendIcon={fruitTreeIcon} legendTitle="Fruit Trees" completionCount={fruitTreeCompletionCount} tableLength={tableLength}/>

            <table className={'table-class'}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Bundle</th>
            </tr>
        </thead>
        <tbody>
            {fruitTreeItems.map((item, index) => (
                <tr
                key={index}
                onClick={() => handleRowClick(index)}
                style={{
                    backgroundColor: selectedFruitTreeRows.includes(index) ? 'green' : '#0f1a36',
                    color: selectedFruitTreeRows.includes(index) ? 'limegreen' : 'white',
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