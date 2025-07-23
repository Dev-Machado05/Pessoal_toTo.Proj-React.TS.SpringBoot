import NavBar from "../../assets/components/global/navbar";
import FatherTask from "../../assets/components/taskCards/fatherTask";
import viewObj from "../../simBd/viewResp";
import SoloTask from "../../assets/components/taskCards/soloTask";

import "./style.scss";

type compObj = {
  ID: string;
  name: string;
};

const Complete = () => {
  return (
    <main className="completeTask_container">
      <NavBar s_page="completed" />
      <h1>Complete</h1>
      <section className="completeTask_content">
        {viewObj ? (
          viewObj.map(({ ID, name, finalDate, completeDate, son, complete, fatherVal }) =>
            complete ? (
              fatherVal ? (
                <FatherTask
                  ID={ID}
                  name={name}
                  finalDate={finalDate}
                  completeDate={completeDate}
                  son={son ? son : []}
                  completed={complete}
                  page="completed"
                />
              ) : (
                <SoloTask ID={ID} name={name} finalDate={finalDate} />
              )
            ) : null
          )
        ) : (
          <h2>Carregando pagina</h2>
        )}
      </section>
    </main>
  );
};

export default Complete;
