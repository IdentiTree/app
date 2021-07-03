import BaseLayout from "../../layout/BaseLayout";
import AreaEntry from "./AreaEntry";
import {makeStyles} from "@material-ui/core";
import Dashboard from "./Dashboard";

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },
});

export default function Areas() {
    const classes = useStyles();

    return (
        <BaseLayout>
            <h1>Areas</h1>
            <Dashboard totalCompensated={392} credits={19} />
            <div className={classes.root}>
                <AreaEntry title={"Area 1"} name={"Evergreen Forest"} carbonAmount={1.2} area={3.4}/>
                <AreaEntry title={"Area 2"} name={"Black Forest"} carbonAmount={3.2} area={0.4}/>
                <AreaEntry title={"Area 3"} name={"Tierpark Berlin"} carbonAmount={13.2} area={53.4}/>
            </div>
        </BaseLayout>
    )
};
