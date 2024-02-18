"use client"
import { FormDataProvider } from '@/components/MultiStepForm/FormDataContext';

export default function Layout({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <FormDataProvider>
            {children}
        </FormDataProvider>
    );
}