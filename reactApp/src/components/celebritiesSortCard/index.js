import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#bfbfbf",
    },

    fab: {
        marginTop: theme.spacing(8),
        position: "fixed",
        top: theme.spacing(27),
        right: theme.spacing(5),
    },
    offset: theme.mixins.toolbar,
}));

export default function CelebritiesSortCard(props) {
    const classes = useStyles();

    const toggleSwitch = (e, props) => {
        switchON(e, "popularity");
    };

    const switchON = (e, type, value) => {
        e.preventDefault();
        props.onSwitchChange(type);
    };
    return (
        <>
            <Fab className={classes.fab}
                position="fixed" elevation={0} color='primary'>
                <Toolbar>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <FormGroup className={classes.formControl}>
                                <FormControlLabel control={<Switch defaultChecked onChange={toggleSwitch} />} label="Most Popular" />
                            </FormGroup>
                        </CardContent>
                    </Card>
                </Toolbar>
            </Fab>
        </>
    );
}