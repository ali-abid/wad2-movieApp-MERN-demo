import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#bfbfbf",
    },

    fab: {
        marginTop: theme.spacing(10),
        position: "fixed",
        top: theme.spacing(10),
        right: theme.spacing(4),
    },
    offset: theme.mixins.toolbar,
}));

export default function FilterAndSortActorsCard(props) {
    const classes = useStyles();

    const filterInput = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type, value); // NEW
    };
    const handleTextChange = (e, props) => {
        filterInput(e, "name", e.target.value);
    };

    return (
        <>
            <Fab className={classes.fab}
                position="fixed" elevation={0} color='primary'>
                <Toolbar>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography variant="h6" component="h6">
                                Search
                            </Typography>
                            <TextField
                                className={classes.formControl}
                                id="filled-search"
                                type="search"
                                value={props.titleFilter}
                                variant="standard"
                                onChange={handleTextChange}
                            />
                        </CardContent>
                    </Card>
                </Toolbar>
            </Fab>
        </>
    );
}