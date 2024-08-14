// app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;