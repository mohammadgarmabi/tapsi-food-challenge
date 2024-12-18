import React from "react";

type ProvidersType = [React.ElementType, Record<string, unknown>];

type ChildrenType = {
  children: React.ReactElement[];
};

const buildProvidersTree = (componentsWithProps: ProvidersType[]) => {
  const initialComponent = ({ children }: ChildrenType) => children;

  return componentsWithProps.reduce(
    (
      AccumulatedComponents: React.ElementType,
      [Provider, props = {}]: ProvidersType
    ) => {
      return ({ children }: ChildrenType) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent
  );
};

export default buildProvidersTree;
