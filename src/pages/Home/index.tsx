import Header from "../../components/Header";
import Box from "../../components/Box";
import Menu from "../../components/Link"
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import Product from "../../components/Products";

import banner from "../../assets/carrossel/banner-carousel.png"
import img1 from "../../assets/images/section1.png"
import img2 from "../../assets/images/section2.png"
import img3 from "../../assets/images/section3.png"
import img4 from "../../assets/images/section4.png"
import img5 from "../../assets/images/section5.png"
import img6 from "../../assets/images/section6.png"
import img7 from "../../assets/images/section7.png"
import img8 from "../../assets/images/section8.png"
import product1 from "../../assets/images/product-id-1.png";
import product2 from "../../assets/images/product-id-2.png";
import product3 from "../../assets/images/product-id-3.png";
import product4 from "../../assets/images/product-id-4.png";
import product5 from "../../assets/images/product-id-5.png";
import product6 from "../../assets/images/product-id-6.png";
import product7 from "../../assets/images/product-id-7.png";

import "./style.css"

export default function Home() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <main className="main">
        <Box background="escuro" size="small">
          <div className="carrossel">
            <img src={banner} alt="banner" />
          </div>
        </Box>
        <Box background="claro" size="medium">
          <section id="second-box-content">
            <div className="box-row">
              <Section image={img1} text="CLIMBING" />
              <Section image={img2} text="CITY BIKING" />
              <Section image={img3} text="HIKE AND CAMP" />
              <Section image={img4} text="BASKETBALL" />
            </div>
            <div className="box-row">
              <Section image={img5} text="BASEBALL" />
              <Section image={img6} text="BADMINTON" />
              <Section image={img7} text="ARCHERY" />
              <Section image={img8} text="CATEGORY" />
            </div>
          </section>
        </Box>
        <Box background="escuro">
          <>
            <section className="products-showcase">
              <h4 className="showcase-name">most viewed</h4>
              <div className="products-showcase-row">
                <Product
                  image={product1}
                  title="Hiking Cap"
                  text="Forclaz Travel 500, Hiking Cap"
                  price="$ 18,00"
                />
                <Product
                  image={product2}
                  title="Rockrider ST100"
                  text="Mountain Bike, 24'', Kids 4'5'' to 4'11''"
                  price="$ 229,00"
                />
                <Product
                  image={product3}
                  title="Backpack"
                  text="Arpenaz NH100, Hiking 10 L"
                  price="$ 40,00"
                />
                <Product
                  image={product4}
                  title="Microfiber Towel"
                  text="Nabaiji, 43.3'' x 68.9'' Ultra Compact Microfiber Towel, XL, Hiking Cap"
                  price="$ 40,00"
                />
              </div>
            </section>
            <section className="products-showcase">
              <h4 className="showcase-name">suggested for you</h4>
              <div className="products-showcase-row">
                <Product
                  image={product1}
                  title="Hiking Cap"
                  text="Forclaz Travel 500, Hiking Cap"
                  price="$ 18,00"
                />
                <Product
                  image={product5}
                  title="Tenis Visor"
                  text="Artengo TV100, 22'' Tennis Visor"
                  price="$ 8,00"
                />
                <Product
                  image={product6}
                  title="Hiking Shoes"
                  text="Quechua NH100 Mid-Height Hiking Shoes, Women's"
                  price="$ 180,00"
                />
                <Product
                  image={product7}
                  title="Walking Shoes"
                  text="Quechua NH100 Mid-Height Hiking Shoes, Women's"
                  price="$ 50,00"
                />
              </div>
            </section>
          </>
        </Box>
      </main>
        <Footer />
    </div>
  );
}
