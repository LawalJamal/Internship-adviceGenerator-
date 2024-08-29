import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
   <div className='d-flex justify-content-center align-items-center min-vh-100'>
     <Spinner animation="border" role="status" variant='warning'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
   </div>
  );
}

export default Loader;