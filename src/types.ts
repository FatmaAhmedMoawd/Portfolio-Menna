export interface Project {
  id: string;
  title: string;
  description: string;
  concept: string;
  tools: string[];
  image: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface Tool {
  name: string;
  icon: string;
}
