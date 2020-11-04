/**
 * Lança uma `Exception`
 * @param {string} message Mensagem da Exception.
 * @returns Retorna `name` e `message`
 */
function UserException(message: string): Error {
  return {
    name: 'SignInException',
    message,
  };
}

export default UserException;
