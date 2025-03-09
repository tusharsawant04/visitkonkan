

import '../styles/custom.css';
import HeroSlider from '../components/Herosilder';
import Category from '../components/category';
import ExperienceList from "@/components/ExperienceList";
import Layout from '.././components/layout';
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
