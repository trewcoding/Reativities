import { Icon, List, Menu, MenuItem, Typography } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Calendar } from "react-calendar";
import React from "react";
import { Box } from "@mui/system";


export default function ActivityFilters() {
    return (
        <>
            <List>
                <Icon component={FilterAltIcon}>Filters</Icon>
                <MenuItem>All Activities</MenuItem>
                <MenuItem>I'm Going</MenuItem>
                <MenuItem>I'm Hosting</MenuItem>
            </List>
            <Calendar />
        </>
    )
}