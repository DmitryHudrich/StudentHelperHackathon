export interface RegisterDto {
  email: string;
  password: string;
  fullName: string;
  universityId: number;
  age: number;
}

export interface LoginDto {
  email: string;
  password: string;
}
