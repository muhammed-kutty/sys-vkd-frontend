import React from "react";
import { FaPhone } from 'react-icons/fa';
import { IoMailOutline, IoLocationOutline } from 'react-icons/io5';

const Contact = () => {
  return (
      <div className="spclcontainer" >

      <div className="row"  >
        <div className="d-flex flex-column  align-items-center ">
          <div className="col-12 mt-5 text-center">
            <h1>GET IN TOUCH</h1>
          </div>
          <div className="col-12 text-center w-75">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              saepe velit obcaecati omnis non impedit cupiditate odit alias sunt
              cum cumque pariatur suscipit consequuntur expedita deserunt
              possimus quibusdam, rem voluptatem!
            </p>
          </div>
        </div>
      </div>

<hr />

      <div className="row mt-5 mb-5 " >
        <div className="d-flex justify-content-center align-items-center " style={{width:'100%'}}>

          <div className=" d-flex    p-5 rounded" >
            <div className=" col-6 border-end  p-5 rounded text-light " style={{width:"40%" , background:" linear-gradient(to right, #47f6ff, #2d9fff)"}}>
              <div className="text-center">
                <h4 className=""><strong>Contact Information </strong></h4>
                <hr />
              </div>
              <div className="text-center mb-4 ">
                <p >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perferendis blanditiis velit, impedit culpa aliquid alias odit
                  ad voluptatum enim nobis?
                </p>
              </div>
              <div className="d-flex  align-items-center w-100 mb-4 mt-5 ">
                <div className='text-center pe-5'>
                 <FaPhone size={25}  style={{ transform: 'rotate(90deg)' }}/>
                  </div>
                <div
                  className="d-flex flex-column justify-content-center align-items-center"
                >
                  <div className="text-center">+00000000</div>
                  <div className="text-center">+00000000</div>
                </div>
              </div>
            <div className="mb-4">
             <IoMailOutline size={25}/> <span className="px-3"> valakkudaunit@gmail.com</span>
            </div>
            <div>
             <IoLocationOutline size={24} /> <span className="px-3">Kunnamangalam ,valakkuda</span>
            </div>
            </div>

            <div className="px-5 bg-light p-5 rounded" style={{width:"60%"}}>
    <form>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
  </div>
  <div className="mb-3">
    <label htmlFor="message" className="form-label">Message</label>
    <textarea className="form-control" id="message" rows={4} placeholder="Your message..." required defaultValue={""} />
  </div>
  <button type="submit" className="btn  w-100" style={{ background:" linear-gradient(to right, #47f6ff, #2d9fff)"}}>Send Message</button>
</form>

              </div>
      </div>

          </div>
        </div>
      </div>

  );
};

export default Contact;
