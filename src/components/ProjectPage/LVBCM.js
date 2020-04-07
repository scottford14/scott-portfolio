import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import render from './../../img/lvbcm/LV BCM Render.PNG';


export class LVBCM extends Component {
    render() {
        return (
            <ProjectPage
            title="LV Body Control Module"
            images={[
                {image: render,
                description:"Altium rendering of the PCB after completing the layout"}]}
            description=""
            />
        )
    }
}

export default LVBCM
