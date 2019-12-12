import React, { Component } from 'react'

import ProjectPage from './ProjectPage';

import render from './../../img/HV Control Board/HV Control Board Render Black.PNG';

export class HVControlBoard extends Component {
    render() {
        return (
            <ProjectPage
            title="HV Control Board"
            images={[
                {image: render,
                description:"Altium rendering of the PCB after completing the layout"}]}
            description=""
            />
        )
    }
}

export default HVControlBoard
