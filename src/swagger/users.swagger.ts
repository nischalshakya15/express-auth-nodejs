import { authorization } from './auth.swagger';

export const getUsers = {
  tags: ['Users'],
  summary: 'Get all users',
  produces: ['application/json'],
  parameters: [
    authorization,
    {
      name: 'page',
      in: 'query',
      required: true,
      type: 'integer',
      format: 'int64'
    },
    {
      name: 'size',
      in: 'query',
      required: true,
      type: 'integer',
      format: 'int64'
    }
  ],
  responses: {
    200: {
      description: 'OK',
      schema: {
        $ref: '#definitions/Users'
      }
    }
  }
};

export const postUsers = {
  tags: ['Users'],
  summary: 'Create a user',
  produces: ['application/json'],
  parameters: [
    authorization,
    {
      in: 'body',
      name: 'body',
      description: 'User object need to be created',
      required: true,
      schema: {
        $ref: '#definitions/Users'
      }
    }
  ],
  responses: {
    201: {
      description: 'Created',
      schema: {
        $ref: '#definitions/Users'
      }
    }
  }
};

export const putUsers = {
  tags: ['Users'],
  summary: 'Update an existing user',
  parameters: [
    authorization,
    {
      name: 'id',
      in: 'path',
      required: true,
      type: 'integer',
      format: 'int64'
    },
    {
      in: 'body',
      name: 'body',
      required: true,
      schema: {
        $ref: '#definitions/Users'
      }
    }
  ],
  responses: {
    200: {
      description: 'Ok'
    }
  }
};

export const deleteUser = {
  tags: ['Users'],
  summary: 'Remove an existing user',
  parameters: [
    authorization,
    {
      name: 'id',
      in: 'path',
      required: true,
      type: 'integer',
      format: 'int64'
    }
  ],
  responses: {
    200: {
      description: 'OK'
    }
  }
};

export const getOneUser = {
  tags: ['Users'],
  summary: 'Find user by ID',
  description: 'Return the single user',
  parameters: [
    authorization,
    {
      name: 'id',
      in: 'path',
      description: 'ID of user to be return',
      required: true,
      type: 'integer',
      format: 'int64'
    }
  ],
  responses: {
    200: {
      description: 'Ok'
    }
  }
};

export const users = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      format: 'int64'
    },
    username: {
      type: 'string',
      format: 'string'
    },
    password: {
      type: 'string',
      format: 'string'
    },
    roles: {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  }
};
