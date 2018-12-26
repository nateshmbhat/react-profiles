import React, { Component } from 'react'
import { Grid, Paper, Tooltip, Button } from '@material-ui/core';
import { HackerrankSVG, RankSVG } from './svg/svgs';
import PropTypes from 'prop-types';


class MyToolTip extends Component {
    render() {
        const { tooltip, num } = { ...this.props };

        const getToolTip = (tooltip, num) => {
            if (typeof (tooltip) === 'string' && num === 0) return tooltip;
            if (typeof (tooltip) === 'string' && num > 0) return null;
            if (typeof (tooltip) === 'object' && num < tooltip.length) return tooltip[num];
            return null;
        }

        return (
            <Tooltip title={getToolTip(tooltip, num)} >
                {this.props.children}
            </Tooltip>
        );
    }
}



class HackerRank extends Component {
    render() {

        let { tooltip, contestRating, competitions, username, rank, category, bronze, silver, gold, barHeight = "50px" } = { ...this.props }

        tooltip = tooltip || 'Visit Profile';
        const flatButtonStyle = { backgroundColor: 'rgba(230,230,230,0.8)', borderRadius: '0', height: '100%' };

        return <>
            <Grid container>
                <Paper style={{ 'padding': '0px', margin: '0', height: barHeight }}>
                    <Tooltip title="Hackerrank" >
                        <Button variant="text" style={flatButtonStyle}><HackerrankSVG fill="darkgreen" /></Button>
                    </Tooltip>
                    <Tooltip title={tooltip}>
                        <a target="_blank" href={`https://www.hackerrank.com/profile/${username}`} style={{ padding: '10px' }}>{username}</a>
                    </Tooltip>

                    {
                        category &&
                        <Tooltip title={`Category : ${category}`}>
                            <Button variant="text" style={{ ...flatButtonStyle, textTransform: 'none' }}><b>{category}</b> </Button>
                        </Tooltip>
                    }

                    {
                        rank &&
                        <Tooltip title={`Rank : ${rank}`}>
                            <Button variant="text" style={flatButtonStyle}> <RankSVG /> <b>{rank}</b></Button>
                        </Tooltip>
                    }

                    {
                        contestRating &&
                        <Tooltip title={`Contest Rating : ${contestRating}`}>
                            <Button variant="text" style={flatButtonStyle}> <i className="fa fa-star"><b>{contestRating}</b></i></Button>
                        </Tooltip>
                    }
                    {
                        competitions &&
                        <Tooltip title={`Competitions : ${competitions}`}>
                            <Button variant="text" style={flatButtonStyle}> <i className="fa fa-circle"><b>{competitions}</b></i></Button>
                        </Tooltip>
                    }


                    {gold &&

                        <Tooltip title="Gold badges">
                            <Button variant="text" style={flatButtonStyle}> <i className="fa fa-trophy" style={{ color: 'gold' }}></i> <b>{gold}</b></Button>
                        </Tooltip>


                    }

                    {silver &&
                        <Tooltip title="Silver badges">
                            <Button variant="text" style={flatButtonStyle}> <i className="fa fa-trophy" style={{ color: 'silver' }}></i> <b>{silver}</b></Button>
                        </Tooltip>

                    }

                    {
                        bronze &&
                        <Tooltip title="Bronze badges">
                            <Button variant="text" style={flatButtonStyle}> <i className="fa fa-trophy" style={{ color: '#cd7f32' }}></i> <b>{bronze}</b></Button>
                        </Tooltip>
                    }

                </Paper>
            </Grid>
        </>
    }
}

HackerRank.propTypes = {
    username: PropTypes.string.isRequired,
    tooltip: PropTypes.string,
    category: PropTypes.string,
    rank: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    gold: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    silver: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bronze: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    contestRating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    percentile: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    competitions: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default HackerRank; 