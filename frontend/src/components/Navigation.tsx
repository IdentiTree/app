import {BottomNavigation, BottomNavigationAction, makeStyles} from "@material-ui/core";
import React, {useState} from "react";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: "fixed",
        bottom: 0,
    },
    icon: {
        width: 24,
    }
});

export function Navigation() {
    const classes = useStyles();
    const [value, setValue] = useState('Areas');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            showLabels
            className={classes.root}
        >
            {/*<BottomNavigationAction label="Panoramas" icon={} component={Link} to={'/asd'} />*/}
            <BottomNavigationAction component={Link} to={'/areas'} label="Areas" value='Areas' icon={<div className={classes.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
            </div>}/>
            <BottomNavigationAction component={Link} to={'/map'} label="Map" value='Map' icon={<div className={classes.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
            </div>}/>
            <BottomNavigationAction component={Link} to={'/market'} label="Market" value='Market' icon={<div className={classes.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
            </div>}/>
        </BottomNavigation>
    )
}

export default Navigation
