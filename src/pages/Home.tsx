import FirstPart from '../components/FirstPart';
import SecondPart from '../components/SecondPart';
import ThirdPart from '../components/ThirdPart';
import FourPart from '../components/FourPart';
import FivePart from '../components/FivePart';
import SixPart from '../components/SixPart';
import Happen from '../components/Happen';
import Slider from '../components/Slider';
import Explore from '../components/Explore';
import NewPart from '../components/NewPart';
import Enquiries from '../components/Enquiries';


const Home=() => {
  return (
    <>
  <FirstPart />
  <SecondPart  firstPhotoSrc="https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2022/12/soulkitchen-277.jpg"
        secondPhotoSrc="https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2022/11/soulkitchen-95.jpg"
        thirdPhotoSrc="https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2022/12/soulkitchen-306.jpg" />
 <ThirdPart />
 <FourPart />
 <FivePart />
 <SixPart />
 <Enquiries/>
 <Happen />
 <NewPart />
 
 {/* <Slider /> */}
 {/* <Explore/> */}
 
  </>
  )
}

export default Home