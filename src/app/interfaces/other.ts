export interface IOther {
  operatingSystems: ISkill;
  software: ISkill;
  certifications: string[];
  businessKnowledge: string[];
}

export interface ISkill {
  advanced?: string[];
  intermediate?: string[];
  beginner?: string[];
}
