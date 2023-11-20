import React from "react";
import Form from 'react-bootstrap/Form';


const Contact = () => {
    return (
        <div>
            <h3>Contact Me</h3>
            <Form>
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Name" />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <button type="submit" style={{ backgroundColor: '#646cffaa' }}>Submit</button>
        </div>
    );
}

export default Contact;




// function TextControlsExample() {
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="name@example.com" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//         <Form.Label>Example textarea</Form.Label>
//         <Form.Control as="textarea" rows={3} />
//       </Form.Group>
//     </Form>
//   );
// }

// export default TextControlsExample;

