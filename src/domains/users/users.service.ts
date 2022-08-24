import { Users } from './users';
import * as userRepository from './users.repository';
import * as bcrypt from 'bcryptjs';
import { BadRequestException } from '../../exceptions/BadRequestException';
import { Query } from '../query';
import * as pagination from '../../utils/pagination';

export async function fetchAll(query: Query): Promise<Users[]> {
  const { page, size } = query;
  const limit: number = pagination.limit(size);
  const offset: number = pagination.offset(page, limit);
  return await userRepository.fetchAll(offset, limit);
}

export async function create(user: Users): Promise<Users> {
  const { username } = user;
  const isUserExist = await userRepository.fetchSingleUserWhere({ username });
  if (isUserExist) {
    throw new BadRequestException('User already exists');
  }
  user.password = await bcrypt.hash(user.password, 10);
  return await userRepository.create(user);
}

export async function update(id: number, user: Users): Promise<Users> {
  return await userRepository.update(id, user);
}

export async function remove(id: number): Promise<void> {
  await userRepository.remove(id);
}

export async function fetchById(id: number): Promise<Users> {
  return await userRepository.fetchById(id);
}

export async function count(): Promise<number> {
  return await userRepository.count();
}
