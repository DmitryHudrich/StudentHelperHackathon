import React from "react";
import { useDeepCompareEffect } from "react-use";
import { isNil } from "ramda";

interface HeaderContext {
  node: React.ReactNode;
  setNode: (node: React.ReactNode) => void;
}

const Context = React.createContext<HeaderContext | null>(null);

export const HeaderProvider = React.memo(function HeaderProvider({ children }: React.PropsWithChildren) {
  const [node, setNode] = React.useState<React.ReactNode>(null);
  const context = React.useMemo(() => ({ node, setNode }), [node, setNode]);

  return <Context.Provider value={context}>{children}</Context.Provider>;
});

export function useHeaderContext(): HeaderContext {
  const context = React.useContext(Context);

  if (isNil(context)) throw new Error("HeaderContext not found");

  return context;
}

export function useHeader(node: React.ReactNode): void {
  const context = useHeaderContext();

  useDeepCompareEffect(() => {
    context.setNode(node);

    return () => {
      context.setNode(null);
    };
  }, [node]);
}
