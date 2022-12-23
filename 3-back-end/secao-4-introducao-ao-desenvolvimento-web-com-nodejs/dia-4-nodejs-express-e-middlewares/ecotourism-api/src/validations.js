const validateName = (req, res, next) => {
  const requiredProperties = ['name'];
  const { name } = req.body;
  if (!requiredProperties.every((property) => property in req.body)) {
    return res.status(400).json({ message: 'O campo name é obrigatório' });
  } else if (name.length < 4) {
    return res
      .status(400)
      .json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  } else {
    next();
  }
};

const validatePrice = (req, res, next) => {
  const requiredProperties = ['price'];
  const { price } = req.body;
  if (!requiredProperties.every((property) => property in req.body)) {
    return res.status(400).json({ message: 'O campo price é obrigatório' });
  } else if (price < 0) {
    return res.status(400).json({
      message: 'O campo price deve ser um número maior ou igual a zero',
    });
  } else {
    next();
  }
};

module.exports = {
  validateName,
  validatePrice,
};
