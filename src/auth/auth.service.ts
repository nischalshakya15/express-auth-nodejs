import { Users } from '../domains/users/users';
import { fetchSingleUserWhere } from '../domains/users/users.repository';
import { BadRequestException } from '../exceptions/BadRequestException';
import * as bcrypt from 'bcryptjs';

export async function authenticate(user: Users): Promise<Users> {
  const { username, password } = user;

  const userResponse: Users = await fetchSingleUserWhere({ username });
  const isPasswordValid = await bcrypt.compare(password, userResponse.password);

  if (!isPasswordValid) {
    throw new BadRequestException('Invalid password');
  }

  return userResponse;
}
