export type User = {
  id: string,
  first: string,
  last: string,
  born: number,
}

export default interface IApi {
  checkUserExists: (id: string) => Promise<boolean>;
  addUser: () => Promise<string>;
  getAllUsers: () => Promise<Array<User>>;
  getUser: (id: string) => Promise<User>;
}
