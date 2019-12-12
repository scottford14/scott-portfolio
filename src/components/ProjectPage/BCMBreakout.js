import React, { Component } from 'react'

import ProjectPage from './ProjectPage';

import render from './../../img/BCMBreakout/BCM Breakout Board.jpg';
import schematic from './../../img/BCMBreakout/BCM Breakout Schematic.PNG';
import blank from './../../img/BCMBreakout/BCM Breakout 1.jpg';
import assembled from './../../img/BCMBreakout/BCM Breakout Assembled Side.jpg';

export class BCMBreakout extends Component {
    render() {
        return (
            <ProjectPage
            title="Body Control Module Breakout Board"
            images={[
                {image:render,
                description:"Altium rendering of the PCB after completing the layout"},
                {image:schematic,
                description:"Schematic showing the connections of the circuitry on the board"},
                {image:blank,
                description:"Board after arriving from PCB vendor, ready for assembly"},
                {image:assembled,
                description:"Board after completing the soldering of all components to the PCB"}]}
            description="The Body Control Module Breakout Board was designed after the completion of the Body Control Module iteself, to address the issue of testing. Once the wiring harness for the vehicle was installed, there was no simple way to test the circuits on the board, so a breakout board was needed so bench testing was possible. This board has connectors that interface with a custom wiring harness to the BCM, so that the board can be powered outside of the car (power inputs and fuses located on the breakout board) and all signals can be tapped off of the wiring harness. This allows for easy troubleshooting, and also is a great way to teach new members about the BCM without risking potential damage to anything within the vehicle."
            />
        )
    }
}

export default BCMBreakout
