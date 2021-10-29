import * as Yup from "yup";

export const categorySchema = Yup.object({
  name: Yup.string().required("Name not provided").min(3).max(24).label("Name"),
});
