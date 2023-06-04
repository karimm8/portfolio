import './Home.css';
import pdf from './actual.pdf';
import img from '../man-3037342_1280.jpg'
import Typewriter from 'typewriter-effect';
export default function Home() {
  return (
    <div className='banner'>
        <div className='text'>
               <span className='span sp1'> Hi, I'm</span>
               <span className='span sp2'>
                    <Typewriter
                    options={{
                      autoStart:true,
                      loop:true,
                      delay:150,
                      strings:[
                        "Abdelkarim Maarouf.",
                        "Frontend Developer.",
                      ],
                    }}
                    />
               </span>
            <a download href={pdf} > Download CV </a>
        </div>
        <img src={img} alt='img' width={'550'} height={'550'}  />
    </div>
  )
}
