type sonObject = {
    ID: string;
    sonName: string;
    finalDate: string;
    description: string;
    complete: boolean;
}

type viewItems = {
    ID: string;
    name: string;
    finalDate: string;
    description: string;
    complete: boolean;
    fatherVal: boolean;
    son: sonObject[];
}

const viewObj: viewItems[] = [
    {
        ID: "1",
        name: "teste", 
        finalDate: "june 10, 2025", 
        description: "teste", 
        complete: false,
        fatherVal: false, 
        son:[]
    },
    {
        ID: "2",
        name: "do something", 
        finalDate: "june 13, 2025", 
        description: "just do something", 
        complete: false,
        fatherVal: true, 
        son:
        [
            {ID: "1",sonName: "task teste sla 3651", finalDate: "may 20, 2025", description: "something else", complete: true},
            {ID: "2",sonName: "task teste sla 3651", finalDate: "may 21, 2025", description: "somewere else", complete: false},
            {ID: "3",sonName: "task teste sla 3651", finalDate: "may 22, 2025", description: "someone else", complete: false}
        ]
    }
]

export default viewObj;