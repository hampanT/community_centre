import { Farming } from "./Farming"
import { Fishing } from "./Fishing"
import { Foraging } from "./Foraging"
import { FruitTrees } from "./FruitTrees"

export const Fall = () => {
    const foragingItemsFall = [
        {name: 'Common Mushroom', location: 'Fall Foraging, Mushroom Cave, Tapping Mushroom Tree, Fall Secret Woods', bundle: 'Fall Foraging Bundle'},
        {name: 'Wild Plum', location: 'Fall Foraging, Fruit Bats', bundle: 'Fall Foraging Bundle'},
        {name: 'Hazelnut', location: 'Fall Foraging', bundle: 'Fall Foraging Bundle'},
        {name: 'Blackberry', location: 'Fall Foraging, Fruit Bats', bundle: 'Fall Foraging Bundle'},
    ]

    const farmingItemsFall = [
        {name: 'Corn', location: 'Summer/Fall Crops', bundle: 'Fall Crops Bundle'},
        {name: 'Eggplant', location: 'Fall Crops', bundle: 'Fall Crops Bundle'},
        {name: 'Pumpkin', location: 'Fall Crops', bundle: 'Fall Crops Bundle'},
        {name: 'Yam', location: 'Fall Crops', bundle: 'Fall Crops Bundle'},
        {name: 'Pumpkin (5)', location: 'Gold Quality Fall Crops', bundle: 'Quality Crops Bundle'},
        {name: 'Corn (5)', location: 'Gold Quality Summer/Fall Crops', bundle: 'Quality Crops Bundle'},
        {name: 'Sunflower', location: 'Summer/Fall Crops', bundle: 'Dye Bundle'},
        {name: 'Wheat (10)', location: 'Summer/Fall Crops', bundle: 'Fodder Bundle'},
    ]

    const fishingItemsFall = [
        {name: 'Catfish', location: 'Rivers', time: 'Anytime, when it rains', otherSeason: 'Found in Spring and Fall', bundle: 'River Fish Bundle'},
        {name: 'Shad', location: 'Rivers', time: '9am - 2am, when it rains', otherSeason: 'Found in Spring, Summer and Fall', bundle: 'River Fish Bundle'},
        {name: 'Tiger Trout', location: 'Rivers', time: '6am - 7pm', otherSeason: 'Found in Fall and Winter', bundle: 'River Fish Bundle'},
        {name: 'Sardine', location: 'Ocean', time: '6am - 7pm', otherSeason: 'Found in Spring, Fall and Winter', bundle: 'Ocean Fish Bundle'},
        {name: 'Red Snapper', location: 'Ocean', time: '6am - 7pm, when it rains', otherSeason: 'Found in Summer and Fall', bundle: 'Ocean Fish Bundle'},
        {name: 'Tiliapia', location: 'Ocean', time: '6am - 7pm', otherSeason: 'Found in Summer and Fall', bundle: 'Ocean Fish Bundle'},
        {name: 'Walleye', location: 'Rivers', time: '12pm - 2am, when it rains', otherSeason: '-', bundle: 'Night Fish Bundle'},
        {name: 'Eel', location: 'Ocean', time: '4pm - 2am, when it rains', otherSeason: 'Found in Spring and Fall', bundle: 'Night Fish Bundle'},
        
    ]

    const fruitTreeItemsFall = [
        {name: 'Apple (3)', location: 'Apple Trees, Fruit Bats', bundle: 'Fodder Bundle, Artisan Bundle'},
        {name: 'Pomegranate', location: 'Pomegranate Trees, Fruit Bats', bundle: "Enchanter's Bundle, Artisan Bundle"},
        {name: 'Orange', location: 'Orange Trees during Summer, Fruit Bats', bundle: 'Artisan Bundle'},
        {name: 'Peach', location: 'Peach Trees during Summer, Fruit Bats', bundle: 'Artisan Bundle'},
        {name: 'Apricot', location: 'Apricot Trees during Spring, Fruit Bats', bundle: 'Artisan Bundle'},
        {name: 'Cherry', location: 'Cherry Trees during Spring, Fruit Bats', bundle: 'Artisan Bundle'},
    ]

    return (
        <div>
            <h1> Bundle items - Fall </h1>
            <Foraging foragingItems={foragingItemsFall} season='fall'/>
            <Farming farmingItems={farmingItemsFall} season='fall'/>
            <Fishing fishingItems={fishingItemsFall} season='fall'/>
            <FruitTrees fruitTreeItems={fruitTreeItemsFall} season='fall'/>
        </div>
    )
}