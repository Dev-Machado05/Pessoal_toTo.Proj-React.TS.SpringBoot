import sonTask from "./sonTask_type";

type task_Type = {
  ID: string;
  name: string;
  finalDate: string;
  completeDate: string | null;
  late: boolean | null;
  description: string;
  complete: boolean;
  fatherVal: boolean;
  son?: sonTask[];
};

export default task_Type;