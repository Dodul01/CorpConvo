import Banner from "../../Components/Banner/Banner"
import FAQ from "../../Components/FAQ/FAQ";
import Footer from "../../Components/Footer/Footer";
import Services from "../../Components/Services/Services";

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
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  )
}

export default Home
