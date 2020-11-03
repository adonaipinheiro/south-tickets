export type User = {
  id: string;
  first: string;
  last: string;
  born: number;
};

export default interface ApiInterface {
  /**
   * Função `checkUserExists`
   * @param {string} id `id` do usuário.
   * @returns {Promise<boolean>} Retorna `true` ou `false`
   */
  checkUserExists(id: string): Promise<boolean>;
  /**
   * Função `addUser`
   * @returns {string} Retorna uma mensagem de erro ou sucesso
   */
  addUser(): Promise<string>;
  /**
   * Função `getAllUsers`
   * @returns {Array<User>} Retorna um Array de Usuários
   */
  getAllUsers(): Promise<Array<User>>;
  /**
   * Função `getUser`
   * @returns {Array<User>} Retorna um Usuário
   */
  getUser(id: string): Promise<User>;
}
