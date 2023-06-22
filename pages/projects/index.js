import { Header } from "../../components/Header";
import { ProjectCard } from "../../components/ProjectCard";

export default function Projects() 
{
    return (
        <>
        
            <meta content="width=device-width, initial-scale=1" name="viewport" />

            <div className="w-full h-[15em]">
                <Header title="Projects"/>
            </div>

            <div className='w-full min-h-screen bg-almost-black-500'>
                <div className='flex md:flex-row flex-col justify-center items-center md:gap-16 gap-10 pt-10 pb-16'>
                    <img className='w-[10em] h-[10em]' src='https://emoji.craftwork.design/images/modal/face-with-open-mouth.png'/>
                    <div className='bg-white w-1/2 h-1.5 px-16'></div>
                    <h1 className='text-white text-4xl font-semibold md:py-16 px-16'>Featured Projects</h1>
                </div>

                <div className="flex justify-center w-full h-full py-5">
                    <div className='grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-24 justify-center md:px-20'>
                        <ProjectCard 
                            title="Gridder"
                            description="A fun grid puzzle game I made in highschool!"
                            image="https://img.itch.zone/aW1nLzgxNjAwOTcucG5n/315x250%23c/2oiljW.png"
                            date="March 19th, 2022"
                            link='gridder'
                        />
                        <ProjectCard 
                            title="Tic Tac Toe"
                            description="A fully working tic tac toe board built with React!"
                            image="https://web.stevens.edu/news/newspoints/zoom-bg/Stevens-zoom-background-garden.jpg"
                            date="May 5th, 2023"
                            link='tictactoe'
                        />
                        <ProjectCard 
                            title="Resume Re-Writer"
                            description="AI that rewrites your resume based on your requested job niche."
                            image="https://media.istockphoto.com/id/638584374/vector/writer-writing-on-paper-sheet-workplace-author-desktop-write-letter.jpg?s=612x612&w=0&k=20&c=_OM7rmAP12TuzdY4WXekh_rVJMNzpcCNUDqVqmU52TI="
                            date="May 17th, 2023"
                            link='resume'
                        />
                    </div>
                </div>
            </div>
        
        </>
    )
}