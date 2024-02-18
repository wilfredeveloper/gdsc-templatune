// components/FormDataContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { z } from 'zod'
import { FormDataSchema } from '@/lib/schema'

type Inputs = z.infer<typeof FormDataSchema>
// Define the shape of the context value
interface FormDataContextValue {
    formData: Inputs | undefined
    setFormData: React.Dispatch<React.SetStateAction<Inputs | undefined>>
  }

// Create a new context for the form data
const FormDataContext = createContext<FormDataContextValue | undefined>(undefined)

// Provider component that wraps its children with the FormDataContext.Provider
export function FormDataProvider({ children }: { children: React.ReactNode }) {
    const [formData, setFormData] = useState<Inputs | undefined>(undefined)
  
    return (
      <FormDataContext.Provider value={{ formData, setFormData}}>
        {children}
      </FormDataContext.Provider>
    )
  }

// Custom hook to use the FormDataContext and return its value
export function useFormData() {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
}