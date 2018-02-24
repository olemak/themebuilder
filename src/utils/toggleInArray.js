function toggleInArray(haystack, needle) {
    const needleIndex = haystack.indexOf(needle);

    if (needleIndex > -1) {
        haystack.splice(needleIndex, 1);
    } else {
        haystack.push(needle);
    }
    return haystack;
}

export default toggleInArray;
