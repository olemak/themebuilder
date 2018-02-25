import { getFromObject } from "./getFromObject";
import defaultColors from "../data/defaultColors";

const foundColorArray = getFromObject(defaultColors, [
    "brand",
    "main",
    "support"
]);

describe("Get From Object", () => {
    it("Should return an Array", () => {
        expect(Array.isArray(foundColorArray)).toBe(true);
    });
    it("Ignore non-found indexes", () => {
        expect(
            Array.isArray(
                getFromObject(defaultColors, ["brand", "main", "notThere"])
            )
        ).toBe(true);
    });
});
