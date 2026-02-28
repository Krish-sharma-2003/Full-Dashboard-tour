import React, { createContext, useContext, useState } from "react";

export type Project = {
  id: number;
  title: string;
  company: string;
  region: string;
  phase: string;
  completion: string;
};

type FlowContextType = {
  currentStep: number;
  projects: Project[];
  addProject: (project: Project) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
};

const FlowContext = createContext<FlowContextType | undefined>(undefined);

export const FlowProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Project) => {
    setProjects((prev) => [...prev, project]);
    setCurrentStep(3); // go to workspace after creation
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  const goToStep = (step: number) => setCurrentStep(step);

  return (
    <FlowContext.Provider
      value={{
        currentStep,
        projects,
        addProject,
        nextStep,
        prevStep,
        goToStep,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};

export const useFlow = () => {
  const context = useContext(FlowContext);
  if (!context) {
    throw new Error("useFlow must be used within FlowProvider");
  }
  return context;
};