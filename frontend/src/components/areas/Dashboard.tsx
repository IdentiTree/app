import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";

export interface DashboardProps {
    totalCompensated: number,
    credits: number,
}

const useStyles = makeStyles({
    root: {
        margin: '0.5rem',
    },
    card: {
        background: "blue",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
    },
    cardRow: {
        display: "flex",
        justifyContent: "space-between",
    }
});

export default function Dashboard(props: DashboardProps) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.card}>
                    <Typography variant="h6" component="h2">
                        Dashboard
                    </Typography>
                <div className={classes.cardRow}>
                    <Typography variant="body2" component="p">
                        Total CO2 compensated
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.totalCompensated} t
                    </Typography>
                </div>
                <div className={classes.cardRow}>
                    <Typography variant="body2" component="p">
                        Credits to be payed out
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.credits} kg
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}
