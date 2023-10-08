import React from 'react'
import faqImage from '../../assets/Questions-amico.svg'


const FAQ = () => {
  return (
    <div className='my-10'>
      <h1 className='text-3xl font-bold m-5'>Ganeral FAQ</h1>
      <div className='flex justify-between lg:items-start items-center lg:flex-row flex-col'>
        <div>
          <h1></h1>
          <img className='w-[50vw]' src={faqImage} alt="" />
        </div>
        <div className="join join-vertical w-full lg:ml-10">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              What services does CorpConvo offer for corporate events?
            </div>
            <div className="collapse-content">
              <p>CorpConvo offers a wide range of services for corporate events, including event planning and coordination, venue selection, catering, audiovisual support, and much more. We tailor our services to meet the unique needs of each client and event.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How can I request a quote for my corporate event?
            </div>
            <div className="collapse-content">
              <p>To request a quote, simply visit our website and fill out the inquiry form on the "Get a Quote" page. Provide us with details about your event, such as the type of event, date, location, and any specific requirements. Our team will get back to you with a customized quote promptly.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Do you offer event management services for virtual or hybrid events?
            </div>
            <div className="collapse-content">
              <p>Yes, CorpConvo specializes in organizing both in-person and virtual/hybrid corporate events. We have experience in creating engaging virtual conferences, webinars, and online team-building workshops to suit the current business landscape.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Can CorpConvo handle large-scale corporate conferences and trade shows?
            </div>
            <div className="collapse-content">
              <p>Absolutely! CorpConvo has a proven track record of successfully managing large-scale corporate conferences, trade shows, and expos. Our team has the expertise and resources to ensure the smooth execution of events with thousands of attendees.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              What safety measures do you have in place for in-person events?
            </div>
            <div className="collapse-content">
              <p>The safety and well-being of our clients and event attendees are our top priorities. We follow all local health and safety guidelines and can implement measures such as social distancing, sanitization stations, and contactless registration to create a safe event environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
