import BaseLayout from "../../layout/BaseLayout";
import AreaEntry from "../../components/areas/AreaEntry";
import {Button, makeStyles} from "@material-ui/core";
import Dashboard from "../../components/areas/Dashboard";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },
    addButton: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
    }
});

export default function AreasOverview() {
    const classes = useStyles();
    const [areas, setAreas] = useState();

    useEffect(() => {
        fetch('/api/area')
            .then(response => response.json())
            .then(data => setAreas(data));
    }, []);

    return (
        <BaseLayout>
            <Dashboard totalCompensated={392} credits={19} />
            <div className={classes.root}>
                <AreaEntry title={"Area 1"} name={"Evergreen Forest"} carbonAmount={1.2} area={3.4}/>
                <AreaEntry title={"Area 2"} name={"Black Forest"} carbonAmount={3.2} area={0.4}/>
                <AreaEntry title={"Area 3"} name={"Tierpark Berlin"} carbonAmount={13.2} area={53.4}/>
            </div>
            <div className={classes.addButton}>
                <Button variant={"contained"} color={"primary"} component={Link} to={"/add-area"}>Add area</Button>
            </div>
        </BaseLayout>
    )
};
