import * as Yup from 'yup';
import Item from '../models/Item';

class ItemController {
  async index(req, res) {
    const { page = 1, per_page = 10 } = req.query;

    const { userId } = req;

    const items = await Item.findAll({
      where: { user_id: userId },
      limit: per_page,
      offset: (page - 1) * per_page,
    });

    if (!items) {
      return res.status(404).json({ error: 'Yours items not found' });
    }

    return res.json(items);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      value: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const data = req.body;

    data.user_id = req.userId;

    const { id, name, value } = await Item.create(data);

    return res.json({ id, name, value });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      value: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { itemid } = req.params;

    if (!itemid) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const item = await Item.findByPk(itemid);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const { id, nome, value } = await item.update(req.body);

    return res.json({ id, nome, value });
  }

  async delete(req, res) {
    const { itemid } = req.params;

    if (!itemid) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const item = await Item.findByPk(itemid);

    if (!item) {
      return res.status(404).json('Item not found');
    }

    const { id } = item;

    await item.destroy();

    return res.json({ success: `Item ${id} has been deleted` });
  }
}

export default new ItemController();
