import "./style.scss";

type soloTaskProps = {
    ID: string;
    name: string;
    finalDate: string;
}

const soloTask_redirect = (ID: string) => {
    window.location.replace(`/task/${ID}`)
}

const soloTask = ({ID, name, finalDate}: soloTaskProps) => {
    return (
        <section className="soloTaskContainer" onClick={() => {soloTask_redirect(ID)}}>
            <h3>{name}</h3>
            <p>{finalDate}</p>
        </section>
    );
}

export default soloTask;