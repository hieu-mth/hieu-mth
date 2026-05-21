export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: '1px solid #333', borderRadius: 8, padding: 16, marginBottom: 12 }}>
      {children}
    </div>
  );
}
