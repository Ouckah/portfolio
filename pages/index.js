import { Header } from '../components/Header';
import { InfoCard } from '../components/InfoCard';

/*
  Emojis: https://emoji.craftwork.design/
*/

export default function Home() 
{
  return (
    
    <>
    
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <Header title="Hello"/>

      <div className='flex justify-center py-16'>
        <InfoCard 
          title="Who is this?"
          description="Hi! My name is Aidan Ouckama and I'm a upcoming Computer Science student and front-end developer. I have touched many corners within the programming world including Web Design, Game Development, Database Building, Modding, and more! I've had a passion for coding from a young age and I'm excited to continuing pursuing it!"
          image='https://i.ibb.co/6mGbqWv/122426423-2630232447290059-1245205322917720626-n.jpg'
          emoji='https://emoji.craftwork.design/images/modal/thinking-face.png'
        />
      </div>

      <div className='flex flex-row justify-center text-white text-7xl font-bold pb-20'>
        <h1 className='text-almost-black-500 text-8xl font-bold'>“</h1><h1>Hi. I{"'"}m <span className="text-gold">Aidan</span> 👋</h1><h1 className='text-almost-black-500 text-8xl font-bold'>”</h1>
      </div>

    </>

  )
}
