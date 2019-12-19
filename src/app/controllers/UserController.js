import User from '../models/User';

class UserController {
  async store(req, res) {
    const { id, name, cnpj, email } = await User.create(req.body);

    return res.json({ id, name, cnpj, email });
  }

  async update(req, res) {
    const { id: userId } = req.body;

    const user = await User.findByPk(userId);

    const { id, name, cnpj, email } = await user.update(req.body);

    return res.json({ id, name, cnpj, email });
  }

  async delete(req, res) {
    const { id: userId } = req.params;

    const user = await User.findByPk(userId);

    const deleted = new Date();

    console.log(deleted);

    const { id, name, cnpj, email, deleted_at } = await user.update({
      deleted_at: deleted,
    });

    return res.json({ id, name, cnpj, email, deleted_at });
  }
}

export default new UserController();
