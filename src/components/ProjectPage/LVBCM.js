import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import render from './../../img/lvbcm/LV BCM Render.PNG';
import drawing from './../../img/lvbcm/LV BCM in drawing.PNG';

export class LVBCM extends Component {
    render() {
        return (
            <ProjectPage
            title="LV Body Control Module"
            images={[
                {image: render,
                description:"Altium rendering of the PCB after completing the layout"},
                {image: drawing,
                description:"Board location shown in full vehicle assembly, see red highlight. Drawing done by Jared Cox - Mechanical Team Captain"}]}
            description=""
            />
        )
    }
}

export default LVBCM
