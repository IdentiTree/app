import { Tree } from './Tree'
import { Coordinate } from './Coordinate'

// types/common/area.d.ts
export interface Area {
    // A custom name of the area
    name: string
    // digital identtiy of the area
    did: string,
    // the owner of the area, (a IOTA DID or ID of the user)
    owners: Array<string>,
    // Coordinates of the Area
    coordinates: Array<Coordinate>,
    // Area size in square meters
    area_size: number,
    // List of all trees in the area
    trees: Array<Tree>,
    // landuse, type of area, for example: forest, flowerbed
    // More information: https://wiki.openstreetmap.org/wiki/Key:landuse
    landuse: string
}