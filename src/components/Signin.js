import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const Signin = () => {
    return (
        <Form >
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder="Email"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control type='phone' placeholder="Phone"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign in
            </Button>
        </Form>
    ) 
}

export default Signin