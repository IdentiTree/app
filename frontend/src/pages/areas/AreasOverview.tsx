import BaseLayout from "../../layout/BaseLayout";
import AreaEntry from "../../components/areas/AreaEntry";
import { Button, makeStyles } from "@material-ui/core";
import Dashboard from "../../components/areas/Dashboard";
import { Link } from "react-router-dom";
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
    const [areas, setAreas] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/areas')
            .then(response => response.json())
            .then(data => setAreas(data));
    }, []);

    return (
        <BaseLayout>
            <Dashboard totalCompensated={392} credits={19} />
            <div className={classes.root}>
                {areas.map(area => <AreaEntry title={area.name} name={""} carbonAmount={area.carbonCapture} area={area.area}/>)}
            </div>
            <div className={classes.addButton}>
                <Button variant={"contained"} color={"primary"} component={Link} to={"/add-area"}>Add area</Button>
            </div>
        </BaseLayout>
    )
};
