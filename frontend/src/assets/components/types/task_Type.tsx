type sonTask = {
  ID: string;
  sonName: string;
  finalDate: string;
  completeDate: string;
  description: string;
  complete: boolean;
};

type task_Type = {
  ID: string;
  name: string;
  finalDate: string;
  completeDate: string;
  description: string;
  complete: boolean;
  fatherVal: boolean;
  son?: sonTask[];
};

export default task_Type;