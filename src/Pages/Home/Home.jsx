import Banner from "../../Components/Banner/Banner"
import FAQ from "../../Components/FAQ/FAQ";
import Services from "../../Components/Services/Services";
import WhyUs from "../../Components/WhyChoseUsSection/WhyUs";

const Home = () => {
  return (
    <div>
      <div className="z-0">
        <Banner></Banner>
      </div>
      <section className="m-5">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <Services></Services>
      </section>
      <WhyUs></WhyUs>
      <FAQ></FAQ>
    </div>
  )
}

export default Home
