import * as Yup from "yup";

export const transactionSchema = Yup.object({
  date: Yup.date().required().label("Date"),
  concept: Yup.string().min(3).required().max(64).label("Concept"),
  category_id: Yup.number().required().label("Category_id"),
  type: Yup.string().required().max(8).label("Type"),
  amount: Yup.number().required().label("Amount"),
});
