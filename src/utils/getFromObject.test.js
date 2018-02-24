import { getFromObject } from "./getFromObject";
import defaultColors from "../data/defaultColors";

const foundColorObject = getFromObject(defaultColors, [
    "brand",
    "main",
    "support"
]);

describe("Get From Object", () => {
    it("Should return an Object", () => {
        expect(foundColorObject).toEqual({
            brand: {
                value: "#123456",
                contrast: "#ff00ff"
            },
            main: {
                value: "#345612"
            },
            support: {
                value: "#561234"
            }
        });
    });
    it("Should fail elegantly", () => {
        expect(
            getFromObject(defaultColors, ["brand", "main", "notThere"])
        ).toEqual({
            brand: {
                value: "#123456",
                contrast: "#ff00ff"
            },
            main: {
                value: "#345612"
            }
        });
    });
});
