import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import FAQsDetail from "../../components/FAQsDetail";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FAQsDetail marginTopValue='100px' />
    </>
  );
}
