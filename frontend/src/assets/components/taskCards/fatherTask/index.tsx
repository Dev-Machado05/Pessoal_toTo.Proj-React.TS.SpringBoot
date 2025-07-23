import { useState } from "react";
import "./style.scss";

type sonItems = {
  ID: string;
  sonName: string;
  finalDate: string;
  description: string;
  complete: boolean;
};

type fatherTaskProps = {
  ID: string;
  name: string;
  finalDate: string;
  completeDate?: string;
  son: sonItems[];
  completed?: boolean;
  page: "home" | "completed" | "taskInfo";
};

const progress = (son: sonItems[]) => {
  if (!son || son.length === 0) {
    return "0%";
  }

  const completed = son.filter((task) => task.complete).length;
  const result = Math.round((completed / son.length) * 100);

  return `${result}%`;
};

const sonTask_redirect = (fatherid: string, sonId: string) => {
  window.location.replace(`/task/${fatherid}/${sonId}`);
};

const fatherTask_redirect = (id: string) => {
  window.location.replace(`/task/${id}`);
};

const FatherTask = ({
  ID: fatherId,
  name,
  finalDate,
  completeDate,
  son,
  completed,
  page,
}: fatherTaskProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeTaskState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      onClick={changeTaskState}
      onDoubleClick={() => {
        fatherTask_redirect(fatherId);
      }}
      className={`fatherTask_Container ${
        isOpen ? "fatherTask_open" : "fatherTask_close"
      }`}
      key={name}
    >
      <section className="taskHeader">
        <span className="fathertask_Name">{name}</span>
        <span className="fathertask_FinalDate">
          {completed ? `${completeDate}  |  ${finalDate}` : finalDate}
        </span>
        <span className="fathertask_Progress">
          {page === "home" ? progress(son) : completed ? "completo" : null}
        </span>
      </section>

      {isOpen ? (
        <section className="subtask_Container">
          {son.map(({ ID: sonId, sonName, finalDate, complete }) => (
            <div
              key={sonName}
              onClick={() => {
                sonTask_redirect(fatherId, sonId);
              }}
            >
              <span className="subtask_Name">{sonName}</span>
              <span className="subtask_FinalDate">
                {complete ? `${completeDate}  |  ${finalDate}` : finalDate}
              </span>
              <span className="subtask_Status">
                {complete ? "Completo" : "Incompleto"}
              </span>
            </div>
          ))}
        </section>
      ) : null}
    </section>
  );
};

export default FatherTask;
