import { Coordinate } from './Coordinate'

export interface Tree {
    treeType: number;
    coordinate: Coordinate;
    commonName: string;
    carbonCapture: number;
    area: string;
    height: number;
    circumference: number;
}
