import { PageType } from './table';
export interface SearchUser {
  username?: string;
  nickName?: string;
  email?: string;
}

export type SearchUserWithPage = PageType & SearchUser;

interface UserSearchResult {
  id: number;
  username: string;
  nickName: string;
  email: string;
  headPic: string;
  createTime: Date;
}

export interface UserList {
  totalCount: number;
  users: UserSearchResult[];
}
