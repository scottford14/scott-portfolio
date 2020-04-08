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
                description:"Close up render of the HV Accumulator Control Board. Render done by Jared Cox - Mechanical Team Captain"},
                {image: hvrender,
                description:"Altium rendering of the HV Accumulator Control Board PCB after completing the layout"},
                {image: lvrender,
                description:"Altium rendering of the LV Accumulator Control Board PCB after completing the layout"},
                {image: close,
                description:"Close up render of the LV Accumulator Control Board, in the accumulator PCB plate assembly."},
                {image: iso,
                description:"Render of the accumulator PCB plate assembly, including the LV and HV Accumulator Control Boards."},
                {image: top,
                description:"Render of the accumulator PCB plate assembly, including the LV and HV Accumulator Control Boards."},
                {image: front,
                description:"Render of the accumulator PCB plate assembly, including the LV and HV Accumulator Control Boards."}]}
            description=""
            />
        )
    }
}

export default LVandHVACB
