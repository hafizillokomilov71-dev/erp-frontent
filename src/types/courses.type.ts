export interface ICourseCard {
  title: string;
  tag: string;
  tagColor: string;
  rating: string;
  desc: string;
  duration: string;
  lessons: string;
  price: string;
  oldPrice?: string;
  img: string;
}

export interface ICategory {
  label: string;
  count: number;
}

export interface ISortOption {
  label: string;
  value: string;
}

export interface IReview {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

export interface ISimilarCourse {
  id: number;
  title: string;
  category: string;
  rating: number;
  price: string;
  students: number;
  image: string;
  link: string;
}

export interface ICourse {
  id: number;
  title: string;
  category: string;
  rating: number;
  reviews: number;
  students: number;
  duration: string;
  language: string;
  description: string;
  image: string;
  price: string;
  tags: string[];
  whatYouLearn: string[];
  forWhom: string[];
  teacher: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
    experience: string;
    students: number;
    courses: number;
  };
  reviewsList: IReview[];
  similarCourses: ISimilarCourse[];
}
