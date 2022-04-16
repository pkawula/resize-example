import { useRef, useState } from 'react';
import ResizeDetector, { useResizeDetector } from 'react-resize-detector';

function App() {

    const containerRef = useRef<HTMLDivElement>(null);

    const [sizes, setSizes] = useState<{width: number, height: number}>({ width: 0, height: 0 });

    const { height, width } = useResizeDetector({targetRef: containerRef});
    
    const handleResize = (width?: number, height?: number) => {
    if (width !== undefined && height !== undefined) {
      setSizes({ width, height });
    }

    if (width !== undefined)
      setSizes((prevState) => ({ ...prevState, width }));
    if (height !== undefined)
      setSizes((prevState) => ({ ...prevState, height }));
  };


  return (
    <div style={{ width:"100%", padding: "20px"}}>
      <ResizeDetector handleHeight handleWidth targetRef={containerRef} onResize={handleResize}>
        <div style={{ width: "100%", maxWidth: 400, height: 400, border: "1px solid black" }} ref={containerRef}>
          <div>
            <pre>useResizeDetector</pre>
            <pre>
              {JSON.stringify({ width, height }, undefined, 4)}
            </pre>
          </div>
          <div>
            <pre>ResizeDetector</pre>
            <pre>
              {JSON.stringify(sizes, undefined, 4)}
            </pre>
          </div>
        </div>
      </ResizeDetector>
    </div>
  );
}

export default App;
