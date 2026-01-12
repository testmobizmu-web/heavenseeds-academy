export default function StudioLayout({ children }: { children: React.ReactNode }) {
  // Studio runs inside the normal app document (<html>/<body>) from src/app/layout.tsx
  return children;
}
