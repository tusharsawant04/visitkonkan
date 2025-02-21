import Image from "next/image";
import Layout from '.././components/layout';
import '../styles/custom.css';
import HeroSlider from '../components/Herosilder';
import Category from '../components/category';
import ExperienceList from "@/components/ExperienceList";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
export default function Home() {
  return (
    <div >
      <main >
       
      <Layout>
      <HeroSlider />
    <Category/>
    <ExperienceList/>
     </Layout>
       
      </main>
   
    </div>
  );
}
