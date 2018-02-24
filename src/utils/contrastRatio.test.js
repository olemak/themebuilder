import {
    hexToRgb,
    luminance,
    contrast,
    getContrast
} from "./contrastRatio";

it("hexToRgb should return an array", () => {
    expect(Array.isArray(hexToRgb("#3956FA"))).toBe(true);
});

it("hexToRgb should contain numbers between 0 and 255", () => {
    expect(hexToRgb("#3956FA")[0]).toBeGreaterThan(0);
    expect(hexToRgb("#3956FA")[0]).toBeLessThan(256);
});

it("luminance should return a numeric value", () => {
    expect(luminance([32, 12, 243])).toBeGreaterThan(0);
    expect(luminance([32, 12, 243])).toBeLessThan(10);
});

it("contrast should return a number", () => {
    expect(contrast([21, 12, 45], [43, 34, 255])).toBeCloseTo(2.47);
});

it("getContrast should return correct contrast", () => {
    expect(getContrast("#123456", "#EDCBA9")).toBeCloseTo(8.31);
    expect(getContrast("#004000", "#0000A0")).toBeCloseTo(1.15);
    expect(getContrast("#800040", "#FF80FF")).toBeCloseTo(4.91);
    expect(getContrast("#FF80FF", "#800040")).toBeCloseTo(4.91);
});
