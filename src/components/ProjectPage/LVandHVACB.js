import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import upclose from './../../img/lvandhvacb/so-close.JPG';
import hvrender from './../../img/lvandhvacb/HV ACB Render.PNG';
import lvrender from './../../img/lvandhvacb/LV ACB Render.PNG';
import close from './../../img/lvandhvacb/close.JPG';
import iso from './../../img/lvandhvacb/iso.JPG';
import top from './../../img/lvandhvacb/top.JPG';
import front from './../../img/lvandhvacb/front.JPG';


export class LVandHVACB extends Component {
    render() {
        return (
            <ProjectPage
            title="LV and HV Accumulator Control Board"
            images={[
                {image: upclose,
                description:"Altium rendering of the PCB after completing the layout"},
                {image: hvrender,
                description:""},
                {image: lvrender,
                description:""},
                {image: close,
                description:""},
                {image: iso,
                description:""},
                {image: top,
                description:""},
                {image: front,
                description:""}]}
            description=""
            />
        )
    }
}

export default LVandHVACB
