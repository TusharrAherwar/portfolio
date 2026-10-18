
export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}
