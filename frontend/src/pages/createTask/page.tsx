import { useState } from "react";
import NavBar from "../../assets/components/global/navbar";
import "./style.scss";

const CreateTask = () => {
  const [child, setChild] = useState(false);
  const [father, setFather] = useState(false);

  const handleCheckbox = (element: string) => {
    if (element === "child") {
      setChild(!child);
      if (father) {
        setFather(!father);
        const fatherCheckbox = document.getElementById(
          "fatherTask_Checkbox"
        ) as HTMLInputElement | null;
        if (fatherCheckbox) {
          fatherCheckbox.checked = false;
        }
      }
    } else if (element === "father") {
      setFather(!father);
      if (child) {
        setChild(!child);
        const childCheckbox = document.getElementById(
          "childTask_Checkbox"
        ) as HTMLInputElement | null;
        if (childCheckbox) {
          childCheckbox.checked = false;
        }
      }
    } else {
      alert("unvalid checkbox. \nplease, try again later...");
    }
  };

  // setFather(!father); if(child){setChild(!child)}
  // {setChild(!child); if(father){setFather(!father)}}

  return (
    <main className="createTask_Container">
      <NavBar s_page="add" s_state="dinamic" />
      <section className="createTask_Content">
        <div className="createTaskForm_Container">
          <h1>Criar task:</h1>
          <form
            action="Act_createTask"
            method="post"
            className="createTaskForm_Content"
          >
            <section className="taskType_container">
              <div>
                <span>Tarefa Pai:</span>{" "}
                <input
                  type="checkbox"
                  name=""
                  id="fatherTask_Checkbox"
                  onClick={() => handleCheckbox("father")}
                />
              </div>
              <div>
                <span>Tarefa Filha:</span>{" "}
                <input
                  type="checkbox"
                  name=""
                  id="childTask_Checkbox"
                  onClick={() => handleCheckbox("child")}
                />
              </div>
            </section>
            <div>
              <span>Pai:</span>{" "}
              <input
                type="text"
                name=""
                id="father_input"
                disabled={!child}
                required={child}
              />
            </div>
            <div>
              <span>Nome:</span>{" "}
              <input type="text" name="" id="name_input" required />
            </div>
            <div>
              <span>Descrição:</span>{" "}
              <textarea
                name=""
                id=""
                className="description_input"
                disabled={father}
              ></textarea>
            </div>
            <div>
              <span>Data Final:</span>{" "}
              <input type="date" name="" id="finalDate_input" required />
            </div>

            <section className="buttons_Container">
              <button
                type="reset"
                onClick={() => {
                  setChild(false);
                  setFather(false);
                }}
              >
                Resetar
              </button>
              <button type="submit">Criar</button>
            </section>
          </form>
        </div>
      </section>
    </main>
  );
};

export default CreateTask;
