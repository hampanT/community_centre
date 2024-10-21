import { Fishing } from "./Fishing"
import { Foraging } from "./Foraging"
import { FruitTrees } from "./FruitTrees"

export const Winter = () => {
    const foragingItemsWinter = [
        {name: 'Winter Root', location: 'Tilling Soil, Artifact Spots, Blue Slimes in Mines level 41-79', bundle: 'Winter Foraging Bundle'},
        {name: 'Crystal Fruit', location: 'Winter Foraging, Dust Sprites in Mines level 41-79', bundle: 'Winter Foraging Bundle'},
        {name: 'Snow Yam', location: 'Tilling Soil, Artifact Spots', bundle: 'Winter Foraging Bundle'},
        {name: 'Crocus', location: 'Winter Foraging', bundle: 'Winter Foraging Bundle'},
        {name: 'Nautilus Shell', location: 'Winter Beach Foraging', bundle: 'Field Research Bundle'},
    ]

    const fishingItemsWinter = [
        {name: 'Tiger Trout', location: 'Rivers', time: '6am - 7pm', otherSeason: 'Found in Fall and Winter', bundle: 'River Fish Bundle'},
        {name: 'Sturgeon', location: 'Mountain Lake', time: '6am - 7pm', otherSeason: 'Found in Summer and Winter', bundle: 'Lake Fish Bundle'},
        {name: 'Sardine', location: 'Ocean', time: '6am - 7pm', otherSeason: 'Found in Spring, Fall and Winter', bundle: 'Ocean Fish Bundle'},
        {name: 'Tuna', location: 'Ocean', time: '6am - 7pm', otherSeason: 'Found in Summer and Winter', bundle: 'Ocean Fish Bundle'},
    ]

    const fruitTreeItemsWinter = [
        {name: 'Apple (3)', location: 'Apple Trees during Fall, Fruit Bats', bundle: 'Fodder Bundle, Artisan Bundle'},
        {name: 'Pomegranate', location: 'Pomegranate Trees, Fruit Bats', bundle: "Enchanter's Bundle, Artisan Bundle"},
        {name: 'Orange', location: 'Orange Trees during Summer, Fruit Bats', bundle: 'Artisan Bundle'},
        {name: 'Peach', location: 'Peach Trees during Summer, Fruit Bats', bundle: 'Artisan Bundle'},
        {name: 'Apricot', location: 'Apricot Trees during Spring, Fruit Bats', bundle: 'Artisan Bundle'},
        {name: 'Cherry', location: 'Cherry Trees during Spring, Fruit Bats', bundle: 'Artisan Bundle'},
    ]

    return (
        <div>
            <h1> Bundle items - Winter </h1>
            <Foraging foragingItems={foragingItemsWinter} season='winter'/>
            <Fishing fishingItems={fishingItemsWinter} season='winter'/>
            <FruitTrees fruitTreeItems={fruitTreeItemsWinter} season='winter'/>
        </div>
    )
}