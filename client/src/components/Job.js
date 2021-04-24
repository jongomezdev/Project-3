import React from 'react';
import { Card, Badge, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

export default function Job({ job }) {
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge varient="secondary" className="mr-2">{job.type}</Badge>
                        <Badge varient="secondary" className="mr-2">{job.location}</Badge>
                        <div style={{ wordBreak: "break-all"}}>
                            <ReactMarkdown children={job.how_to_apply} />
                        </div>
                    </div>
                    <div>
                       <img className="d-sm-none d-md-block" height="50" alt={job.company} src={job.company_logo} />
                    </div>
                </div>
                <Card.Text>
                    <Button varient="primary">View Details</Button>
                </Card.Text>
            </Card.Body>
            
        </Card>
    )
}
