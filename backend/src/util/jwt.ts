import jwt from 'jsonwebtoken';
import { SESSION_SECRET } from './secrets';

const tokenize = (user_id: string): string => {
  const token = jwt.sign({ id: user_id }, SESSION_SECRET || "fallbacksecretSHHHHHHHHH", {
    expiresIn: '90d',
  });
  return token;
};

export { tokenize };
