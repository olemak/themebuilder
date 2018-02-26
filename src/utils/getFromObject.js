export function getFromObject(obj, use) {
    let foundItems = [];

    //eslint-disable-next-line
    use.map(item => {
        if (obj.hasOwnProperty(item)) {
            foundItems[item] = { name: item };
            foundItems.push(Object.assign(foundItems[item], obj[item]));
        }
    });
    return foundItems;
}
