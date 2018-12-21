import React, { Component } from 'react';
import { Grid, Button, Paper, Tooltip } from '@material-ui/core';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { StarBorder, ArchiveRounded } from '@material-ui/icons'
import store from 'store';
const expirePlugin = require('store/plugins/expire');

store.addPlugin(expirePlugin)

const GithubSVG = ({
    width = '30px',
    className = '',
    height = '30px',
    viewBox = '0 0 25 25',
}) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox={viewBox}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
    );


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
        let { tooltip, username } = { ...this.props }
        tooltip = tooltip || 'visit site'

        const getPad = (val) => { return { 'padding': val } };
        return <>
            <Grid container>
                <Paper style={{ 'padding': '0px', margin: '0', height: '50px' }}>
                    <Button variant="text" style={flatButtonStyle}><GithubSVG /></Button>
                    <Tooltip title={tooltip}>
                        <a target="_blank" href={`https://github.com/${username}`} style={{ padding: '10px' }}>{username}</a>
                    </Tooltip>
                    <Button variant="text" style={flatButtonStyle}><ArchiveRounded style={getPad('5px')} /> <b>{totalRepos}</b></Button>
                    <Button variant="text" style={flatButtonStyle}> <StarBorder style={getPad('2px')} /> <b>{totalStars}</b></Button>
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