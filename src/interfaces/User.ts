export interface UserInterface {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export interface BasicUserInterface {
  name: string;
  job: string;
};

export interface CreatedUserInterface extends BasicUserInterface {
  id: string; // string? wtf?
  createdAt: string;
};

export interface UpdatedUserInterface extends BasicUserInterface {
  updatedAt: string;
};
