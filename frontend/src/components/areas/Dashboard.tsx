import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import {Theme} from '../../theme/types'

export interface DashboardProps {
    totalCompensated: number,
    credits: number,
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        margin: '0.5rem',
    },
    card: {
        background: theme.palette.gradients.primary,
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        padding: 16,
    },
    cardRow: {
        display: "flex",
        justifyContent: "space-between",
    }
}));

export default function Dashboard(props: DashboardProps) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.card}>
                    <Typography variant="h6" component="h2">
                        Dashboard
                    </Typography>
                <div style={{marginBottom: 8}} className={classes.cardRow}>
                    <Typography component="p">
                        Total CO2 compensated
                    </Typography>
                    <Typography variant="button" component="p">
                        {props.totalCompensated} t
                    </Typography>
                </div>
                <div className={classes.cardRow}>
                    <Typography component="p">
                        Credits to be payed out
                    </Typography>
                    <Typography variant="button" component="p">
                        {props.credits} kg
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}
