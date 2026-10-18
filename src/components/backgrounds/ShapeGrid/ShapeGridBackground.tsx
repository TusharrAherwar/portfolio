import ShapeGrid from "./ShapeGrid";
import "./ShapeGrid.css";

function ShapeGridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <ShapeGrid
        direction="diagonal"
        speed={0.5}
        lineColor="rgba(180, 180, 210, 0.20)"
        cellSize={100}
        radius={0}
        glow={0}
        twinkle={0}
        clickCascade={false}
        intro={false}
        hoverFillColor={false}
        dpr={1}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default ShapeGridBackground;