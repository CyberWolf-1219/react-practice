import Logo from "./assets/Logo.svg";
import HM from "./assets/hero_image.svg";
import HI_2 from "./assets/section_2_image.svg";
import I_1 from "./assets/Icon/Bar Chart.svg";
import I_2 from "./assets/Icon/Person.svg";
import I_3 from "./assets/Icon/Earth.svg";
import BcI from "./assets/Icon.svg";
import EcI from "./assets/Icon-1.svg";
import LcI from "./assets/Icon-2.svg";
import S41 from "./assets/Chart.svg";
import S42 from "./assets/Statistic.svg";
import S43 from "./assets/Table.svg";
import P1 from "./assets/Visa.svg";
import P2 from "./assets/Mastercard.svg";
import P3 from "./assets/Bitcoin.svg";
import SM1 from "./assets/facebook-f 1.svg";
import SM2 from "./assets/instagram 1.svg";
import SM3 from "./assets/linkedin 1.svg";
import SM4 from "./assets/twitter 1.svg";
import SM5 from "./assets/youtube 1.svg";

function App() {
  return (
    <div className="App w-full bg-primary">
      <div className="container max-w-screen-lg mx-auto pt-4 bg-primary font-sans text-lg">
        <Navigation />
        <HeroSection />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Footer />
      </div>
    </div>
  );
}

function Navigation(props) {
  return (
    <nav className="w-full p-8 flex flex-row items-center justify-between my-8">
      <img className="w-fit object-contain" src={Logo} alt="" />
      <ul className="flex flex-row gap-4 items-center justify-between text-white font-semibold">
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
        <li>
          <button className="rounded-full bg-blue-700 px-4 py-2">
            Register
          </button>
        </li>
      </ul>
    </nav>
  );
}

function HeroSection(props) {
  return (
    <section className="w-full p-8 py-8 mb-16 flex flex-row items-center content-center justify-center">
      <div className="w-6/12 text-left flex flex-col gap-4">
        <p className="w-fit text-left rounded-full px-2 py-2 bg-white bg-opacity-10">
          <span className="bg-white rounded-full text-black p-2 mr-2 font-medium">
            75% SAVE
          </span>
          For the black friday weekend.
        </p>
        <h1 className="text-5xl text-left text-white font-extrabold">
          Fastest & Secure platform to invest in crypto
        </h1>
        <p className="w-3/4 text-left">
          Buy and sell crypto currencies. Trusted by 10M wallets with over $30
          billion in transactions.
        </p>
        <button className="rounded-full w-fit px-4 py-2 bg-blue-700">
          Try for FREE ⚪{" "}
        </button>
      </div>
      <div className="w-6/12 h-full overflow-visible">
        <img className="h-80 object-cover object-right" src={HM} alt="" />
      </div>
    </section>
  );
}

function ShowCase({ image, highlight, desc }) {
  return (
    <div className="flex flex-row">
      <div className="w-16 h-16 inline-block m-0 mr-4 rounded-full bg-white bg-opacity-10">
        <img
          className="h-full w-full p-4 object-center align-middle "
          src={image}
          alt=""
        />
      </div>

      <div className="inline-block text-left align-middle">
        <h2 className="text-2xl font-black">{highlight}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function Calculator() {
  return (
    <div className="p-6 bg-white rounded-lg justify-between absolute top-28 z-10 text-left">
      <div className="w-full flex flex-row gap-4 mb-12 text-left">
        <input
          className="w-56 bg-transparent placeholder:text-black border-b border-b-black text-left"
          type="text"
          name="hash_rate"
          id="hash_rate_input"
          placeholder="Enter you hash rate"
        />
        <select
          className="w-32 bg-transparent text-black border-b border-b-black text-left "
          name="hash_units"
          id="hash_units_input"
        >
          <option value="TH/s">TH/s</option>
          <option value="GH/s">GH/s</option>
          <option value="MH/s">MH/s</option>
        </select>
        <button className="bg-blue-600 text-white p-2 rounded-full">
          Calculate
        </button>
      </div>
      <div className="text-left text-black ">
        <p className="text-blue-600 mb-4">ESTIMATED 24 HOUR REVENUE:</p>
        <h3 className="font-medium text-2xl">
          0.005 130 50 ETH<span className="text-blue-500">{`($1275)`}</span>
        </h3>
        <small className="text-sm text-opacity-40">
          Revenue will change base on mining difficulty and Etherium price.
        </small>
      </div>
    </div>
  );
}

function Section_2() {
  return (
    <section className="w-full p-8 mb-16 flex flex-col gap-16 text-left">
      <div className="w-full flex flex-row items-center justify-between">
        <ShowCase
          key={1}
          image={I_1}
          highlight={"$30B"}
          desc={"Digital Curerncy Exchanged"}
        />
        <ShowCase
          key={2}
          image={I_2}
          highlight={"10M+"}
          desc={"Trusted wallet investors"}
        />
        <ShowCase
          key={3}
          image={I_3}
          highlight={"195"}
          desc={"Countries supported"}
        />
      </div>

      <div className="w-full flex flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <img className="object-contain" src={HI_2} alt="" />
        </div>
        <div className="flex-1 text-left flex flex-col gap-4 justify-between">
          <h2 className="font-bold text-5xl text-left">
            Why you should choose CRAPPO
          </h2>
          <p className="text-left">
            Expreience the next generation crypto currency platform. No finance
            boudries, extra fees, and fake reviews.
          </p>
          <button className="w-fit px-4 py-2 rounded-full bg-blue-700">
            Learn more
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center relative">
        <h2 className="font-bold text-3xl mb-4">Check how much you can earn</h2>
        <p>Let's check your hash rate to see how much you will earn today.</p>
        <Calculator />
      </div>
    </section>
  );
}

function NavCard({ image, title, subTitle, desc, link, linkText }) {
  return (
    <div className="group p-8 flex flex-col gap-4 w-64 items-center justify-between bg-white text-black rounded-md hover:bg-indigo-900 hover:text-white text-center">
      <div className="w-16 h-16">
        <img className="w-full h-full object-contain" src={image} alt="" />
      </div>
      <div>
        <h3 className="text-3xl font-bold inline">{title}</h3>
        <h4 className="inline text-xs ml-1">{subTitle}</h4>
      </div>
      <p className="w-full">{desc}</p>
      <a
        className="text-white bg-blue-500 px-4 py-2 rounded-full items-center align-middle hover flex flex-row"
        href={link}
      >
        <span className="">{linkText}</span>
        <span className="ml-2 bg-white p-1 rounded-full leading-none w-5 align-middle text-blue-600 text-xs text-center font-extrabold">
          {">"}
        </span>
      </a>
    </div>
  );
}

function Section_3() {
  return (
    <section className="w-full relative bg-blue-100 p-8 mb-16 pt-36 py-16 top-20">
      <h2 className=" w-6/12 text-3xl font-bold justify-center text-center mx-auto mb-20  text-black">
        Trade securely and market the high growth cryptocurrencies.
      </h2>
      <div className="w-full flex flex-row items-center justify-center gap-16">
        <NavCard
          image={BcI}
          title={`Bitcoin`}
          subTitle={`BTC`}
          desc={`Digital currency in which a record of transactions is maintained.`}
          link={`#`}
          linkText={`Start Mining`}
        />
        <NavCard
          image={EcI}
          title={`Litecoin`}
          subTitle={`LTC`}
          desc={`Digital currency in which a record of transactions is maintained.`}
          link={`#`}
          linkText={`Start Mining`}
        />
        <NavCard
          image={LcI}
          title={`Etherium`}
          subTitle={`ETC`}
          desc={`Digital currency in which a record of transactions is maintained.`}
          link={`#`}
          linkText={`Start Mining`}
        />
      </div>
    </section>
  );
}

function Section_4() {
  return (
    <section className="py-16 pt-32 p-8 mb-16">
      <h2 className="w-1/2 mx-auto text-center font-bold text-4xl mb-12">
        Market sentiments, portfolio, and run the infrastructure of your choice
      </h2>
      <div className="w-full mx-auto flex flex-col gap-24">
        <div className="w-full mx-auto flex flex-row gap-12">
          <div className="w-5/12 text-left flex flex-col gap-4">
            <h3 className="font-bold text-3xl">Invest Smart</h3>
            <p>
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.{" "}
            </p>
            <a
              className="py-3 px-4 leading-none font-semibold rounded-full text-white bg-blue-600 w-fit"
              href=""
            >
              Learn more
            </a>
          </div>
          <div className="w-6/12">
            <img className="w-full h-full object-contain" src={S41} alt="" />
          </div>
        </div>

        <div className="w-full mx-auto flex flex-row gap-12">
          <div className="w-7/12">
            <img className="w-full h-full object-contain" src={S42} alt="" />
          </div>
          <div className="w-5/12 text-left flex flex-col gap-4">
            <h3 className="font-bold text-3xl">Invest Smart</h3>
            <p>
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.{" "}
            </p>
            <a
              className="py-3 px-4 leading-none font-semibold rounded-full text-white bg-blue-600 w-fit"
              href=""
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="w-full mx-auto flex flex-row gap-12">
          <div className="w-5/12 text-left flex flex-col gap-4">
            <h3 className="font-bold text-3xl">Invest Smart</h3>
            <p>
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.{" "}
            </p>
            <a
              className="py-3 px-4 leading-none font-semibold rounded-full text-white bg-blue-600 w-fit"
              href=""
            >
              Learn more
            </a>
          </div>
          <div className="w-7/12">
            <img className="w-full h-full object-contain" src={S43} alt="" />
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-between bg-blue-400 p-8 rounded-lg gap-8">
          <div className="text-left w-1/2">
            <h3 className="text-left text-2xl font-bold mb-2">
              Start mining now
            </h3>
            <p className="text-left text-base">
              Join now with CRAPPO to get the latest news and start mining now
            </p>
          </div>
          <form className="">
            <input
              className="w-64 inline bg-transparent border-b border-b-black placeholder:text-white mr-4"
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
            />
            <input
              className="inline bg-white rounded-full px-4 py-3 leading-none text-black"
              type="submit"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full p-8 flex flex-col items-center justify-start gap-20 pb-8">
      <div className="w-full flex flex-row items-start justify-between">
        <div className="flex-1 ">
          <img src={Logo} alt="" />
        </div>
        <div className="flex-1 text-left">
          <b className="text-base font-bold">Quick Links</b>
          <ul className="list-outside list-none text-left">
            <li className="text-left">Home</li>
            <li className="text-left">Products</li>
            <li className="text-left">About</li>
            <li className="text-left">Features</li>
            <li className="text-left">Contacts</li>
          </ul>
        </div>
        <div className="flex-1 text-left">
          <b className="text-base font-extrabold">Resources</b>
          <ul className="list-outside list-none text-left">
            <li className="text-left">Download Whitepapers</li>
            <li className="text-left">Smart Tokens</li>
            <li className="text-left">Blockchain Explorer</li>
            <li className="text-left">Crypto API</li>
            <li className="text-left">Interest</li>
          </ul>
        </div>
        <div className="flex-1 ">
          <h3 className="text-2xl font-bold text-left mb-8">
            We accept following payment systems
          </h3>
          <div className="flex flex-row gap-4">
            <span>
              <img src={P1} alt="" />
            </span>
            <span>
              <img src={P2} alt="" />
            </span>
            <span>
              <img src={P3} alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className="w-full px-20 flex flex-row justify-between items-center">
        <div>©2021 CRAPPO. All rights reserved</div>
        <div className="flex flex-row gap-2 ">
          <span>
            <img src={SM1} alt="" />
          </span>
          <span>
            <img src={SM2} alt="" />
          </span>
          <span>
            <img src={SM3} alt="" />
          </span>
          <span>
            <img src={SM4} alt="" />
          </span>
          <span>
            <img src={SM5} alt="" />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default App;
