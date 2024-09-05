import React, { useState } from 'react';
import { phone } from '../assets';
import { AppText } from '../Constants';
import SectionHeading from '../Shared/SectionHeading';
import Lottie from 'lottie-react';
import ContactLottie from '../assets/contact.json'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
function ContactUs() {

  const[name,setname]=useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const notify = () => toast.success("Thank you for reaching out. I’ll respond to you shortly.");

  const notifyerror = () => toast.error("There was an issue with the submission.");

  const FillData=()=> toast.error("Please fill all the fields")


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleNameChange=(e)=>{
    setname(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

const serviceId=process.env.REACT_APP_serviceId;
const templateId=process.env.REACT_APP_templateId;
const publicKey=process.env.REACT_APP_publicKey;
const templateParams={
  from_name:name,
  from_email:email,
  to_name:'Mosin',
  message:message
}

    if(email=="" || message=="" || name=="")
    {
      FillData();
      return;
    }
    try {
      await emailjs.send(serviceId,templateId,templateParams,publicKey);
      notify();
      setname('');
      setEmail('');
      setMessage('');  
    } catch (error) {
      notifyerror();
      console.log(error.message) 
    }

  };

  return (
    <div id="contact" className='flex flex-col justify-center mt-5'>
      <div className='flex flex-row justify-center'>
        <SectionHeading firstTitle={AppText.Contact} secondTitle={AppText.Us} />
        <img src={phone} className="w-[80px] ml-4" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44'>
              <Lottie loop={true} animationData={ContactLottie} className="w-[300px] mr-10"/>
        <div className='w-full'>
          <div className='flex flex-col'>
          <label className='text-gray-400'>Name</label>
            <input
              type="text"
              placeholder='Enter Your Name'
              className='border-[1.5px] px-2 border-[#5ADBFF] hover:border-[#5ADBFF] rounded-md'
              value={name}
              onChange={handleNameChange}
              required='Please enter your Name' maxLength="30"
            />
            <label className='text-gray-400'>Email</label>
            <input
              type="text"
              placeholder='yourname@gmail.com'
              className='border-[1.5px] px-2 border-[#5ADBFF] hover:border-[#5ADBFF] rounded-md'
              value={email}
              onChange={handleEmailChange}
              required='Please enter your email' maxLength="30"
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-gray-400'>Message</label>
            <textarea
              rows={7}
              placeholder='Type your message here'
              className='border-[1.5px] px-2 hover:border-[#094074] border-[#5ADBFF] rounded-md'
              value={message}
              onChange={handleMessageChange} required='Please enter the Message'
              maxLength="100"
            />
            <button
              className='transition-all ease-in-out hover:scale-110 bg-[#094074] flex flex-row items-center justify-center text-[14px] py-1 mt-5 text-white rounded-md'
              onClick={handleSubmit}>Submit
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
            <ToastContainer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
