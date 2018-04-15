import { goldenRatioUp, goldenRatioDown } from "../utils/goldenRatio";

const baseNumber = 1;

const defaultSpacing = {
    tiny: goldenRatioDown(goldenRatioDown(1)),
    small: goldenRatioDown(1),
    medium: baseNumber,
    large: goldenRatioUp(1),
    huge: goldenRatioUp(goldenRatioUp(1))
};

export default defaultSpacing;
