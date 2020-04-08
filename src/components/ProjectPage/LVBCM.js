import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import render from './../../img/lvbcm/LV BCM Render.PNG';
import drawing from './../../img/lvbcm/LV BCM in drawing.PNG';
import top from './../../img/lvbcm/LV BCM top.jpg';
import side from  './../../img/lvbcm/LV BCM side.jpg';

export class LVBCM extends Component {
    render() {
        return (
            <ProjectPage
            title="Body Control Module Rev. 2 - 2019/2020 Season"
            images={[
                {image: render,
                description:"Altium rendering of the PCB after I completed the layout"},
                {image: drawing,
                description:"Board location shown in full vehicle assembly, see red highlight. Drawing done by Jared Cox - Mechanical Team Captain"},
                {image: top,
                description:"Board after completing the soldering of all components to the PCB"},
                {image: side,
                description:"Board after completing the soldering of all components to the PCB"}]}
            description="For the 2020 car, there were 3 main design goals for the updated Body Control Module. The first was to improve the efficiency of the circuits, reducing LV power draw. The second was to improve packaging, reducing board area and better fitting the board within the carbon monocoque. The last goal was to add sensors for improved torque vectoring of the 4 outboard motors. The first goal was achieved through two main circuit changes, the first being replacing the linear voltage regulators with switching regulators. This greatly reduced the power lost to heat inside of the enclosure, using switching regulators that are over 90% efficient. The second circuit change to improve efficiency was using ultra low RDSon MOSFETs for the PWM control of the cooling loop fans and pumps. These devices draw a total of 20A at 12V, so a reduction in RDSon yields a linear reduction in power dissipated in the MOSFETs. As for the second goal, I modified the aspect ratio of the board to be much more rectangular, in order to fit the board inside of the dashboard hump in the vehicle’s chassis (see photo #2 for packaging). This allowed for more room for the driver’s legs, as well as simpler cable routing. The final goal to improve torque vectoring was achieved by adding both a 3-axis accelerometer and GPS to the board, in order to have more data for the high level vehicle controller to perform more sophisticated toque vectoring algorithms, combined with vehicle speed sensors and a steering angle sensor. Other changes to the board included the removal of all HV circuitry, which was moved to a separate board located in the back of the chassis much closer to the HV battery pack, for easier cable routing and packaging. "
            />
        )
    }
}

export default LVBCM
