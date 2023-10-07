import React, { useEffect, useState } from 'react'
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    fetch('serviceData.json')
      .then(response => response.json())
      .then(data => setServices(data))
  }, []);

  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      {services?.map((service)=>{
        return <ServiceCard key={service.id} service={service}></ServiceCard>
      })}
    </div>
  )
}

export default Services
