import { useEffect, useState } from "react";

import "./style.scss";

import NavBar from "../../assets/components/global/navbar";
import viewObj from "../../simBd/viewResp";
import FatherTask from "../../assets/components/taskCards/fatherTask";
import SoloTask from "../../assets/components/taskCards/soloTask";

import task_Type from "../../assets/components/types/solo-fatherTask_Type";

const Home = () => {

  const [tasks, setTasks] = useState<task_Type>()


  ///------
  useEffect(() => {
    fetch('http://localhost:5000/api/allTasks')
      .then((res) => res.json())
      .then((data) => setTasks(data.allTasks))
      .catch((err) => console.error(err));
    }, []);
  ///------
  
  console.log(tasks);

  return (
    <main className="home_Container">
      <NavBar s_page="view" s_state="fixed" />
      <h1>To do</h1>
      <section className="viewTask_Container">
        {viewObj ? (
          viewObj.map(({ ID, name, finalDate, complete, fatherVal, son }) =>
            complete === false ? (
              fatherVal === true ? (
                <FatherTask
                  ID={ID}
                  name={name}
                  finalDate={finalDate}
                  son={son ? son : []}
                  completed={complete}
                  page="home"
                />
              ) : (
                <SoloTask ID={ID} name={name} finalDate={finalDate} />
              )
            ) : null
          )
        ) : (
          <h1>carregando itens</h1>
        )}
      </section>
    </main>
  );
};

export default Home;
