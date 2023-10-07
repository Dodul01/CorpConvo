import { useEffect, useState } from "react"
import Banner from "../../Components/Banner/Banner"
import Services from "../../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* Services */}
      <section className="m-5">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <Services></Services>
      </section>
    </div>
  )
}

export default Home
