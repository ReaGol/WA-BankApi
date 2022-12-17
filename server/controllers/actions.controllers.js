import { User } from "../models/user.model";

export const deposit = async (req, res) => {
  try {
    const { amount } = req.body;
    await User.findOneAndUpdate(
      { id: req.params.id },
      { $inc: { cash: amount } }
    );
    const user = await User.findOne({ id: req.params.id });
    res.send(user);
  } catch (error) {
    res.status(404).send(error);
  }
};

export const updateCredit = async (req, res) => {
  try {
    const { amount } = req.body;
    const user = await User.findOne({ id: req.params.id });
    if (!amount || amount < 0) {
      return res.status(403).send("Amount should be a positive number");
    }
    const updated = User.findOneAndUpdate(
      { id: req.params.id },
      { $inc: { cash: amount } }
    );
    res.send(updated);
  } catch (error) {
    res.status(404).send(error);
  }
};

export const withdraw = async (req, res) => {
  try {
    const { amount } = req.body;
    const user = await User.findOne({ id: req.params.id });
    if (!user) {
      return res.status(404).send("Not found");
    }
    if (user.credit + user.cash >= amount) {
      await User.findOneAndUpdate(
        { id: req.params.id },
        { $inc: { cash: -amount } }
      );
    } else if (user.credit + user.cash < amount) {
      return res.status(400).send("Not enough funds");
    }
    return res.status(200).send(user);
  } catch (error) {
    res.status(404).send(error);
  }
};

export const transfer = async (req, res) => {
  try {
    const { from, to, amount } = req.body;
    const giver = await User.findUserById({ id: from });
    if (giver.credit + giver.cash >= amount) {
      await User.updateOne({ id: from }, { $inc: { cash: -amount } });
      const receiver = await User.findOneAndUpdate(
        { id: to },
        { $inc: { cash: amount } }
      );
      return res.status(200).send("Transfer completed");
    } else {
      return res.status(400).send("User does not have enough funds");
    }
  } catch (error) {
    res.status(403).send(error);
  }
};
