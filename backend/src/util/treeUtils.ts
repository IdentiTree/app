import { trees } from "../data/sampleData/treeData";

/**
 * Calculate tree carbon capture data from the height, circumference
 * and the tree
 *
 * @param   {Number} treeID id of specie of the tree
 * @param   {Number} height height of the tree in meters
 * @param   {Number} circumference circumference of the tree in meters
 * @return  Carbon content in tons in a lifespan
 */

const getTreeCarbonCapture = (treeID: number, height: number, circumference: number): number => {
    const radius = (circumference/(2 * Math.PI));
    // convert to centimeters
    const breastHeightDiamter = 2 * radius * 100;
    const tree: any = trees.find((t: any) => treeID === t.id);
    const volumeOfTree = (Math.PI * radius**2 * height)/3
    const trunkBiomass = volumeOfTree * tree.nsg;
    const crownBiomass =
        breastHeightDiamter < 7
        ? 0 : breastHeightDiamter <=50
        ? tree.a * breastHeightDiamter**tree.b
        : tree.c + (tree.d * breastHeightDiamter);

    const rootBiomass =
        breastHeightDiamter < 7
        ? 0 : breastHeightDiamter <= 50
        ? tree.e * breastHeightDiamter**2.5
        : tree.f + (tree.g * breastHeightDiamter);

    const carbonContent = (trunkBiomass + rootBiomass + crownBiomass)/2;

    return carbonContent;
};

export { getTreeCarbonCapture };
