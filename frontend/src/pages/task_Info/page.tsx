import { useParams } from "react-router-dom";

import "./style.scss";

import NavBar from "../../assets/components/global/navbar";
import viewObj from "../../simBd/viewResp";
import { useEffect, useState } from "react";
// import soloTask from "../../assets/components/taskCards/soloTask";

type sonTask = {
  ID: string;
  sonName: string;
  finalDate: string;
  completeDate: string;
  description: string;
  complete: boolean;
};

type task_Type = {
  ID: string;
  name: string;
  finalDate: string;
  completeDate: string;
  description: string;
  complete: boolean;
  fatherVal: boolean;
  son?: sonTask[];
};

const progress = (son: sonTask[]) => {
  if (!son || son.length === 0) {
    return "0%";
  }

  const completed = son.filter((task) => task.complete).length;
  const result = Math.round((completed / son.length) * 100);

  return `${result}%`;
};

const TaskInfo = () => {
  const { id, sonId } = useParams<{ id: string; sonId: string }>();
  const [task, setTask] = useState<task_Type | sonTask>();

  useEffect(() => {
    if(id && sonId) {
      fetch(`http://localhost:5000/api/sonTask?id=${id}&sonI=${sonId}`);
    } else {
      fetch(`http://localhost:5000/api/task?id=${id}`);
    }

  }, [id, sonId]);

  if (!task) return <h1>carregando</h1>;

  return (
    <main className="taskInfo_Container">
      <NavBar s_page="view" s_state="fixed" />

      {/* Task Header */}
      <form className="taskInfo-Form_content">
        <section className="taskInfo-Header_container">
          <div className="Edit-checkbox_container"><input type="checkbox" name="" id="" /><span>editar</span></div>
          <button>concluir</button>
        </section>
        
        {/* Task Main Info */}
        <section className="taskInfo-MainInfo_Container">

          {/* name */}
          <div className="taskInfo-Header_content">
            <span className="taskName_Text">
              Nome: 
            </span>
            <div className="TaskInfo-Name_Container">
              <input type="text" name="" id="" value={"name" in task ? task.name : task.sonName}/>
            </div>

            {/* ID */}
            <p className="taskId_Text">{`ID: ${task.ID}`}</p>
          
            {/* TASK DATE */}
            <div className="TaskInfo-FinalDate_Container">

            <span className="taskDate_Text">
              Data Final:
            </span>
            <input type="" name="" id="" value={task.finalDate}/>
            {task.complete ? <p>`Completa em: <span style={{color: "purple"}}>{task.completeDate}</span></p> : null}
              </div>
          </div>

        
        </section>
        

          <div className="taskStatus_container">
            <button className="completeTask_Buttom">
              {task.complete ? "Teste" : "TESTE"}
            </button>
            <p className="taskStatus_Text">
              {`${"fatherVal" in task && task.fatherVal
                ? progress(task.son ?? [])
                : task.complete
                ? "completo"
                : "incompleto"}`}
            </p>
          </div>

        {"fatherVal" in task && task.fatherVal ? (
          <section className="subTasks_Container">
            <p className="taskDescriptionFather_Text">{task.description}</p>
            <h3>Subtasks</h3>
            <div className="subTasks_Content">
              {"son" in task && task.son ? (
                task.son.map(
                  ({
                    ID: sonID_map,
                    sonName,
                    finalDate,
                    completeDate,
                    complete,
                    description,
                  }) => (
                    <div
                      className="sonTask_Container"
                      onClick={() =>
                        window.location.replace(`/task/${id}/${sonID_map}`)
                      }
                    >
                      <div className="sonTaskMainInfo_Container">
                        <span>{sonName}</span>
                        <span>
                          {complete
                            ? `${completeDate} | ${finalDate}`
                            : finalDate}
                        </span>
                      </div>
                      <p>{description}</p>
                    </div>
                  )
                )
              ) : (
                <h1>não temos nenhuma subTask...</h1>
              )}
            </div>
          </section>
        ) : (
          <section className="TaksInfo-Description_Container">
            <h3>Descrição:</h3>
            <p className="taskDescriptionSolo_Text">{task.description}</p>
          </section>
        )}
      </form>
    </main>
  );
};

export default TaskInfo;
