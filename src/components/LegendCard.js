

export const LegendCard = ({legendIcon, legendTitle, completionCount, tableLength}) => {
    return (
        <legend style={{backgroundColor: completionCount === tableLength ? 'green' : 'white'}}>
        <img src={legendIcon} alt='legendIcon'/>
        <h2> {legendTitle} </h2>
        <p style={{color: completionCount === tableLength ? 'limegreen' : 'black'}}> {completionCount} / {tableLength} </p>
        </legend>
    )

}