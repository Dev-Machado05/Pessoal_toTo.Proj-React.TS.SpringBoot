import NavBar from "../../assets/components/global/navbar";

const RemoveTask = () => {
    return (
        <main className="RemoveTaskContainer">
            <NavBar s_page="delete"/>
            
        </main>
    )
}

/* 
Find a task trough the card ID and name;

when we try to find a task(to delete it) it will have every single input into into the page, BUT the only ones 
that will be able to write is into the ID and Name...

when the user add a Name and if ther's the need to add the ID (In case of more than one task with similar or the 
same name) all the other inputs will have their own data into it

INPUTS TO BE ADDED: 

1 - Name;
2 - ID;
3 - Date;
4 - description;
5 - Status (text with this format: Status: Completo/Incompleto);
6 - Input with the father task name
7 - number of sons with a button to show them.
8 - the Button to delete

ID: "2",
        name: "do something", 
        finalDate: "june 13, 2025", 
        description: "just do something", 
        complete: false,
        fatherVal: true, 
        son:
*/

// ---------- //

// FIREBASE FIRESTORE(because it's typed)  |||  addDoc() (provides a random id when create a data)

export default RemoveTask;