import React from 'react';
import { InstagramSVG, YoutubeSVG, FacebookSVG, GooglePlusSVG, TwitchSVG, SkypeSVG, YahooSVG, TwitterSVG } from './svg/svgs';
import { Tooltip } from '@material-ui/core';


const StyledIcon = ({ children, link, tooltip  , newPage}) => {
    return (

        <Tooltip title={tooltip}>
            <a href={link} target={newPage?"_blank": ""}>
                {children}
            </a>
        </Tooltip >
    );
}

const Instagram = ({ link = '#', tooltip="Instagram" , newPage = true }) => {
    return (
        <StyledIcon {...{ link, tooltip , newPage }}>
            <div className="UnitIconReactProfile inline">
                <InstagramSVG width="50px" height="50px" />
            </div>
        </StyledIcon >
    );
}

const Youtube= ({ link = '#', tooltip="Youtube" , newPage = true }) => {
    return (
        <StyledIcon {...{ link, tooltip , newPage }}>
            <div className="UnitIconReactProfile inline">
                <YoutubeSVG width="50px" height="50px" />
            </div>
        </StyledIcon >
    );
}

const Facebook = ({ link = '#', tooltip = "Facebook" , newPage = true }) => {
    return (
        <StyledIcon {...{ link, tooltip , newPage }}>
            <div className="UnitIconReactProfile inline">
                <FacebookSVG width="50px" height="50px" />
            </div>
        </StyledIcon >
    );
}

const GooglePlus = ({ link = '#', tooltip="Google Plus" , newPage = true }) => {
    return (
        <StyledIcon {...{ link, tooltip , newPage }}>
            <div className="UnitIconReactProfile inline">
                <GooglePlusSVG width="50px" height="50px" />
            </div>
        </StyledIcon >
    );
}

const Twitch = ({ link = '#', tooltip="Twitch" , newPage = true }) => {
    return (
        <StyledIcon {...{ link, tooltip , newPage }}>
            <div className="UnitIconReactProfile inline">
                <TwitchSVG width="50px" height="50px" />
            </div>
        </StyledIcon >
    );
}



const Skype = ({ link = '#', tooltip = "Skype" , newPage = true }) => {
    return (
        <StyledIcon {...{ link, tooltip , newPage }}>
            <div className="UnitIconReactProfile inline">
                <SkypeSVG width="50px" height="50px" />
            </div>
        </StyledIcon >
    );
}


const Yahoo= ({ link = '#', tooltip="Yahoo" , newPage = true }) => {
    return (
        <StyledIcon {...{ link, tooltip , newPage }}>
            <div className="UnitIconReactProfile inline">
                <YahooSVG width="50px" height="50px" />
            </div>
        </StyledIcon >
    );
}


const Twitter= ({ link = '#', tooltip = "Twitter" , newPage = true }) => {
    return (
        <StyledIcon {...{ link, tooltip , newPage }}>
            <div className="UnitIconReactProfile inline">
                <TwitterSVG width="50px" height="50px" />
            </div>
        </StyledIcon >
    );
}




export {Yahoo,Skype, Twitch ,Facebook , GooglePlus , Instagram , Youtube , Twitter}