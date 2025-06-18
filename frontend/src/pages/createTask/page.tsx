import { useState } from "react";
import NavBar from "../../assets/components/global/navbar";
import "./style.scss";


const CreateTask = () => {
    const [child, setChild] = useState(false);

    return (
        <main className="createTaskContainer">
            <NavBar s_page="add" s_state="dinamic"/>
            <section className="createTask_Content">
                <h1>Criar task</h1>
                <form action="Act_createTask" method="post" className="createTaskForm_Container">
                    <section className="taskType_container">
                        <div><span>Tarefa Pai:</span>   <input type="checkbox" name="" id="" /></div>
                        <div><span>Tarefa Filha:</span> <input type="checkbox" name="" id="" onClick={() => setChild(!child)}/></div>
                    </section>
                    <div><span>Pai:</span>          <input type="text" name="" id="" disabled={!child}/></div>
                    <div><span>Nome:</span>         <input type="text" name="" id="" /></div>
                    <div><span>Descrição:</span>    <input type="text" name="" id="" className="description_input" /></div>
                    <div><span>Data Final:</span>   <input type="date" name="" id="" /></div>
                </form>
            </section>
        </main>
    )
}

export default CreateTask;