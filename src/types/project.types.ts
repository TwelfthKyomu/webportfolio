export type CommercialProjectT = {
  id: number;
  name: string;
  description: string;
  imagePath: string | null;
  technologies: string[];
  liveUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateCommercialProjectDTO = {
  name: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  image?: File | null;
}
