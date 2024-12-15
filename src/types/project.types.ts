export interface CommercialProject {
  id: string;
  title: string;
  description: string;
  imagePath: string | null;
  technologies: string[];
  liveUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateCommercialProjectDTO {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  image?: File | null;
}
