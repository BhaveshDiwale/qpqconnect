'use client'

import Script from "next/script";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import 'bootstrap/dist/css/bootstrap.css'
import TrendingCategories from "./components/home/TrendingCategories";
import HomeBackground from "./components/home/HomeBackground";
import FindSellersByCity from "./components/home/FindSellersByCity";
import HomeListing from "./components/home/HomeListing";
import Image from "next/image";
import BuyRequirement from "./components/home/BuyRequirement";
import Footer from "./components/Footer";
import NextBusinessOpportunity from "./components/home/NextBusinessOpportunity";
import FeaturedSeller from "./components/home/FeaturedSeller";

const Home = () => {
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      />
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />

      <HomeBackground />

      <ClientOnly>
        <Container>
          <div className="col-md-11 mx-auto">
            <FeaturedSeller />
            <TrendingCategories />
          </div>

          <NextBusinessOpportunity />

          <div className="col-md-11 mx-auto">
            <HomeListing />

            <div className="col-md-12 mx-auto mt-20">
              <Image
                src="/svg/homeUI.svg"
                alt="home-ui"
                className="image-fluid col-lg-9 col-md-10 col-sm-11 col-11 mx-auto"
                width={600} height={550}
              />
            </div>
            {/* <FindSellersByCity /> */}

            <BuyRequirement />
          </div>

        </Container>
      </ClientOnly>
      <Footer />
    </div>
  )
}

export default Home;
