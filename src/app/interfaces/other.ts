export interface IOther {
  operatingSystems: ISkill;
  software: ISkill;
  certifications: string[];
  businessKnowledge: string[];
}

export interface ISkill {
  advance?: string[];
  intermediate?: string[];
  beginner?: string[];
}
