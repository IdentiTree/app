import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";

export interface AreaEntryProps {
    title: string,
    name: string,
    carbonAmount: number,
    area: number,
}

const useStyles = makeStyles({
    root: {
        margin: '0.5rem',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    card: {
        display: "flex",
        justifyContent: "space-between"
    },
    values: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-evenly",
    },
    blue: {
        color: "blue",
        fontWeight: "bold"
    }
});

export default function AreaEntry(props: AreaEntryProps) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.card}>
                {/*<Typography className={classes.title} color="textSecondary" gutterBottom>*/}
                {/*    {props.title}*/}
                {/*</Typography>*/}
                <div>
                    <Typography variant="h6" component="h2">
                        {props.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {props.name}
                    </Typography>
                </div>
                <div className={classes.values}>
                    <Typography variant="body2" component="p" className={classes.blue}>
                        {props.carbonAmount} kg
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.area} hectar
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}
