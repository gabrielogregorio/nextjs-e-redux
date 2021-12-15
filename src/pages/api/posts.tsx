import { mockPosts } from '../../mocks/api/mock';

async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return res.json(mockPosts);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;
