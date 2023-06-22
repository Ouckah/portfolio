import { Header } from '../../components/Header';
import { InfoCard } from '../../components/InfoCard';
import { ImageCarousel } from "../../components/ImageCarousel";

export default function Home() 
{
  return (
    <>

        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <main className="flex flex-col justify-center items-center w-full h-full">
    
            <div className="w-full h-[15em]">
                <Header title="About"/>
            </div>

            <div className='flex flex-col justify-center items-center w-full h-full xl:gap-10 gap-5 p-10'>

            <h1 className='text-gold font-bold text-3xl'>Background</h1>
            <InfoCard 
                title=""
                description=
                {`
                As you know, my name is Aidan, and I am a passionate Computer Science Student and Software Engineer!
                The joy coding brings me is both riviting and unexplainable. I've always needed to be coding something or learning something about code.
                When I'm not obsessing about code, I like to play Ultimate Frisbee, make content on TikTok, and play video games!
                I also LOVE travelling!
                `}
                image='.\images\stevens.jpg'
                emoji='https://emoji.craftwork.design/images/modal/smiling-face.png'
                top
            />

            <div className='w-2/3 h-[65vh] p-10'>
                <ImageCarousel 
                images={[
                    "./images/frisbee5.jpg",
                    './images/sunglasses.jpg',
                    "./images/frisbee6.jpg",
                    "./images/mkbhd.jpg",
                    "./images/frisbee.jpg",
                ]}
                />
            </div>

            <h1 className='text-gold font-bold text-3xl'>Education</h1>
            <InfoCard 
                title=""
                description=
                {`
                When I was younger, we moved schools a bunch, which was a little annoying.
                However, in highschool my family finally settled down where I attended Montclair Highschool.
                It was here I honed my coding skills and self-taught myself coding niches such as Game Development and Web Development.
                Finally, after four begrudging years of highschool education, I now attend the Stevens Institute of Technology.
                I am going for my Bachelor of Science degree and plan to take my Masters in Machine Learning and Artificial Intelligence at Stevens as well.
                `}
                image='.\images\graduation.jpg'
                emoji='https://emoji.craftwork.design/images/modal/tired-face.png'
                primary
            />
            <div className='flex xl:flex-row flex-col xl:gap-3 gap-10 justify-center items-center'>

                <div className='flex flex-col justify-center items-center w-40 h-40'>
                    <img
                    className='w-full h-full'
                    src="./images/montclair.png"
                    />
                    <h1 className='opacity-75 font-bold'>2018 - 2022</h1>
                </div>

                <div className='flex flex-col justify-center items-center w-40 h-40'>
                    <img
                    className='w-full h-full'
                    src="./images/msu.png"
                    />
                    <h1 className='opacity-75 font-bold'>2020 - 2022</h1>
                </div>

                <div className='bg-white xl:w-20 xl:h-3 h-20 w-3'/>

                <div className='flex flex-col justify-center items-center w-40 h-40'>
                    <img
                    className='w-full h-full object-contain'
                    src="./images/stevens.png"
                    />
                    <h1 className='opacity-75 font-bold'>2022 - 2026</h1>
                </div>

            </div>

            <h1 className='text-gold font-bold text-3xl'>Experience</h1>
            <InfoCard 
                title=""
                description=
                {`
                I've never seen work or experience as work really, it's just fun to do.
                Whether I'm developing a backend using G-Suite or doing some web development I always have fun doing it!
                I'm so lucky to find a job that isn't really a job, and I'm excited to see where my career path takes me.
                `}
                image='.\images\cafe1.jpg'
                emoji='https://emoji.craftwork.design/images/modal/smiling-face-with-horns.png'
            />

            </div>
        
        </main>
    
    </>
  )

}

