import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const Login = () => {
    return (
        <Form >
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Log in
            </Button>
        </Form>
    ) 
}

export default Login