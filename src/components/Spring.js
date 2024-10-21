import { Farming } from "./Farming"
import { Fishing } from "./Fishing"
import { Foraging } from "./Foraging"
import { FruitTrees } from "./FruitTrees"

export const Spring = () => {
    const foragingItemsSpring = [
        {name: 'Wild Horseradish', location: 'Spring Foraging', bundle: 'Spring Foraging Bundle'},
        {name: 'Daffodil', location: 'Spring Foraging, Flower Dance', bundle: 'Spring Foraging Bundle'},
        {name: 'Leek', location: 'Spring Foraging', bundle: 'Spring Foraging Bundle'},
        {name: 'Dandelion', location: 'Spring Foraging, Flower Dance', bundle: 'Spring Foraging Bundle'}
    ]
    
    
    const farmingItemsSpring = [
        {name: 'Parsnip', location: 'Spring Crops', bundle: 'Spring Crops Bundle'},
        {name: 'Green Bean', location: 'Spring Crops', bundle: 'Spring Crops Bundle'},
        {name: 'Cauliflower', location: 'Spring Crops', bundle: 'Spring Crops Bundle'},
        {name: 'Potato', location: 'Spring Crops', bundle: 'Spring Crops Bundle'},
        {name: 'Parsnip (5)', location: 'Gold Quality Spring Crops', bundle: 'Quality Crops Bundle'},
    ]
    
    const fishingItemsSpring = [
        {name: 'Sunfish', location: 'Rivers', time: '6am - 7pm, sunny weather', otherSeason: 'Found in Spring and Summer', bundle: 'River Fish Bundle'},
        {name: 'Catfish', location: 'Rivers', time: 'Anytime, during rainy day', otherSeason: 'Found in Spring and Fall', bundle: 'River Fish Bundle'},
        {name: 'Shad', location: 'Rivers', time: '9am - 2am, when it rains', otherSeason: 'Found in Spring, Summer and Fall', bundle: 'River Fish Bundle'},
        {name: 'Sardine', location: 'Ocean', time: '6am - 7pm', otherSeason: 'Found in Spring and Summer', bundle: 'Ocean Fish Bundle'},
        {name: 'Eel', location: 'Ocean', time: '6am - 7pm, sunny weather', otherSeason: 'Found in Spring and Summer', bundle: 'Night Fishing Bundle'},
    ]

    const fruitTreeItemsSpring = [
        {name: 'Apple (3)', location: 'Apple Trees during Fall, Fruit Bats', bundle: 'Fodder Bundle, Artisan Bundle'},
        {name: 'Pomegranate', location: 'Pomegranate Trees, Fruit Bats', bundle: "Enchanter's Bundle, Artisan Bundle"},
        {name: 'Orange', location: 'Orange Trees during Summer, Fruit Bats', bundle: 'Artisan Bundle'},
        {name: 'Peach', location: 'Peach Trees during Summer, Fruit Bats', bundle: 'Artisan Bundle'},
        {name: 'Apricot', location: 'Apricot Trees during Spring, Fruit Bats', bundle: 'Artisan Bundle'},
        {name: 'Cherry', location: 'Cherry Trees during Spring, Fruit Bats', bundle: 'Artisan Bundle'},
    ]
    return(
        <div>
            <h1> Bundle items - Spring </h1>
            <Foraging foragingItems={foragingItemsSpring} season='spring'/>
            <Farming farmingItems={farmingItemsSpring} season='spring'/>
            <Fishing fishingItems={fishingItemsSpring} season='spring'/>
            <FruitTrees fruitTreeItems={fruitTreeItemsSpring} season='spring'/>
        </div>
    )
}