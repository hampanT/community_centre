import { Farming } from "./Farming"
import { Fishing } from "./Fishing"
import { Foraging } from "./Foraging"
import { FruitTrees } from "./FruitTrees"

export const Summer = () => {
    const foragingItemsSummer = [
        {name: 'Grape', location: 'Summer Foraging, Fall Farming', bundle: 'Summer Foraging Bundle'},
        {name: 'Spice Berry', location: 'Summer Foraging, Fruit Bats', bundle: 'Summer Foraging Bundle'},
        {name: 'Sweet Pea', location: 'Summer Foraging', bundle: 'Summer Foraging Bundle'},
        {name: 'Fiddlehead Fern', location: 'Summer Foraging Secret Woods', bundle: "Chef's Bundle"},
    ]

    const farmingItemsSummer = [
        {name: 'Tomato', location: 'Summer Crops', bundle: 'Summer Crops Bundle'},
        {name: 'Hot Pepper', location: 'Summer Crops', bundle: 'Summer Crops Bundle'},
        {name: 'Blueberry', location: 'Summer Crops', bundle: 'Summer Crops Bundle'},
        {name: 'Melon', location: 'Summer Crops', bundle: 'Summer Crops Bundle'},
        {name: 'Melon (5)', location: 'Gold Quality Summer Crops', bundle: 'Quality Crops Bundle'},
        {name: 'Corn', location: 'Summer/Fall Crops', bundle: 'Fall Crops Bundle'},
        {name: 'Corn (5)', location: 'Gold Quality Summer/Fall Crops', bundle: 'Quality Crops Bundle'},
        {name: 'Poppy', location: 'Summer Crops', bundle: "Chef's Bundle"},
        {name: 'Sunflower', location: 'Summer/Fall Crops', bundle: 'Dye Bundle'},
        {name: 'Red Cabbage', location: 'Summer Crops', bundle: 'Dye Bundle'},
        {name: 'Wheat (10)', location: 'Summer/Fall Crops', bundle: 'Fodder Bundle'},
    ]

    const fishingItemsSummer = [
        {name: 'Sunfish', location: 'Rivers', time: '6am - 7pm, sunny weather', otherSeason: 'Found in Spring and Summer', bundle: 'River Fish Bundle'},
        {name: 'Shad', location: 'Rivers', time: '9am - 2am, when it rains', otherSeason: 'Found in Spring, Summer and Fall', bundle: 'River Fish Bundle'},
        {name: 'Sturgeon', location: 'Mountain Lake', time: '6am - 7pm, sunny weather', otherSeason: 'Found in Summer and Winter', bundle: 'Lake Fish Bundle'},
        {name: 'Tuna', location: 'Ocean', time: '6am - 7pm', otherSeason: 'Found in Summer and Winter', bundle: 'Ocean Fish Bundle'},
        {name: 'Red Snapper', location: 'Ocean', time: '6am - 7pm, when it rains', otherSeason: 'Found in Summer and Fall', bundle: 'Ocean Fish Bundle'},
        {name: 'Tilapia', location: 'Ocean', time: '6am - 2pm, sunny weather', otherSeason: 'Found in Summer and Fall', bundle: 'Ocean Fish Bundle'},
        {name: 'Pufferfish', location: 'Ocean', time: '12pm - 4pm, sunny weather', otherSeason: '-', bundle: 'Specialty Fish Bundle'},
    ]

    const fruitTreeItemsSummer = [
        {name: 'Apple', location: 'Apple Trees during Fall, Fruit Bats', bundle: 'Fodder Bundle, Artisan Bundle'},
        {name: 'Pomegranate', location: 'Pomegranate Trees during Fall, Fruit Bats', bundle: "Enchanter's Bundle, Artisan Bundle"},
        {name: 'Orange', location: 'Orange Trees, Fruit Bats', bundle: 'Artisan Bundle'},
        {name: 'Peach', location: 'Peach Trees, Fruit Bats', bundle: 'Artisan Bundle'},
        {name: 'Apricot', location: 'Apricot Trees during Spring, Fruit Bats', bundle: 'Artisan Bundle'},
        {name: 'Cherry', location: 'Cherry Trees during Spring, Fruit Bats', bundle: 'Artisan Bundle'},
    ]
    return (
        <div>
            <h1> Bundle items - Summer </h1>
            <Foraging foragingItems={foragingItemsSummer} season='summer'/>
            <Farming farmingItems={farmingItemsSummer} season='summer'/>
            <Fishing fishingItems={fishingItemsSummer} season='summer'/>
            <FruitTrees fruitTreeItems={fruitTreeItemsSummer} season='summer'/>
        </div>
    )
}