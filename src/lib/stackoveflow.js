import React, { Component } from 'react';
import { Grid, Button, Paper, Tooltip } from '@material-ui/core';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { StackOverflowSVG } from './svg/svgs'
import store from 'store';
const expirePlugin = require('store/plugins/expire');

store.addPlugin(expirePlugin)

class StackOverflowBar extends Component {

    state = {
        reputation: 0,
        questions: store.get('stackoverflow-questions', 0),
        answers: store.get('stackoverflow-answers', 0),
    }

    componentDidMount() {
        let { userid } = { ...this.props }

        store.removeExpiredKeys();

        let storeKey = 'stackoverflow-profile-bar';
        let expireTime = new Date().getTime() + (3600 * 1000); //one hour from current timestamp
        let profile = store.get(storeKey);
        if (profile) {
            this.setState({
                reputation: profile.reputation,
                bronze: profile.bronze,
                gold: profile.gold,
                silver: profile.silver,
                displayname: profile.displayname,
                link: profile.link
            })
        }
        else {
            Axios.get(`https://api.stackexchange.com/2.2/users/${userid}?order=desc&sort=reputation&site=stackoverflow`).then(resp => {
                console.log("stackoverflow api response =  ", resp);
                if (!resp.data.items) {
                    console.log("WRONG userid ");
                }
                let profile = resp.data.items[0];
                let newstate = {
                    reputation: profile.reputation,
                    bronze: profile.badge_counts.bronze,
                    gold: profile.badge_counts.gold,
                    silver: profile.badge_counts.silver,
                    displayname: profile.display_name,
                    link: profile.link
                }

                store.set(storeKey, newstate, expireTime);

                this.setState(newstate);

            }).catch(err => {
                console.log(err);
            })


            Axios.get(`https://api.stackexchange.com/2.2/users/${userid}/questions?order=desc&sort=activity&site=stackoverflow&filter=total`).then(resp => {
                this.setState({
                    questions: resp.data.total
                });
                store.set('stackoverflow-questions', resp.data.total, expireTime);
                this.setState({ questions: resp.data.total })
            }).catch(err => console.log(err));


            Axios.get(`https://api.stackexchange.com/2.2/users/${userid}/answers?order=desc&sort=activity&site=stackoverflow&filter=total`).then(resp => {
                this.setState({
                    answers: resp.data.total
                });

                store.set('stackoverflow-answers', resp.data.total, expireTime);
                this.setState({ answers: resp.data.total })
            }).catch(err => console.log(err));
        }
    }

    render() {
        const flatButtonStyle = { backgroundColor: 'rgba(230,230,230,0.8)', borderRadius: '0', height: '100%' };
        const { displayname, questions, answers, link, reputation, bronze, gold, silver } = { ...this.state }
        let { tooltip } = { ...this.props }
        tooltip = tooltip || 'Visit Profile'
        console.log("PROPS , state = ", this.state, this.props);

        return <>

            <Grid container>
                <Grid className="Paper">
                    <Tooltip title="StackOverflow" >
                        <Button variant="text" style={flatButtonStyle}><StackOverflowSVG /></Button>
                    </Tooltip>

                    <Tooltip title={tooltip}>
                        <a target="_blank" href={link} style={{ padding: '10px' }}>{displayname}</a>
                    </Tooltip>


                    <Tooltip title="Gold badges">
                        <Button variant="text" style={flatButtonStyle}> <i className="fa fa-star" ></i> <b>{reputation}</b></Button>
                    </Tooltip>



                    <Tooltip title="Gold badges">
                        <Button variant="text" style={flatButtonStyle}> <i className="fa fa-trophy" style={{ color: 'gold' }}></i> <b>{gold}</b></Button>
                    </Tooltip>

                    <Tooltip title="Silver badges">
                        <Button variant="text" style={flatButtonStyle}> <i className="fa fa-trophy" style={{ color: 'silver' }}></i> <b>{silver}</b></Button>
                    </Tooltip>

                    <Tooltip title="Bronze badges">
                        <Button variant="text" style={flatButtonStyle}> <i className="fa fa-trophy" style={{ color: '#cd7f32' }}></i> <b>{bronze}</b></Button>
                    </Tooltip>

                    <Tooltip title={questions + " questions"}>
                        <Button variant="text" style={flatButtonStyle}> <i className="fa fa-question-circle"></i> <b>{questions}</b></Button>
                    </Tooltip>

                    <Tooltip title={answers + ' answers'}>
                        <Button variant="text" style={flatButtonStyle}> <i className="fa fa-stack-overflow" style={{ color: 'darkgreen' }}></i> <b>{answers}</b></Button>
                    </Tooltip>
                </Grid>
            </Grid>
        </>
    }
}

StackOverflowBar.propTypes = {
    userid: PropTypes.string.isRequired,
    tooltip: PropTypes.string,
}

export default StackOverflowBar; 