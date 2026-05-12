import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Cases from '../components/Cases';
import Services from '../components/Services';
import Manifesto from '../components/Manifesto';
import Advantages from '../components/Advantages';
import Cta from '../components/Cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <Manifesto />
      <Cta />
      <Advantages />
      <Cases />
    </main>
  );
}
