type sonObject = {
    ID: string,
    sonName: string,
    finalDate: string,
    completeDate: string,
    description: string,
    complete: boolean;
}

type viewItems = {
    ID: string,
    name: string,
    finalDate: string,
    completeDate: string,
    description: string,
    complete: boolean,
    fatherVal: boolean,
    son?: sonObject[];
}

const viewObj: viewItems[] = [
    {
        ID: "1",
        name: "teste", 
        finalDate: "10/03/2055", 
        completeDate: "",
        description: "teste", 
        complete: false,
        fatherVal: false 
    },
    {
        ID: "2",
        name: "do something", 
        finalDate: "june 13, 2025", 
        completeDate: "",
        description: "just do something", 
        complete: false,
        fatherVal: true, 
        son:
        [
            {ID: "11",sonName: "task teste sla 3651", finalDate: "may 20, 2025", completeDate: "may 15, 2025", description: "something else", complete: true},
            {ID: "12",sonName: "task teste sla 3651", finalDate: "may 21, 2025", completeDate: "may 15, 2025", description: "somewere else", complete: false},
            {ID: "13",sonName: "task teste sla 3651", finalDate: "may 22, 2025", completeDate: "may 15, 2025", description: "someone else", complete: false}
        ]
    },
    {
        ID: "3",
        name: "teste", 
        finalDate: "june 10, 2025", 
        completeDate: "",
        description: "teste", 
        complete: true,
        fatherVal: false
    },
    {
        ID: "4",
        name: "do something", 
        finalDate: "june 13, 2025", 
        completeDate: "june 10, 2025",
        description: "just do something", 
        complete: true,
        fatherVal: true, 
        son:
        [
            {ID: "21",sonName: "task teste sla 3651", finalDate: "may 20, 2025", completeDate: "may 08, 2025", description: "something else", complete: true},
            {ID: "22",sonName: "task teste sla 3651", finalDate: "may 21, 2025", completeDate: "may 09, 2025", description: "somewere else", complete: true},
            {ID: "23",sonName: "task teste sla 3651", finalDate: "may 22, 2025", completeDate: "may 10, 2025", description: "someone else", complete: true}
        ]
    }
]

export default viewObj;