export const phi = 1.61803;

export function goldenRatioUp(base, limit = 2) {
    const goldenResult = (base * phi).toFixed(limit);
    console.log("GoldenResult", typeof goldenResult, goldenResult);
    return goldenResult;
}

export function goldenRatioDown(base, limit = 2) {
    const goldenResult = (base * (1 / phi)).toFixed(limit);
    console.log("GoldenResult", typeof goldenResult, goldenResult);
    return goldenResult;
}
