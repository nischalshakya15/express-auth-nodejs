import * as db from '../utils/db';

const TABLE_NAME = 'refresh_tokens';

export async function insert(userId: number | null, refreshToken: string, expiryTime: Date) {
  return db.connection()(TABLE_NAME).insert({
    user_id: userId,
    refresh_token: refreshToken,
    expiry_time: expiryTime
  });
}
