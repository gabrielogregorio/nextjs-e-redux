export const mockUsers = [
  {
    id: 1,
    name: 'gabriel gregorio',
    username: 'ogregorio'
  },
  {
    id: 2,
    name: 'katline fonseca',
    username: 'katfonseca'
  },
  {
    id: 3,
    name: 'piter parker',
    username: 'miranha'
  }
];

export const mockPosts = [
  {
    id: 1,
    title: 'Bem vindo ao mundo dos devs',
    body: 'O mundo do desenvolvimento de software inclui pesquisar no Google e estudar',
    userId: 1,
    likes: [2],
    commentIds: []
  },
  {
    id: 2,
    title: 'Porque vocês falam que eu sou o miranha',
    body: 'Eu já disse e repito, não sou o miranha!!!!! ',
    userId: 3,
    likes: [],
    commentIds: [1, 2, 3]
  }
];

export const mockComments = [
  {
    id: 1,
    userId: 1,
    postId: 2,
    msg: 'Não é não né? Sei...'
  },

  {
    id: 2,
    userId: 2,
    postId: 2,
    msg: 'Isso só porque ele estava testando'
  },
  {
    id: 3,
    userId: 1,
    postId: 2,
    msg: 'Agora a casa caiu, ficou sem casa'
  }
];
