export interface IMovie {
  title: string;
  rating: number;
}


export interface IEmployee {
  name: string;
  role: string;
}


export interface IEmployeeTable {
  name: string;
  dept: string;
  email: string;
}


export interface IProduct {
  title: string;
  price: number;
}

export interface IBook {
  title: string;
  author: string;
  genre: string;
}


export interface IEarning {
  month: string;
  amount: number;
}


export interface ITaskStatus {
  title: string;
  status: "Done" | "Pending";
}

export interface ICourse {
  name: string;
  duration: string;
}


export interface IContact {
  name: string;
  phone: string;
}


export interface IMarks {
  name: string;
  marks: number;
  grade?: "A" | "B" | "C";
}
