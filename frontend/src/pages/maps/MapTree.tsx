import React from 'react';
import { Box, makeStyles, Drawer, Typography, Button, TextField, Select, MenuItem } from "@material-ui/core";
import { Theme } from '../../theme/types';
import Map from "../../components/Map";
import BaseLayout from "../../layout/BaseLayout";
import { useEffect, useState } from "react";

const treeTypes = ['Type 1', 'Type 2', 'Type 3']

export default function MapTree() {
    const classes = useStyles()
    const [areas, setAreas] = useState<any[]>([]);
    const [trees, setTrees] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/area')
            .then(response => response.json())
            .then(data => setAreas(data));
    }, []);

    useEffect(() => {
        fetch('/api/trees')
            .then(response => response.json())
            .then(data => setAreas(data));
    }, []);

    const [type, setType] = React.useState<string>(treeTypes[0])
    const [circumference, setCircumference] = React.useState<number>(0)
    const [height, setHeight] = React.useState<number>(0)
    const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);

    const handleType = (event: React.ChangeEvent<{ value: unknown }>) => { setType(event.target.value as string); };

    const handleCircumference = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCircumference(event.target.value as number)
    }

    const handleHeight = (event: React.ChangeEvent<{ value: unknown }>) => {
        setHeight(event.target.value as number)
    }

    const handleSubmit = () => {
        console.log('TODO')
    }

    return (
        <BaseLayout>
            <Box className={classes.mapBox} display="flex" flexDirection="column">
                <Box flexGrow="1" margin={"1rem"}>
                    <Map
                        mode="place"
                        center={[52.51653424960838, 13.375682830810549]}
                        overlays={[
                            {
                                polygon: [
                                    [52.51246006145307,
                                        13.37636947631836
                                    ],
                                    [52.51541127391803,
                                    13.377184867858888
                                    ],
                                    [52.51560714383738,
                                    13.376541137695312
                                    ],
                                    [52.51598582320568,
                                    13.376090526580812
                                    ],
                                    [52.516390614783575,
                                    13.376069068908693
                                    ],
                                    [52.516730114521835,
                                    13.376240730285646
                                    ],
                                    [52.51703043902672,
                                    13.376927375793459
                                    ],
                                    [52.51765719659844,
                                    13.376755714416506
                                    ],
                                    [52.51773554066627,
                                    13.374180793762209
                                    ],
                                    [52.518492859453154,
                                    13.373579978942873
                                    ],
                                    [52.519302392686626,
                                    13.374309539794924
                                    ],
                                    [52.519485188449174,
                                    13.373279571533205
                                    ],
                                    [52.52086918882907,
                                    13.373365402221681
                                    ],
                                    [52.52175701517317,
                                    13.375039100646974
                                    ],
                                    [52.52282760543003,
                                    13.372378349304201
                                    ],
                                    [52.52126087913385,
                                    13.368558883666992
                                    ],
                                    [52.52081696319125,
                                    13.370747566223146
                                    ],
                                    [52.51969409696076,
                                    13.370747566223146
                                    ],
                                    [52.519615756385335,
                                    13.365297317504885
                                    ],
                                    [52.51789222838286,
                                    13.360748291015625
                                    ],
                                    [52.51689986340726,
                                    13.357229232788088
                                    ],
                                    [52.51760496714228,
                                    13.353838920593263
                                    ],
                                    [52.51969409696076,
                                    13.350534439086916
                                    ],
                                    [52.51958964282915,
                                    13.347315788269043
                                    ],
                                    [52.51794445749753,
                                    13.347744941711428
                                    ],
                                    [52.517474393230245,
                                    13.34594249725342
                                    ],
                                    [52.51726547416385,
                                    13.344569206237793
                                    ],
                                    [52.51582912869047,
                                    13.344140052795412
                                    ],
                                    [52.51530680960401,
                                    13.34319591522217
                                    ],
                                    [52.51538515786282,
                                    13.338861465454103
                                    ],
                                    [52.51358311256651,
                                    13.338389396667482
                                    ],
                                    [52.51337417499763,
                                    13.336157798767092
                                    ],
                                    [52.51269512103783,
                                    13.3359432220459
                                    ],
                                    [52.511023558893015,
                                    13.33821773529053
                                    ],
                                    [52.50929969383815,
                                    13.343110084533693
                                    ],
                                    [52.51107579617247,
                                    13.345513343811037
                                    ],
                                    [52.50987432303624,
                                    13.346500396728517
                                    ],
                                    [52.50956088985959,
                                    13.349933624267578
                                    ],
                                    [52.509769845559056,
                                    13.352379798889162
                                    ],
                                    [52.50956088985959,
                                    13.35340976715088
                                    ],
                                    [52.50995268098114,
                                    13.357229232788088
                                    ],
                                    [52.50974372615096,
                                    13.36293697357178
                                    ],
                                    [52.51167652042317,
                                    13.374052047729492
                                    ]
                                ], options: { fillColor: 'lime' }
                            }
                        ]}
                        markers={[
                            { position: [51.519, -0.10], type: "quest" },
                            { position: [52.51567652042317,
                                13.374052047729492], type: "entity" }, { position: [52.51667652042317,
                                    13.364052047729492], type: "entity" } , { position: [52.51467652042317,
                                        13.366052047729492], type: "entity" }]
                        }
                        onPlace={(pos) => setOpenDrawer(true)}
                        onMarkerSelect={(marker) => console.log(marker)}
                    />
                </Box>
            </Box>
            <Drawer anchor={'bottom'} open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Box className={classes.overlay}>
                    <Typography variant="h4">Add a tree</Typography>
                    <Select
                        className={classes.select}
                        label="Type"
                        variant="filled"
                        value={type}
                        onChange={handleType}
                    >
                        {treeTypes.map((treeType) => (
                            <MenuItem value={treeType}>
                                {treeType}
                            </MenuItem>
                        ))}
                    </Select>
                    <TextField
                        className={classes.textField}
                        id='tree-circumference'
                        type='number'
                        label="Circumference"
                        variant="filled"
                        value={circumference}
                        onChange={handleCircumference}
                    />
                    <TextField
                        className={classes.textField}
                        id='tree-height'
                        type='number'
                        label="Height"
                        variant="filled"
                        value={height}
                        onChange={handleHeight}
                    />
                    <Button
                        style={{ marginTop: 16 }}
                        color="primary"
                        size="large"
                        variant="contained"
                        onClick={handleSubmit}>
                        Submit Tree
                    </Button>
                </Box>
            </Drawer>
        </BaseLayout>
    )
}


const useStyles = makeStyles((theme: Theme) => ({
    mapBox: {
        height: 'calc(100vh - 130px)',
    },
    overlay: {
        padding: theme.spacing(5),
    },
    textField: {
        width: '100%',
        marginBottom: 8,
    },
    select: {
        width: '100%',
        marginBottom: 8,
    },
}));
