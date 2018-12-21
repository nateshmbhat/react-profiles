import React, { Component } from 'react';
import { Grid, Button, Paper, Tooltip } from '@material-ui/core';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { StarBorder  } from '@material-ui/icons'
import store from 'store';
const expirePlugin = require('store/plugins/expire');

store.addPlugin(expirePlugin)

const styles = '.st0{fill:#222426}.st1{fill:#bcbbbb}.st2{fill:#f48024}';

class StackSVG extends React.Component {
    render() {
        return <div>
            <svg width="150px" height="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480.5 117.9">
                <style>{styles}`</style>
                <path className="st0" d="M123.7 67.3l-4.8-.4c-3.7-.3-5.2-1.8-5.2-4.3 0-3 2.3-4.9 6.6-4.9 3.1 0 5.8.7 7.9 2.4l2.8-2.8c-2.7-2.2-6.4-3.2-10.7-3.2-6.3 0-10.9 3.3-10.9 8.7 0 4.9 3.1 7.5 8.9 8l4.9.4c3.4.3 4.9 1.7 4.9 4.3 0 3.5-3 5.2-7.9 5.2-3.7 0-6.9-1-9.2-3.4l-2.9 2.9c3.3 3.1 7.2 4.3 12.2 4.3 7.2 0 12.1-3.3 12.1-9 .1-5.8-3.5-7.7-8.7-8.2zm37.2-13.4c-4.8 0-7.8.9-10.4 4.3l2.8 2.8c1.7-2.5 3.7-3.4 7.5-3.4 5.4 0 7.6 2.2 7.6 6.5V67h-8.9c-6.6 0-10.2 3.4-10.2 8.6 0 2.4.8 4.6 2.2 6 1.9 1.9 4.3 2.7 8.4 2.7 4 0 6.1-.8 8.6-3.2V84h4.3V63.8c-.1-6.4-4-9.9-11.9-9.9zm7.5 19.6c0 2.5-.5 4.2-1.5 5.1-1.9 1.8-4.1 2-6.6 2-4.7 0-6.8-1.6-6.8-5.1 0-3.4 2.2-5.2 6.6-5.2h8.3v3.2zm21.3-15.7c2.8 0 4.6.8 6.8 3.3l2.9-2.8c-3-3.3-5.6-4.3-9.7-4.3-7.5 0-13.1 5.1-13.1 15.2s5.7 15.2 13.1 15.2c4.1 0 6.7-1.1 9.8-4.4l-3-2.8c-2.2 2.5-4 3.4-6.8 3.4-2.9 0-5.3-1.1-6.9-3.4-1.4-1.9-1.9-4.2-1.9-8 0-3.7.5-6 1.9-8 1.6-2.3 4-3.4 6.9-3.4zm37.2-3.5h-5.4L208 67.4V41.1h-4.3V84h4.3V73.2l5.3-5.3 9.9 16.1h5.4l-12.3-19.1 10.6-10.6zm20.4-1.6c-4.6 0-7.6 1.8-9.5 3.8-2.8 2.9-3.5 6.4-3.5 12s.7 9.1 3.5 12c1.9 2 5 3.8 9.5 3.8 4.6 0 7.7-1.8 9.6-3.8 2.8-2.9 3.5-6.4 3.5-12s-.7-9.1-3.5-12c-1.9-2-5.1-3.8-9.6-3.8zm3.6 23.3c-.9.9-2.1 1.4-3.6 1.4s-2.7-.5-3.6-1.4c-1.6-1.6-1.8-4.3-1.8-7.5s.2-5.9 1.8-7.5c.9-.9 2-1.4 3.6-1.4 1.5 0 2.7.5 3.6 1.4 1.6 1.6 1.8 4.3 1.8 7.5s-.2 5.9-1.8 7.5zm30-22.9l-6.2 19.1-6.3-19.1h-8.1L271.7 84h6L289 53.1h-8.1zm21.3-.4c-8 0-13.5 5.7-13.5 15.8 0 12.5 7 15.8 14.3 15.8 5.6 0 8.6-1.7 11.7-4.9l-4.7-4.6c-2 2-3.6 2.9-7 2.9-4.3 0-6.8-2.9-6.8-6.9h19.3v-3.4c.1-8.4-4.8-14.7-13.3-14.7zm-5.9 12.9c.1-1.4.2-2.2.7-3.3.8-1.8 2.5-3.2 5.2-3.2 2.6 0 4.3 1.4 5.2 3.2.5 1.1.7 2 .7 3.3h-11.8zM327 56v-3h-7.5v31h7.7V65.4c0-3.9 2.6-5.7 5-5.7 1.9 0 2.9.6 4.1 1.8l5.8-5.8c-2.1-2.1-4.3-2.9-7.3-2.9-3.4-.1-6.3 1.5-7.8 3.2zm17.4-6.1V84h7.7V59.6h5.7v-5.9h-5.7v-3.4c0-1.8.9-2.8 2.7-2.8h3V41h-4.4c-6.2 0-9 4.5-9 8.9zm45.2 2.8c-4.6 0-7.6 1.8-9.5 3.8-2.8 2.9-3.5 6.4-3.5 12s.7 9.1 3.5 12c1.9 2 5 3.8 9.5 3.8 4.6 0 7.7-1.8 9.6-3.8 2.8-2.9 3.5-6.4 3.5-12s-.7-9.1-3.5-12c-1.9-2-5.1-3.8-9.6-3.8zm3.6 23.3c-.9.9-2.1 1.4-3.6 1.4s-2.7-.5-3.6-1.4c-1.6-1.6-1.8-4.3-1.8-7.5s.2-5.9 1.8-7.5c.9-.9 2-1.4 3.6-1.4 1.5 0 2.7.5 3.6 1.4 1.6 1.6 1.8 4.3 1.8 7.5s-.2 5.9-1.8 7.5zm45.9-22.9l-5 19.1-6.3-19.1h-5.6l-6.3 19.1-5-19.1h-8.2l9.5 30.9h6.3l6.5-19.4 6.5 19.4h6.3l9.4-30.9h-8.1zm-69.9 21.6V41h-7.7v34.1c0 4.4 2.7 8.8 9 8.8h4.4v-6.5h-3c-1.9 0-2.7-.9-2.7-2.7zM144.5 59l4-4h-8.2v-9.8H136V76c0 4.4 2.5 8 7.6 8h3.1v-3.7h-2.3c-2.8 0-4-1.6-4-4.3V59h4.1z"/>
        <path className="st1" d="M87.6 91.3v-22H95v29.3H29.1V69.3h7.3v22z"/>
        <path className="st2" d="M44.5 67.3l35.9 7.5 1.5-7.2L46 60.1l-1.5 7.2zm4.7-17.2l33.2 15.5 3.1-6.6-33.2-15.6-3.1 6.7zm9.2-16.3l28.2 23.4 4.7-5.6-28.2-23.4-4.7 5.6zm18.2-17.3l-5.9 4.4 21.9 29.4 5.9-4.4-21.9-29.4zM43.7 83.9h36.6v-7.3H43.7v7.3z"/>
    </svg>
             
        </div>;
    }
}


class StackOverflowBar extends Component {

    state = {
        reputation: 0,
        questions : store.get('stackoverflow-questions',0)  , 
        answers : store.get('stackoverflow-answers' , 0) ,
    }

    componentDidMount() {
        let { userid } = { ...this.props }

        store.removeExpiredKeys();

        let storeKey = 'stackoverflow-profile-bar';
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

                store.set(storeKey, newstate, new Date().getTime() + (3600 * 1000));

                this.setState(newstate);

            }).catch(err => {
                console.log(err);
            })


            Axios.get(`https://api.stackexchange.com/2.2/users/${userid}/questions?order=desc&sort=activity&site=stackoverflow&filter=total`).then(resp => {
                this.setState({
                 questions :  resp.data.total
                });
                store.set('stackoverflow-questions' , resp.data.total) ;
                this.setState({questions : resp.data.total})
        }).catch(err=>console.log(err)) ; 


            Axios.get(`https://api.stackexchange.com/2.2/users/${userid}/answers?order=desc&sort=activity&site=stackoverflow&filter=total`).then(resp => {
                this.setState({
                 answers:  resp.data.total
                });

                store.set('stackoverflow-answers' , resp.data.total) ;
                this.setState({answers: resp.data.total})
        }).catch(err=>console.log(err)) ; 
        }

    }

    render() {
        const flatButtonStyle = { backgroundColor: 'rgba(230,230,230,0.8)', borderRadius: '0', height: '100%' };
        const { displayname , questions , answers, link, reputation, bronze, gold, silver } = { ...this.state }
        let { tooltip, userid } = { ...this.props }
        tooltip = tooltip || 'visit site'
        console.log("PROPS , state = ", this.state, this.props);

        const getPad = (val) => { return { 'padding': val } };
        return <>

            <Grid container>
                <Paper style={{ 'padding': '0px', margin: '0', height: '50px' }}>
                    <Button variant="text" style={flatButtonStyle}><StackSVG /></Button>

                    <Tooltip title={tooltip}>
                        <a target="_blank" href={link} style={{ padding: '10px' }}>{displayname}</a>
                    </Tooltip>

                    <Tooltip title="Reputation Points">
                        <Button variant="text" style={flatButtonStyle}> <StarBorder style={getPad('2px')} />
                         <b>{reputation}</b></Button>
                    </Tooltip>


                    <Tooltip title="Gold badges">
                        <Button variant="text" style={flatButtonStyle}> <i className="fa fa-trophy" style={{color:'gold'}}></i> <b>{gold}</b></Button>
                    </Tooltip>
                    
                    <Tooltip title="Silver badges">
                        <Button variant="text" style={flatButtonStyle}> <i className="fa fa-trophy" style={{color:'silver'}}></i> <b>{silver}</b></Button>
                    </Tooltip>
 
                    <Tooltip title="Bronze badges">
                        <Button variant="text" style={flatButtonStyle}> <i className="fa fa-trophy" style={{color:'#cd7f32'}}></i> <b>{bronze}</b></Button>
                    </Tooltip>

                    <Tooltip title={questions+" questions"}>
                        <Button variant="text" style={flatButtonStyle}> <i className="fa fa-question-circle"></i> <b>{questions}</b></Button>
                    </Tooltip>

                    <Tooltip title={answers+' answers'}>
                        <Button variant="text" style={flatButtonStyle}> <i className="fa fa-stack-overflow" style={{color:'darkgreen'}}></i> <b>{answers}</b></Button>
                    </Tooltip>
                </Paper>
            </Grid>
        </>
    }
}

StackOverflowBar.propTypes = {
    userid: PropTypes.string.isRequired,
    tooltip: PropTypes.string,
}

export default StackOverflowBar; 