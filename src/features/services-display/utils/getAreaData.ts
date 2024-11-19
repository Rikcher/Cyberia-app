import areaData from '../../../utils/areaData.json';

interface AreaDetails {
    title: string;
    description: string;
    price: string | null;
}

interface AreaData {
    [key: string]: AreaDetails;
    default: AreaDetails;
}

const typedAreaData = areaData as AreaData;

const getAreaData = (areaName: string | null): AreaDetails => {
    if (areaName && typedAreaData[areaName]) {
        return typedAreaData[areaName];
    }
    return typedAreaData.default;
};

export default getAreaData;
