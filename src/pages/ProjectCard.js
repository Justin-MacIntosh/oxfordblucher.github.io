import React from 'react';
import Card from 'react-bootstrap/Card';

const ProjectCard = ({
    projectScreenshot,
    projectScreenshotAlt,
    projectTitle,
    projectSummary,
    projectContribution,
    projectDeploymentLink,
    projectCodeLink
}) => {
    return (
        <Card className='col-lg-6 col-lg-offset-1'>
            <Card.Img src={ projectScreenshot } alt={ projectScreenshotAlt }/>
            <Card.ImgOverlay>
                <Card.Title><b>{ projectTitle }</b></Card.Title>
                <hr style={{borderColor: '#E0E0E0'}}/>
                <Card.Text>
                    <p className='app-summary'>{ projectSummary }</p>
                    <p className='app-contrib'>{ projectContribution }</p>
                </Card.Text>
                <Card.Link href={ projectDeploymentLink }>Deployed Project</Card.Link>
                <Card.Link href={ projectCodeLink }>Source Code</Card.Link>
            </Card.ImgOverlay>
        </Card>
    )
}

export default ProjectCard;