import AboutBottom from "./AboutBottom"
import AboutCenter from "./AboutCenter"
import AboutTop from "./AboutTop"


const About : React.FC = () => {
  return (
    <div className="w-[90%] m-auto my-5">
        <AboutCenter/>
        <AboutBottom/>
    </div>
  )
}

export default About