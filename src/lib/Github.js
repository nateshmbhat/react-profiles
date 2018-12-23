import React, { Component } from 'react';
import { Grid, Button, Paper, Tooltip } from '@material-ui/core';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { StarBorder, ArchiveRounded, TollTwoTone } from '@material-ui/icons'
import store from 'store';
import { GithubSVG } from './svg/svgs';
const expirePlugin = require('store/plugins/expire');

store.addPlugin(expirePlugin)


class GithubProfileBar extends Component {

    state = {
        totalRepos: 0,
        totalStars: 0,
    }

    componentDidMount() {
        let { username } = { ...this.props }

        store.removeExpiredKeys();

        let profile = store.get('profile');
        if (profile) {
            this.setState({
                totalRepos: profile.totalRepos,
                totalStars: profile.totalStars,
            })
        }
        else {
            Axios.get(`https://api.github.com/users/${username}/repos?type=owner&sort=updated`).then(resp => {
                console.log("Github api response =  ", resp);
                let stars = 0;
                resp.data.forEach(repo => {
                    stars += repo.stargazers_count;
                })

                store.set('profile', {
                    totalStars: stars,
                    totalRepos: resp.data.length,
                }, new Date().getTime() + (3600 * 1000));

                this.setState({
                    totalRepos: resp.data.length,
                    totalStars: stars,
                })
            }).catch(err => {
                console.log(err);
            })
        }

    }

    render() {
        const flatButtonStyle = { backgroundColor: 'rgba(230,230,230,0.8)', borderRadius: '0', height: '100%' };
        const { totalRepos, totalStars } = { ...this.state }
        let { tooltip, username , barHeight="50px" } = { ...this.props }
        tooltip = tooltip || 'visit profile'

        const getPad = (val) => { return { 'padding': val } };
        return <>
            <Grid container>
                <Paper style={{ 'padding': '0px', margin: '0', height: barHeight }}>
                    <Button variant="text" style={flatButtonStyle}><GithubSVG /></Button>
                    <Tooltip title={tooltip}>
                        <a target="_blank" href={`https://github.com/${username}`} style={{ padding: '10px' }}>{username}</a>
                    </Tooltip>
                    <Tooltip title={`${totalRepos} Repositories`}>
                        <Button variant="text" style={flatButtonStyle}><ArchiveRounded style={getPad('5px')} /> <b>{totalRepos}</b></Button>
                    </Tooltip>
                    <Tooltip title={`${totalStars} Stars`}>
                        <Button variant="text" style={flatButtonStyle}> <StarBorder style={getPad('2px')} /> <b>{totalStars}</b></Button>
                    </Tooltip>
                </Paper>
            </Grid>
        </>
    }
}

GithubProfileBar.propTypes = {
    username: PropTypes.string.isRequired,
    tooltip: PropTypes.string,
}

export default GithubProfileBar; 