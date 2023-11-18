import { createContext, useState } from "react";

export const RecoverAccountContext = createContext<{
  email: string;
  setEmail: (value: string) => void;
}>({ email: "", setEmail(value) {} });

export default function RecoverAccountContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [email, setEmail] = useState("");

  return (
    <RecoverAccountContext.Provider value={{ email, setEmail }}>
      {children}
    </RecoverAccountContext.Provider>
  );
}
