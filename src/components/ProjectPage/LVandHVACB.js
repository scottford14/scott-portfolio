import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import render from './../../img/bcm/BCM Render.png';


export class LVandHVACB extends Component {
    render() {
        return (
            <ProjectPage
            title="HV and LV Accumulator Control Board"
            images={[
                {image: render,
                description:"Altium rendering of the PCB after completing the layout"}]}
            description=""
            />
        )
    }
}

export default LVandHVACB
