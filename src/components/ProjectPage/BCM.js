import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import mainpic from './../../img/bcm/BCM Render.png';

export class BCM extends Component {
    render() {
        return (
            <ProjectPage
            title="Body Control Module"
            images={[
                {image: mainpic,
                description:""}]}
            description=""
            />
        )
    }
}

export default BCM
