import User from '../models/User';

class UserController {
  async store(req, res) {
    const { id, name, cnpj, email } = User.create(req.body);

    return res.json({ id, name, cnpj, email });
  }

  async update(req, res) {
    return res.json({ World: 'alive' });
  }

  async delete(req, res) {
    // TODO fazer a exclução do cliente só alterando o deleted_at, pois a conta só é deletada apos X dias.
    return res.json({ World: 'alive' });
  }
}

export default new UserController();
