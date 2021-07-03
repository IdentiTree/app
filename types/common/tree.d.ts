// types/common/tree.d.ts
// OPEN COUNCIL DATA STANDARDS: http://standards.opencouncildata.org/#/trees
interface Tree {

    // --- Required ---
    // lat`: Latitude
    lat: string;
    // `lon`: longitude
    lon: string;

    // --- Recommended ---
    // `genus`: Botanical genus, in title case. eg: Eucalyptus
    genus: string;
    // `species`: Botanical genus, in title case. Leave blank if not known (not “Sp.”). eg: Regnans
    species: string;
    // `dbh`: Diameter at breast height (130cm above ground), in centimetres. eg: 60. (See General recommendations for ranges.)
    dbh: number;
    // `year_min`: Lower bound on year that tree is expected to live to. (That is, a tree surveyed in 2008 with useful life expectancy range of 10-15 years would be 2018).
    year_min: number,
    // `year_max`: Upper bound on year that tree is expected to live to. (2023 in this example)
    year_max: number,

    // --- Optional fields ---

    // `crown`: Width in metres of the tree’s foliage (also known as crown spread). eg: 6 (See General recommendations for ranges.)
    crown: number,
    // `height`: Height in metres. eg: 4. (See General recommendations for ranges.)
    height: number,
    // `common`: Common name for species (non-standardised), in title case. eg: Myrtle Beech
    common: string,
    // `location`: Where the tree is located: park, street, council
    location: string,
    // `ref`: Council-specific identifier, enabling joining to other datasets. eg 
    ref: string,
    // `maintenance`: number of months, how often the tree is inspected. eg 24
    maintenance: number,
    // `maturity`: one of young, semi-mature, mature, over-mature
    maturity: string,
    // `planted`: date of planting, in ISO8601. eg 1998-04-02
    planted: string,
    // `updated`: date of addition to database or most recent revision, in ISO8601. eg 2012-06-08
    updated: string,
    // `health`: Health of tree growth: one of stump, dead, poor,fair,good
    health: string,
    // `structure`: Solidity of tree, unlikelihood of falling. One of failed, poor, fair, good
    structure: string,
    // `variety`: Any part of the scientific name below species level, including subspecies or variety.
    variety: string,
    // `description`: Other information about the tree that is not its scientific name or species.
    description: string,
    // `family`: Botanical family.
    family: number,
    // `dbh_min, dbh_max, height_min, height_max, crown_min, crown_max`: See General recommendations.
    dbh_min: number,
    // `ule_min, ule_max`: Lower and upper bound on useful life expectancy, when surveyed, in years. eg: 15. See also year_max,year_min
    ule_min: number,
    // `address`: Street address.
    address: string,
}