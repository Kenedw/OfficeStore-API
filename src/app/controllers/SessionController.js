import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      cnpj: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, cnpj, password } = req.body;

    let query;
    if (email) {
      query = { email };
    } else {
      query = { cnpj };
    }

    const user = await User.findOne({
      where: query,
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(406).json({ error: 'Password does not math' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        cnpj,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expriresIn,
      }),
    });
  }
}

export default new SessionController();
