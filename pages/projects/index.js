import { ProjectCard } from "../../components/ProjectCard";

export default function Projects() 
{
    return (
        <>
        
            <meta content="width=device-width, initial-scale=1" name="viewport" />

            <div className='w-full h-[35em] object-fill bg-fixed bg-[url("https://i.ibb.co/wQT8tCg/122427480-161210105663948-3594706252189084805-n.jpg")]'>
                <div className='flex flex-col justify-center items-center w-full h-full backdrop-blur-sm backdrop-brightness-50'>
                    <h1 className='text-9xl font-bold uppercase transition duration-300 hover:drop-shadow-lg'>Projects</h1>
                </div>
            </div>

            <div className='w-full h-[70em] bg-almost-black-500'>
                <div className='flex flex-row justify-center items-center gap-16 pt-10 pb-16'>
                    <img className='w-[10em] h-[10em]' src='https://emoji.craftwork.design/images/modal/face-with-open-mouth.png'/>
                    <div className='bg-white w-1/2 h-1.5 px-16'></div>
                    <h1 className='text-white text-4xl font-semibold py-16'>Featured Projects</h1>
                </div>

                <div className='grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-24 justify-evenly px-20'>
                    <ProjectCard 
                        title="Tic Tac Toe"
                        description="A fully working tic tac toe board built with React!"
                        image="https://web.stevens.edu/news/newspoints/zoom-bg/Stevens-zoom-background-garden.jpg"
                        date="May 5th, 2023"
                        link='tictactoe'
                    />
                    <ProjectCard 
                        title="Gridder"
                        description="A fun grid puzzle game I made in highschool!"
                        image="https://img.itch.zone/aW1nLzgxNjAwOTcucG5n/315x250%23c/2oiljW.png"
                        date="May 5th, 2023"
                        link='gridder'
                    />
                    <ProjectCard 
                        title="Resume Re-Writer"
                        description="AI that rewrites your resume based on your requested job niche."
                        image="https://img.itch.zone/aW1nLzgxNjAwOTcucG5n/315x250%23c/2oiljW.png"
                        date="May 17th, 2023"
                        link='resume'
                    />
                </div>
            </div>
        
        </>
    )
}