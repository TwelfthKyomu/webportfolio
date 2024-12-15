export type CommercialProjectT = {
  id: number;
  name: string;
  description: string;
  imagePath: string | null;
  technologies: string[];
  htmlUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateCommercialProjectDTO = {
  name: string;
  description: string;
  technologies: string[];
  htmlUrl?: string;
  image?: File | null;
}
