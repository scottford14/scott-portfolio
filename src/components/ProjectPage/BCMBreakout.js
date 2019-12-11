import React, { Component } from 'react'

import ProjectPage from './ProjectPage';

import mainpic from './../../img/BCMBreakout/BCM Breakout Board.jpg';

export class BCMBreakout extends Component {
    render() {
        return (
            <ProjectPage
            title="Body Control Module Breakout Board"
            images={[
                {image:mainpic,
                description:""}]}
            description=""
            />
        )
    }
}

export default BCMBreakout
