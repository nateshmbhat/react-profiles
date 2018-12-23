import React, { Component } from 'react';
import { Grid, Button, Paper, Tooltip } from '@material-ui/core';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { StarBorder, ArchiveRounded } from '@material-ui/icons'
import store from 'store';
import { LinkedInSVG, PersonSVG, BuildingSVG } from './svg/svgs';
const expirePlugin = require('store/plugins/expire');

store.addPlugin(expirePlugin)


const LinkedInProfileBar = (props) => {

    const flatButtonStyle = { backgroundColor: 'rgba(230,230,230,0.8)', borderRadius: '0', height: '100%' };
    let { tooltip, username, organization, role  , barHeight="50px" } = { ...props }
    tooltip = tooltip || 'visit profile'

    const getPad = (val) => { return { 'padding': val } };
    return <>
        <Grid container>
            <Paper style={{ 'padding': '0px', margin: '0', height: barHeight }}>
                <Button variant="text" style={flatButtonStyle}><LinkedInSVG /></Button>
                <Tooltip title={tooltip}>
                    <a target="_blank" href={`https://in.linkedin.com/in/${username}`} style={{ padding: '10px' }}>{username}</a>
                </Tooltip>
                {
                    organization &&

                    <Tooltip title={`Organization`}>
                        <Button variant="text" style={flatButtonStyle}><BuildingSVG style={getPad('5px')} /> <b>{organization}</b></Button>
                    </Tooltip>
                }

                {
                    role &&
                    <Tooltip title={`role`}>
                        <Button variant="text" style={{...flatButtonStyle, textTransform:'none'}}> <PersonSVG style={getPad('2px')} /> {role}</Button>
                    </Tooltip>
                }
            </Paper>
        </Grid>
    </>
}

LinkedInProfileBar.propTypes = {
    username: PropTypes.string.isRequired,
    tooltip: PropTypes.string,
    role: PropTypes.string,
    organization: PropTypes.string,
}

export default LinkedInProfileBar; 