import NavBar from "../../assets/components/global/navbar";
import viewObj from "../../simBd/viewResp";
import FatherTask from "../../assets/components/taskCards/fatherTask";
import SoloTask from "../../assets/components/taskCards/soloTask";
import "./style.scss";


const Home = () => {
    return (
        <main className="homeContainer">
            <NavBar s_page="view" s_state="fixed"/>
            <h1>To do</h1>
            <section className="taskContainer">
                {viewObj ? 
                viewObj.map(({ID, name, finalDate, complete, fatherVal, son}) => (
                    complete === false && fatherVal === true ? (
                            <FatherTask ID={ID} name={name} finalDate={finalDate} son={son}/>
                        ) : (
                            <SoloTask ID={ID} name={name} finalDate={finalDate}/>
                        ) 
                    )) : <h1>carregando itens</h1>
                }
            </section>
        </main>
    );
}

export default Home;
