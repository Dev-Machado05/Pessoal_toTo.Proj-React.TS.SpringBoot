import "./style.scss";

// ReactImports
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Components
import NavBar from "../../assets/components/global/navbar";

// elements type
import sonTask from "../../assets/components/types/sonTask_type";
import task_Type from "../../assets/components/types/solo-fatherTask_Type";

// import soloTask from "../../assets/components/taskCards/soloTask";

// type sonTask = {
//   ID: string;
//   sonName: string;
//   finalDate: string;
//   completeDate: string;
//   description: string;
//   complete: boolean;
// };

// type task_Type = {
//   ID: string;
//   name: string;
//   finalDate: string;
//   completeDate: string;
//   description: string;
//   complete: boolean;
//   fatherVal: boolean;
//   son?: sonTask[];
// };

const progress = (son: sonTask[]) => {
  if (!son || son.length === 0) {
    return "0%";
  }

  const completed = son.filter((task) => task.complete).length;
  const result = Math.round((completed / son.length) * 100);

  return `${result}%`;
};

const getDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

const refactorDate = (date: string | null) => {
  if (!date) return "dateNotFound-404";
  const [year, month, day] = date.split("-").map(Number);

  return `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }/${year}`;
};

const getLate = (completeDate: string, finalDate: string) => {
  const [compYear, compMonth, compDay] = completeDate.split("-").map(Number); // 0 day - 1 month - 2 year
  const [finalYear, finalMonth, finalDay] = finalDate.split("-").map(Number); // 0 day - 1 month - 2 year

  const complete = new Date(compYear, compMonth - 1, compDay);
  const final = new Date(finalYear, finalMonth - 1, finalDay);

  return complete > final;
};

const TaskInfo = () => {
  // task id that'll be get into from the url
  const { id, sonId } = useParams<{ id: string; sonId: string }>();
  //task with the start task value
  const [task, setTask] = useState<task_Type | sonTask>();
  //task with the task value that will be edited
  const [editedTask, setEditedTask] = useState<task_Type | sonTask>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id && sonId) {
      fetch(`http://localhost:5000/api/sonTask?id=${id}&sonI=${sonId}`)
        .then((res) => res.json())
        .then((data) => setTask(data))
        .catch((err) => console.log(err));
    } else {
      fetch(`http://localhost:5000/api/task?id=${id}`)
        .then((res) => res.json())
        .then((data) => setTask(data.task))
        .catch((err) => console.log(err));
    }
  }, [id, sonId]);

  useEffect(() => {
    setEditedTask(task);
    console.table(task);
  }, [task]);

  if (!editedTask) return <h1>carregando</h1>;

  return (
    <main className="taskInfo_Container">
      <NavBar s_page="view" s_state="fixed" />

      {/* Task Header */}
      <form className="taskInfo-Form_content">
        <section className="taskInfo-Header_container">
          <div className="checkboxEdit_container">
            <input type="checkbox" name="" id="" />
            <span>Editar</span>
          </div>
          <div className="taskStatus_container">
            <button
              type="button"
              onClick={() => {
                setEditedTask(
                  (prev) =>
                    prev && {
                      ...prev,
                      completeDate: getDate(),
                      complete: !prev.complete,
                      late: getLate(getDate(), editedTask.finalDate),
                    }
                );
                console.log(getLate(getDate(), editedTask.finalDate));
              }}
            >
              {editedTask.complete
                ? "Marcar como incompleta"
                : "Marcar como completa"}
            </button>
            <p
              className="taskStatus_Text"
              style={{
                color:
                  "fatherVal" in editedTask && editedTask.fatherVal
                    ? "#000000"
                    : editedTask.complete
                    ? "rgba(0, 172, 20, 1)"
                    : "rgba(255, 0, 0, 1)",
              }}
            >
              {`${
                "fatherVal" in editedTask && editedTask.fatherVal
                  ? progress(editedTask.son ?? [])
                  : editedTask.complete
                  ? "completo"
                  : "incompleto"
              }`}
            </p>
          </div>
        </section>

        {/* Task Main Info */}
        <section className="taskInfo-MainInfo_Container">
          {/* name */}
          <div className="taskInfo-Header_content">
            <div className="TaskInfo-Name_Container">
              <span className="taskName_Text">Nome:</span>
              <input
                type="text"
                name=""
                id=""
                value={
                  "name" in editedTask ? editedTask.name : editedTask.sonName
                }
              />
            </div>

            {/* ID */}
            <p className="taskId_Text">{`ID: ${editedTask.ID}`}</p>

            {/* TASK DATE */}
            <div className="TaskInfo-FinalDate_Container">
              <div className="finalDate_container">
                <span className="taskDate_Text">Data Final:</span>
                <input type="date" name="" id="" value={editedTask.finalDate} />
              </div>
              {editedTask.complete ? (
                <div className="completeDate_Container">
                  <p> Completa em: </p>
                  <span
                    style={{
                      color: !editedTask.late
                        ? "rgba(0, 172, 20, 1)"
                        : "rgba(255, 0, 0, 1)",
                    }}
                  >
                    {refactorDate(editedTask.completeDate)}
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {"fatherVal" in editedTask && editedTask.fatherVal ? (
          /* Father description */
          <section className="subTasks_Container">
            <p className="taskDescriptionFather_Text">
              {editedTask.description}
            </p>
            <h3>Subtasks</h3>
            <div className="subTasks_Content">
              {"son" in editedTask && editedTask.son ? (
                editedTask.son.map(
                  ({
                    ID: sonID_map,
                    sonName: sonName_map,
                    finalDate: finalDate_map,
                    completeDate: completeDate_map,
                    complete: complete_map,
                    description: description_map,
                  }) => (
                    <div
                      className="sonTask_Container"
                      onClick={() => navigate(`/task/${id}/${sonID_map}`)}
                    >
                      <div>
                        <p>{sonName_map}</p>
                        <p>
                          {complete_map
                            ? `${completeDate_map} | ${finalDate_map}`
                            : finalDate_map}
                        </p>
                        <p>{complete_map ? "Completo" : "Incompleto"}</p>
                      </div>
                      <p>{description_map}</p>
                    </div>
                  )
                )
              ) : (
                <h1>não temos nenhuma subTask...</h1>
              )}
            </div>
          </section>
        ) : (
          /* Solo description */
          <section className="TaksInfo-Description_Container">
            <h3>Descrição:</h3>
            <textarea className="taskDescriptionSolo_Text">
              {editedTask.description}
            </textarea>
          </section>
        )}
        <div className="taksAction_container">
          <button
            type="button"
            onClick={() => {
              console.error("Ação não implementada");
            }}
            className="save_Button"
          >
            resetar
          </button>
          <button
            type="submit"
            onClick={() => {
              alert("ação não implementada");
            }}
            className="save_Button"
          >
            salvar
          </button>
        </div>
      </form>
    </main>
  );
};

export default TaskInfo;
