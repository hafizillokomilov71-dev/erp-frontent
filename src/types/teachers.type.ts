export interface ITeacherCard {
  id: number;
  name: string;
  role: string;
  category: string;
  bio: string;
  stats: [string, string][];
  img: string;
}

export interface ITeacherCategory {
  label: string;
  value: string;
}

export interface ITeacherDetail extends ITeacherCard {
  experience: string;
  description: string;
  skills: string[];
  workExperience: {
    period: string;
    position: string;
    company: string;
    description: string;
  }[];
  certificates: {
    name: string;
    issuer: string;
    year: string;
  }[];
  schedule: {
    days: string;
    time: string;
  }[];
  courses: {
    id: number;
    title: string;
    students: number;
    rating: number;
    price: string;
  }[];
  reviewsList: {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    date: string;
    text: string;
  }[];
  totalStudents: number;
  totalCourses: number;
  rating: number;
  startDate: string;
}
