import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import render from './../../img/lvbcm/LV BCM Render.PNG';


export class LVandHVACB extends Component {
    render() {
        return (
            <ProjectPage
            title="LV and HV Accumulator Control Board"
            images={[
                {image: render,
                description:"Altium rendering of the PCB after completing the layout"}]}
            description=""
            />
        )
    }
}

export default LVandHVACB
