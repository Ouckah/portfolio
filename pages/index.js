import { Header } from '../components/Header';
import { InfoCard } from '../components/InfoCard';

import { 
  BsGithub, 
  BsLinkedin,
  BsTiktok,
  BsDiscord,
  BsInstagram,
} from "react-icons/bs";

export default function Home() 
{

  return (
    
    <>
    
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <main className="flex flex-col justify-center items-center w-full h-full">

        <div className="w-full h-[20em]">
          <Header title="Hello"/>
        </div>

        <div className="flex flex-row w-full h-full justify-center items-center p-10 gap-16">

          <div className="bg-white w-30 h-5"/> 
          <a href="https://github.com/Ouckah" target="_blank" rel="noreferrer">
            <BsGithub
              className='w-12 h-12 hover:scale-125 duration-300 transition-all animate-bounce animation-delay-0'
            />
          </a>
          <a href="https://linkedin.com/in/aidan-ouckama/" target="_blank" rel="noreferrer">
            <BsLinkedin 
              className='w-12 h-12 hover:scale-125 duration-300 transition-all animate-bounce animation-delay-100'
            />
          </a>
          <a href="https://tiktok.com/@ouckah" target="_blank" rel="noreferrer">
            <BsTiktok 
              className='w-12 h-12 hover:scale-125 duration-300 transition-all animate-bounce animation-delay-200'
            />
          </a>
          <a href="https://discord.gg/V53Hm4rbrf" target="_blank" rel="noreferrer">
            <BsDiscord 
              className='w-12 h-12 hover:scale-125 duration-300 transition-all animate-bounce animation-delay-300'
            />
          </a>
          <a href="https://instagram.com/ouckuh" target="_blank" rel="noreferrer">
            <BsInstagram 
              className='w-12 h-12 hover:scale-125 duration-300 transition-all animate-bounce animation-delay-400'
            />
          </a>
          <div className="bg-white w-30 h-5"/> 

        </div>

        <div className='flex justify-center items-center w-2/3 p-5'>
          <InfoCard 
            title="Who is this?"
            description=
            {`
              Hi! My name is Aidan Ouckama and I'm an upcoming Computer Science student and front-end developer. 
              I have touched many corners within the programming world including Web Design, Game Development, Database Building, Modding, and more! 
              I've had a passion for coding from a young age and I'm excited to continuing pursuing it!
            `}
            image='https://i.ibb.co/6mGbqWv/122426423-2630232447290059-1245205322917720626-n.jpg'
            emoji='https://emoji.craftwork.design/images/modal/thinking-face.png'
          />
        </div>

        <div className='flex flex-row justify-center text-white text-7xl font-bold p-20'>
          <h1 className='text-almost-black-500 text-8xl font-bold'>“</h1><h1>Hi. I{"'"}m <span className="text-gold">Aidan</span> 👋</h1><h1 className='text-almost-black-500 text-8xl font-bold'>”</h1>
        </div>

      </main>

    </>

  )
}
