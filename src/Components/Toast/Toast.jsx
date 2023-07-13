import { useState } from 'react'; 
import Modal from 'react-bootstrap/Modal';

function Toast({message}) {
  const [smShow, setSmShow] = useState(true); 

  return (
    <>
     
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
           {message}
          </Modal.Title>
        </Modal.Header> 
      </Modal>
       
    </>
  );
}

export default Toast;