import React, { Component } from 'react'

import ProjectPage from './ProjectPage';

import tablepic from './../../img/Wiring Harness/Wiring Harness.jpg';
import connections from './../../img/Wiring Harness/connections.png';
import inverterback from './../../img/Wiring Harness/Inverter Wiring Back.jpg';
import dash from './../../img/Wiring Harness/Dashboard.jpg';
import full from './../../img/Wiring Harness/ecad_render.png';
import front from './../../img/Wiring Harness/ecad_render_front.png';

export class WiringHarness extends Component {
    render() {
        return (
            <ProjectPage
            title="Low Voltage and High Voltage Vehicle Wiring"
            images={[
                {image:full,
                description:"eCAD render showing the wiring connections in the car"},
                {image:front,
                description:"eCAD front-view render showing the wiring connections in the car"},
                {image:tablepic,
                description:"Image of the wiring harness laid out prior to wiring up inside of vehicle"},
                {image:connections,
                description:"Schematic illustrating all the connections made on the vehicle wiring harness, originating at the Body Control Module"},
                {image:inverterback,
                description:"Showing the HV wiring connections from rear motors to inverters, and some of the low voltage wiring associated with the motor controllers"},
                {image:dash,
                description:"Drivers view of the dashboard, with fault status lights and shutdown button on the left, low voltage battery indicator and start button on the right, and 6 steering wheel mounted buttons"}]}
            description="The wiring within the vehicle required extensive design, given the large number of low voltage connections needed to implement all of the required circuitry for vehicle safety, vehicle controls, cooling, CAN Communication, driver cockpit buttons and warning lights, power delivery, and more. Extensive high voltage connections were also needed to supply power to all 4 wheel-mounted 3 phase motors, high voltage measuring points, and tractive system discharge circuitry. I designed the LV harness specifically to avoid noise introduced from other systems, ensuring that critical signals, such as CAN lines, and motor encoder cables, were properly shielded. LV signals were also routed as far as possible from the HV motor cables to reduce potential noise pollution as well. All HV cables were also shielded to further reduce EMI. After I completed the design, fellow member (Jared Cox) and I manufactured all the wires necessary, tested the harness for continuity, and installed it into the vehicle. Solidworks eCAD routing and renders done by Jared Cox (Mechanical Captain)."
            />
        )
    }
}

export default WiringHarness
