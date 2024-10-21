import { useEffect, useState } from 'react';
import './App.css';
import farmingIcon from './images/farming.png' 
import foragingIcon from './images/foraging.png'
import fishingIcon from './images/fishing.png'
import { LegendCard } from './components/LegendCard';
import { NavLink, Link, Route, Routes } from "react-router-dom";
import { Spring } from './components/Spring';
import { Summer } from './components/Summer';
import { Fall } from './components/Fall';
import { Winter } from './components/Winter';



//https://www.reddit.com/r/StardewValley/comments/d860is/bundle_items_season_wise_guide/


const Foraging = ({foragingItems}) => {
  const [selectedForagingRows, setSelectedForagingRows] = useState(() => {
    const storedSelectedForagingRows = localStorage.getItem('selectedForagingRows');
    return storedSelectedForagingRows ? JSON.parse(storedSelectedForagingRows) : [];
  });

  const [foragingCompletionCount, setForagingCompletionCount] = useState(() => {
    const storedForagingCompletionCount = localStorage.getItem('foragingCompletionCount');
    return storedForagingCompletionCount ? JSON.parse(storedForagingCompletionCount) : 0;
  })

  const tableLength = foragingItems.length

  //uppdatera localstorage när completioncount ändras
  useEffect(() => {
    localStorage.setItem('foragingCompletionCount', JSON.stringify(foragingCompletionCount))
  }, [foragingCompletionCount])

  // Uppdatera localStorage när selectedRows ändras
  useEffect(() => {
    console.log('Uppdaterar localStorage med:', selectedForagingRows);
    localStorage.setItem('selectedForagingRows', JSON.stringify(selectedForagingRows));
  }, [selectedForagingRows]);

  const handleRowClick = (index) => {
    // Om raden redan är vald, ta bort den från selectedRows, annars lägg till den
    if (selectedForagingRows.includes(index)) {
      console.log('Ta bort raden', index)
      setSelectedForagingRows(selectedForagingRows.filter(row => row !== index)); // Tar bort raden om den är vald
      setForagingCompletionCount(foragingCompletionCount - 1)
    } else {
      console.log('hejsan test 2')
      setSelectedForagingRows([...selectedForagingRows, index]); // Lägg till raden om den inte är vald
      setForagingCompletionCount(foragingCompletionCount + 1)
    }
  };

  return (
    <div>
      <fieldset>
        <LegendCard legendIcon={foragingIcon} legendTitle="Foraging" completionCount={foragingCompletionCount} tableLength={tableLength}/>

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
  )
}

const Farming = ({ farmingItems }) => {
  const [selectedRows, setSelectedRows] = useState(() => {
    const storedSelectedRows = localStorage.getItem('selectedRows');
    return storedSelectedRows ? JSON.parse(storedSelectedRows) : [];
  });

  const [completionCount, setCompletionCount] = useState(() => {
    const storedCompletionCount = localStorage.getItem('completionCount');
    return storedCompletionCount ? JSON.parse(storedCompletionCount) : 0;
  })

  const tableLength = farmingItems.length


  //uppdatera localstorage när completioncount ändras
  useEffect(() => {
    localStorage.setItem('completionCount', JSON.stringify(completionCount))
  }, [completionCount])

  // Uppdatera localStorage när selectedRows ändras
  useEffect(() => {
    console.log('Uppdaterar localStorage med:', selectedRows);
    localStorage.setItem('selectedRows', JSON.stringify(selectedRows));
  }, [selectedRows]);

  const handleRowClick = (index) => {
    // Om raden redan är vald, ta bort den från selectedRows, annars lägg till den
    if (selectedRows.includes(index)) {
      console.log('Ta bort raden', index)
      setSelectedRows(selectedRows.filter(row => row !== index)); // Tar bort raden om den är vald
      setCompletionCount(completionCount - 1)
    } else {
      console.log('hejsan test 2')
      setSelectedRows([...selectedRows, index]); // Lägg till raden om den inte är vald
      setCompletionCount(completionCount + 1)
    }
  };

  return (
    <div>

      <fieldset>
        <LegendCard legendIcon={farmingIcon} legendTitle="Farming" completionCount={completionCount} tableLength={tableLength}/>

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
                backgroundColor: selectedRows.includes(index) ? 'green' : '#0f1a36',
                color: selectedRows.includes(index) ? 'limegreen' : 'white',
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

const Fishing = ({fishingItems}) => {
  const [selectedFishingRows, setSelectedFishingRows] = useState(() => {
    const storedSelectedFishingRows = localStorage.getItem('selectedFishingRows');
    return storedSelectedFishingRows ? JSON.parse(storedSelectedFishingRows) : [];
  });

  const [fishingCompletionCount, setFishingCompletionCount] = useState(() => {
    const storedFishingCompletionCount = localStorage.getItem('fishingCompletionCount');
    return storedFishingCompletionCount ? JSON.parse(storedFishingCompletionCount) : 0;
  })

  const tableLength = fishingItems.length

    //uppdatera localstorage när completioncount ändras
    useEffect(() => {
      localStorage.setItem('fishingCompletionCount', JSON.stringify(fishingCompletionCount))
    }, [fishingCompletionCount])
  
    // Uppdatera localStorage när selectedRows ändras
    useEffect(() => {
      console.log('Uppdaterar localStorage med:', selectedFishingRows);
      localStorage.setItem('selectedFishingRows', JSON.stringify(selectedFishingRows));
    }, [selectedFishingRows]);
  
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
                backgroundColor: selectedFishingRows.includes(index) ? 'green' : 'rgba(42, 42, 42, 0.723)',
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



//https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fbnte7at5aco31.png%3Fwidth%3D1335%26format%3Dpng%26auto%3Dwebp%26s%3D77a6481820e36a1e7d05bfbd42149d69121b6c80


export const App = () => {




  return (
    <div style={{ padding: '0rem 2rem' }}>
      <nav>
      <h1>Stardew valley community bundle tracker</h1>
        <ul className='navbar'>
          <li>
            <NavLink to="/spring" activeClassName="active"> Spring </NavLink>
          </li>
          <li>
            <NavLink to="/summer"> Summer </NavLink>
          </li>
          <li>
            <NavLink to="/fall"> Fall </NavLink>
          </li>
          <li>
            <NavLink to="/winter"> Winter </NavLink>
          </li>
        </ul>
      </nav>
      
        <Routes>
          <Route path='/spring' element={<Spring/>}/>
          <Route path='/summer' element={<Summer/>}/>
          <Route path='/fall' element={<Fall/>}/>
          <Route path='/winter' element={<Winter/>}/>
        </Routes>
    </div>
  );
}
