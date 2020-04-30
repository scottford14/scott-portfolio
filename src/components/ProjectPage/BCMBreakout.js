import React, { Component } from 'react'

import ProjectPage from './ProjectPage';

import render from './../../img/BCM Breakout/BCM Breakout Board.jpg';
import schematic from './../../img/BCM Breakout/BCM Breakout Schematic.PNG';
import blank from './../../img/BCM Breakout/BCM Breakout 1.jpg';
import assembled from './../../img/BCM Breakout/BCM Breakout Assembled Side.jpg';
import swrender from './../../img/BCM Breakout/SW Render.png';

export class BCMBreakout extends Component {
    render() {
        return (
            <ProjectPage
            title="Body Control Module Breakout Board"
            images={[
                {image:swrender,
                description:"Solidworks rendering of the PCB after completing the layout"},
                {image:render,
                description:"Altium rendering of the PCB after completing the layout"},
                {image:schematic,
                description:"Schematic showing the connections of the circuitry on the board"},
                {image:blank,
                description:"Board after arriving from PCB vendor, ready for assembly"},
                {image:assembled,
                description:"Board after completing the soldering of all components to the PCB"}]}
            description="The Body Control Module Breakout Board was designed after I completed the Body Control Module itself to address the issue of testing. Once the wiring harness for the vehicle was installed, there was no simple way to test the circuits on the board, so a breakout board was needed so bench testing was possible. This board has connectors that interface with a custom wiring harness to the BCM so that the board can be powered outside of the car (power inputs and fuses located on the breakout board) and all signals can be tapped off the wiring harness. This allows for easy troubleshooting and is a great way to teach new members about the BCM without risking potential damage to anything within the vehicle."
            />
        )
    }
}

export default BCMBreakout
