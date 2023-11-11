import { createContext } from "react";

export type CreateEmailContextType = {
  createEmail: string;
  setCreateEmail: (value: string) => void;
};

export const CreateEmailContext = createContext<CreateEmailContextType>({
  createEmail: "",
  setCreateEmail: () => {}
});
export default CreateEmailContext;
