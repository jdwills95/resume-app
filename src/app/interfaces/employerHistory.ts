export interface IEmployerHistoryJSON {
  endDate: string;
  startDate: string;
  employer: string;
  jobTitle: string;
  location: string;
  desc: {
    desct: string;
    task: string[];
  };
}

export interface IEmployerHistory {
  endDate: string;
  startDate: string;
  employer: string;
  jobTitle: string;
  location: string;
  desc: {
    desct: string;
    task: string;
  };
}
