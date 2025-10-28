import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FAQsDetail1 from "@/components/FAQsDetail1";
import Footer from "@/components/Footer";


export const metadata = {
  title: 'Prepfolio | Learn Smarter with PDF Notes, Practice Questions & Audio Lessons',
  description:
    'Prepfolio is a digital learning platform offering high-quality PDF Notes, Practice Questions, and Audio Lessons. Learn anytime, anywhere, and prepare effectively for your exams.',
  keywords: [
    'Prepfolio',
    'online learning platform',
    'PDF notes',
    'practice questions',
    'audio lessons',
    'exam preparation',
    'digital learning',
    'study materials',
    'affordable courses',
  ],
  openGraph: {
    title: 'Prepfolio | Learn Smarter with PDF Notes, Practice Questions & Audio Lessons',
    description:
      'Access high-quality PDF Notes, Practice Questions, and Audio Lessons on Prepfolio. Learn smarter, save time, and boost your exam preparation with expert-curated study materials.',
    url: 'https://prepfolio.xyz',
    siteName: 'Prepfolio',
    type: 'website',
  },
};


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FAQsDetail1 marginTopValue='100px' />
      <Footer />
    </>
  );
}
