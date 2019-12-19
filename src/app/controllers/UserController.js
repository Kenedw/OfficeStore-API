import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      cnpj: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, name, cnpj, email } = await User.create(req.body);

    return res.json({ id, name, cnpj, email });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      cnpj: Yup.string(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id: userId } = req.body;

    const user = await User.findByPk(userId);

    const { id, name, cnpj, email } = await user.update(req.body);

    return res.json({ id, name, cnpj, email });
  }

  async delete(req, res) {
    const { id: userId } = req.params;

    const user = await User.findByPk(userId);

    const deleted = new Date();

    const { id, name, cnpj, email, deleted_at } = await user.update({
      deleted_at: deleted,
    });

    return res.json({ id, name, cnpj, email, deleted_at });
  }
}

export default new UserController();
