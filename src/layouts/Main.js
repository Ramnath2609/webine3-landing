import { Header } from "../components/Header"

export function MainLayout({ children }) {
  return (
    <div className="container-fluid">
      <Header />
      {children}
    </div>
  );
}