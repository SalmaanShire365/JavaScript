function getWeirdGuysChoice(items, specialItem) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === specialItem) {
            return items[i];
        }
    }
    return items[items.length - 1];
}
console.log(getWeirdGuysChoice(['cap', 'xylophone', 'ham sandwich'], 'xylophone'));