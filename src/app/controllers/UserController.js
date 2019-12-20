import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async index(req, res) {
    const { id: user_id } = req.params;

    if (!user_id) {
      return res.status(404).json({ error: 'Validation fails' });
    }

    const user = await User.findByPk(user_id, {
      attributes: ['id', 'name', 'email', 'cnpj'],
    });

    return res.json(user);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      cnpj: Yup.string()
        .length(14)
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, name, cnpj, email } = await User.create(req.body).catch(e => {
      res.status(401).json({ error: e.errors[0].message || e.message });
    });

    return res.json({ id, name, cnpj, email });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      cnpj: Yup.string().length(14),
      oldPassword: Yup.string(),
      password: Yup.string().when('oldPassword', (oldPassword, field) =>
        oldPassword ? field.required() : field
      ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required() : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { oldPassword, password, confirmPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(404).json({ error: 'user not found' });
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ oldPassword: 'Password does not math' });
    }

    if (confirmPassword !== password) {
      return res.status(401).json({
        confirmPassword: 'Confirmation of password not equal password',
      });
    }

    const { id, name, cnpj, email } = await user.update(req.body);

    return res.json({ id, name, cnpj, email });
  }

  async delete(req, res) {
    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(404).json('User not found');
    }

    const { name } = user;

    await user.destroy();

    return res.json({ success: `User ${name} has been deleted` });
  }
}

export default new UserController();
