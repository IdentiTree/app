import { trees } from "../data/sampleData/treeData";
import { biomes as biomesData } from "../data/sampleData/biomeData";

/**
 * Calculate tree carbon capture data from the height, circumference
 * and the tree
 *
 * @param   {Number} treeID id of specie of the tree
 * @param   {Number} height height of the tree in meters
 * @param   {Number} circumference circumference of the tree in meters
 * @return  annual carbon content in tons
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

    return 0.01 * carbonContent;
};

/**
 * Estimate the carbon sequestration of an area using the type of
 * biome specified by the user.
 *
 * @param   {Array<biome>} biomes
 * @param   {Number} biome.biomeID
 * @param   {Number} biome.percentage
 * @param   {Number} totalArea total area of the land in hectares
 * @return  {Number} Biome carbon capture
 */

const estimateBiomeCarbonCapture = (biomes: Array<{ biomeId: number, percentage: number }>, totalArea: number): number => {
    let total = 0;
    let totalPercentage = 0;
    biomes.map((biome: any) => {
        const biomeData: any = biomesData.find((b: any) => biome.biomeId == b.id);
        total += biomeData.cc * biome.percentage/100 * totalArea;
        totalPercentage += biome.percentage;
    });

    if (totalPercentage === 100) {
        return total;
    } else {
        throw new Error("Total percentage must add up to 100");
    }
};

export {
    getTreeCarbonCapture,
    estimateBiomeCarbonCapture
};
