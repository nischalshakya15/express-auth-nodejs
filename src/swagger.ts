import { deleteUser, getOneUser, getUsers, postUsers, putUsers, users } from './swagger/users.swagger';
import {
  accessToken,
  authenticatedResponse,
  authenticateUser,
  postAccessToken,
  postAuthenticateUser,
  refreshToken,
  verifyAccessToken
} from './swagger/auth.swagger';

export const swaggerDocument = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Users CRUD API DOCUMENTATION'
  },
  basePath: '/api',
  tags: [
    {
      name: 'Users'
    },
    {
      name: 'Authentication'
    }
  ],
  paths: {
    '/users': {
      get: getUsers,
      post: postUsers
    },
    '/users/{id}': {
      put: putUsers,
      delete: deleteUser,
      get: getOneUser
    },

    '/authenticate': {
      post: postAuthenticateUser
    },
    '/token': {
      post: postAccessToken
    },
    '/verifyAccessToken': {
      post: verifyAccessToken
    }
  },
  definitions: {
    Users: users,
    AuthenticateUser: authenticateUser,
    AuthenticatedResponse: authenticatedResponse,
    RefreshToken: refreshToken,
    AccessToken: accessToken
  }
};
