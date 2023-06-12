import Footer from '../components/footer';
import { Task } from '../components/task';

export const Home=()=>{
    return(
        <>
        <section>
        <h1><center>Home</center></h1>
        {
            ['camiones','checklist','subtitulo'].map(task=>(
                <Task name={task} key={task}/>
            ))
        }
        </section>
        <footer>
            <Footer/>
        </footer>
        </>
    )
}