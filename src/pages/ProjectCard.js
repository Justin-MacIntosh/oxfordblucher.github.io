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
        <Card className='col-lg-6'>
            <Card.Img src={ projectScreenshot } alt={ projectScreenshotAlt }/>
            <Card.ImgOverlay>
                <Card.Title>{ projectTitle }</Card.Title>
                <Card.Text>
                    <p className='app-summary'>{ projectSummary }</p>
                    <p className='app-contrib'>{ projectContribution }</p>
                </Card.Text>
                <Card.Link href={ projectDeploymentLink }>Deployed</Card.Link>
                <Card.Link href={ projectCodeLink }>Repo</Card.Link>
            </Card.ImgOverlay>
        </Card>
    )
}

export default ProjectCard;