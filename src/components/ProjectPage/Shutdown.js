import React, { Component } from 'react'

import ProjectPage from './ProjectPage';

import vehicleshutdown from './../../img/shutdown/Shutdown Circuit.png'
import chargershutdown from './../../img/shutdown/Charging Shutdown.png'
import testing from './../../img/shutdown/testbench.jpg'

export class Shutdown extends Component {
    render() {
        return (
            <ProjectPage
            title="Shutdown Circuitry"
            images={[
                {image: vehicleshutdown,
                description:"The vehicle shutdown circuit ensures driver safety during operation of the vehicle"},
                {image: chargershutdown,
                description:"The charger shutdown circuit ensures that the charger can be safely disabled in the event of a BMS fault the disconnecting of the HV connection"},
                {image: testing,
                description:"Test setup used to verify components of the shutdown circuit working in operation together"}]}
            description="The shutdown circuit is a critical safety circuit that incorporates various interlocks to deactivate the vehicle's tractive system in case of safety risk or system errors. The circuit I designed directly drives two contactors located in the HV battery pack that can disconnect the tractive system completely, isolating the driver and spectators from potential risks. Some of the circuits that I designed include the Brake System Plausibility Device, which is an analog circuit that checks for hard braking and positive current delivered to the motors, which prevents erroneous acceleration in the case of a stuck accelerator or CAN message corruption. The shutdown circuit would also be triggered if there are any faults with the BMS (Battery Management System), both during charging of the battery pack and driving. Other interlocks include interlock loops on all HV connectors to prevent unwanted HV exposure when disconnecting cables on the vehicle while the tractive system is active. Many other interlocks are present as well, which can be seen in the schematics above."
            />
        )
    }
}

export default Shutdown
