import { useState } from "react";
import "./style.scss";

type sonItems = {
    ID: string;
    sonName: string;
    finalDate: string;
    description: string;
    complete: boolean;
}

type fatherTaskProps = {
    ID: string;
    name: string;
    finalDate: string;
    son: sonItems[];
}

const progress = (son: sonItems[]) => {
    if (!son || son.length === 0) { return "0%";}

    const completed = son.filter(task => task.complete).length;
    const result = Math.round((completed / son.length) * 100);

    return `${result}%`
}

const sonTask_redirect = (fatherid: string, sonId: string) => {
    window.location.replace(`/task/${fatherid}/${sonId}`)
}

const fatherTask_redirect = (id: string) => {
    window.location.replace(`/task/${id}`)
}


const FatherTask = ({ID: fatherId, name, finalDate, son}: fatherTaskProps) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const changeTaskState = () => { setIsOpen(!isOpen); }

    return (    
        <section onClick={changeTaskState} onDoubleClick={() => {fatherTask_redirect(fatherId)}} className={`fatherTaskContainer ${isOpen ? "fatherTask_open" : "fatherTask_close"}`} key={name}>
            <section className="taskHeader">
                <h3>{name}</h3>
                <p className="task-FinalDate">{finalDate}</p>
                <p className="task-Progress">{progress(son)}</p>
            </section>
            { isOpen ? 
            <section className="sonContainer">
                {son.map(({ ID: sonId, sonName, finalDate, complete }) => (
                    <div key={sonName} onClick={() => {sonTask_redirect(fatherId, sonId)}}>
                        <span>{sonName}</span>
                        <span className="subtask-FinalDate">{finalDate}</span>
                        <span className="subtask-Status">{complete ? "Completo" : "Incompleto"}</span>
                    </div>
                ))}
            </section> : null
            }
        </section>
    )
}

export default FatherTask;