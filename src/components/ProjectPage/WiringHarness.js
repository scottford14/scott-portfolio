import React, { Component } from 'react'

import ProjectPage from './ProjectPage';

import tablepic from './../../img/Wiring Harness/Wiring Harness.jpg';
import connections from './../../img/Wiring Harness/connections.png';
import inverterback from './../../img/Wiring Harness/Inverter Wiring Back.jpg';
import dash from './../../img/Wiring Harness/Dashboard.jpg';

export class WiringHarness extends Component {
    render() {
        return (
            <ProjectPage
            title="Low Voltage and High Voltage Vehicle Wiring"
            images={[
                {image:tablepic,
                description:"Image of the wiring harness laid out prior to wiring up inside of vehicle"},
                {image:connections,
                description:"Schematic illustrating all the connections made on the vehicle wiring harness, originating at the Body Control Module"},
                {image:inverterback,
                description:"Showing the HV wiring connections from rear motors to inverters, and some of the low voltage wiring associated with the motor controllers"},
                {image:dash,
                description:"Drivers view of the dashboard, with fault status lights and shutdown button on the left, low voltage battery indicator and start button on the right, and 6 steering wheel mounted buttons"}]}
            description="The wiring within the vehicle required extensive design, given the large number of low voltage connections needed to implement all of the required circuitry for vehicle safety, vehicle controls, cooling, CAN Communication, driver cockpit buttons and warning lights, power delivery, and more. Extensive high voltage connections were needed to, supplying power to all 4 wheel mounted 3 phase motors, high voltage measuring points, and tractive system discharge circuitry."
            />
        )
    }
}

export default WiringHarness
