import '../assets/App.css'
import '../assets/Home.css'

import { welcome, full_name, summary, description } from '../assets/strings';
import profilePic from '../assets/profile_pic.jpg';

const Home = () => {
   
   const getProfileImage = () => {
      return profilePic
   }


    return (
      <div className='block first'>
         <div className='background-container'></div>
         <div className="one-container">
            <div className="block" >
               <div className='welcome'>
                  {welcome}
               </div>
               <div className='full-name'>
                  {full_name}
               </div>
               <div className='summary'>
                  {summary}
               </div>
            </div>
            <div className="flex" ></div>
         </div>
         <div className="two-container">
            <div className='profile-image'>
               <img src={getProfileImage()}></img>
            </div>
            <div className='description'>
               {description}
            </div>
         </div>
      </div>
    );
}
 
export default Home;