export default function FontTest() {
  return (
    <div className="min-h-screen p-8 space-y-8">
      <h1 className="text-4xl font-bold">Font Test Page</h1>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500 mb-2">Default Sans (Inter):</p>
          <p className="text-2xl font-sans">The quick brown fox jumps over the lazy dog</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500 mb-2">Script Font (Caveat) - using font-script:</p>
          <p className="text-2xl font-script">The quick brown fox jumps over the lazy dog</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500 mb-2">Mono Font (JetBrains Mono):</p>
          <p className="text-2xl font-mono">The quick brown fox jumps over the lazy dog</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500 mb-2">Direct CSS Variable Test:</p>
          <p className="text-2xl" style={{ fontFamily: 'var(--font-caveat)' }}>
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <p className="text-sm font-mono">
          Check browser DevTools → Elements → Computed styles to see if --font-caveat is defined
        </p>
      </div>
    </div>
  );
}
