import "../styles/main.scss";
import Banner from "./components/home/Banner";
import Course from "./components/home/Course";
import Feature from "./components/home/Feature";
export default function Home() {
  return (
    <div>
      <Banner />
      <Course />
      <Feature />
    </div>
  );
}
