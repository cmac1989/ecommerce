import {FloatingLabel, Form} from "react-bootstrap";
import './contactForm.css';
import Button from "react-bootstrap/Button";

export default function ContactForm(){
    return(
        <Form className="contact-form">
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px', margin: '15px 0' }}
                />
            </FloatingLabel>
            <Button variant="secondary" type="submit">Submit</Button>
        </Form>
    )
}