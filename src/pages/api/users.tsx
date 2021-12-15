import { mockUsers } from '../../mocks/api/mock';

async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return res.json(mockUsers);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;
