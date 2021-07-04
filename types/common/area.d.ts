import { Tree } from './Tree'
import { Coordinate } from './Coordinate'

// types/common/area.d.ts
export interface Area {
    // A custom name of the area
    name: string;
    // digital identtiy of the area
    did: string;
    // the owner of the area, (a IOTA DID or ID of the user)
    owner: string;
    // Coordinates of the Area
    coordinates: Array<Coordinate>,
    // Area size in square meters
    // List of all trees in the area
    area: number;
    biomes: Array<{ biomeId: number, percentage: number }>;
    carbonCapture: number;
g
}
