import toggleInArray from "./toggleInArray.js";

it("Pushes the needle if it is NOT in haystack", () => {
    expect(toggleInArray(["foo", "bar"], "baz")).toEqual(["foo", "bar", "baz"]);
});

it("Removes the needle if it IS found in haystack", () => {
    expect(toggleInArray(["foo", "bar", "baz"], "bar")).toEqual(["foo", "baz"]);
});
