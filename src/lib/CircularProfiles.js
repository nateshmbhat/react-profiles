import React from 'react';
import { InstagramSVG, YoutubeSVG, FacebookSVG, GooglePlusSVG, TwitchSVG, SkypeSVG, YahooSVG, TwitterSVG } from './svg/svgs';
import { Tooltip } from '@material-ui/core';


const StyledIcon = ({ children, link, tooltip }) => {
    return (

        <Tooltip title={tooltip}>
            <a href={link}>
                {children}
            </a>
        </Tooltip >
    );
}

const Instagram = ({ link, tooltip }) => {
    return (
        <StyledIcon {...{ link, tooltip }}>
            <div className="UnitIconReactProfile inline">
                <InstagramSVG width="50px" height="50px" />
            </div>
        </StyledIcon >
    );
}

const Youtube= ({ link, tooltip }) => {
    return (
        <StyledIcon {...{ link, tooltip }}>
            <div className="UnitIconReactProfile inline">
                <YoutubeSVG width="50px" height="50px" />
            </div>
        </StyledIcon >
    );
}

const Facebook = ({ link, tooltip }) => {
    return (
        <StyledIcon {...{ link, tooltip }}>
            <div className="UnitIconReactProfile inline">
                <FacebookSVG width="50px" height="50px" />
            </div>
        </StyledIcon >
    );
}

const GooglePlus = ({ link, tooltip }) => {
    return (
        <StyledIcon {...{ link, tooltip }}>
            <div className="UnitIconReactProfile inline">
                <GooglePlusSVG width="50px" height="50px" />
            </div>
        </StyledIcon >
    );
}

const Twitch = ({ link, tooltip }) => {
    return (
        <StyledIcon {...{ link, tooltip }}>
            <div className="UnitIconReactProfile inline">
                <TwitchSVG width="50px" height="50px" />
            </div>
        </StyledIcon >
    );
}



const Skype = ({ link, tooltip }) => {
    return (
        <StyledIcon {...{ link, tooltip }}>
            <div className="UnitIconReactProfile inline">
                <SkypeSVG width="50px" height="50px" />
            </div>
        </StyledIcon >
    );
}


const Yahoo= ({ link, tooltip }) => {
    return (
        <StyledIcon {...{ link, tooltip }}>
            <div className="UnitIconReactProfile inline">
                <YahooSVG width="50px" height="50px" />
            </div>
        </StyledIcon >
    );
}


const Twitter= ({ link, tooltip }) => {
    return (
        <StyledIcon {...{ link, tooltip }}>
            <div className="UnitIconReactProfile inline">
                <TwitterSVG width="50px" height="50px" />
            </div>
        </StyledIcon >
    );
}




export {Yahoo,Skype, Twitch ,Facebook , GooglePlus , Instagram , Youtube , Twitter};