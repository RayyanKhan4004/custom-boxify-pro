export type Industry = {
  image: string;
  imageKey?: string | null;
  imageUrl?: string | null;
  name: string;
  objectPosition?: string;
  slug?: string;
};

export type IndustryApiResponse = {
  id: string;
  imageKey: string | null;
  imageUrl: string | null;
  isActive: boolean;
  name: string;
  slug: string;
  sortOrder: number;
};
