export interface ProfileData {
    id: number;
    name: string;
    photo: string;
    email: string;
    bio?: string;
  }
  export interface EventForm {
    id: number;
    name: string;
    date: string;
    description: string;
    content: string;
  }
  export interface MessageForm {
    id: number;
    sender: string;
    content: string;
    time: string;
    viewed: boolean;
  }