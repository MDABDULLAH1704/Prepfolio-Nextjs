import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import FAQsDetail from "../../components/FAQsDetail1";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FAQsDetail marginTopValue='100px' />
    </>
  );
}
