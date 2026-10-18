import ShapeGrid from "./ShapeGrid";
import "./ShapeGrid.css";

function ShapeGridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <ShapeGrid
        direction="diagonal"
        speed={0.5}
        lineColor="rgba(700, 180, 310, 0.20)"
        cellSize={100}
        radius={0}
        glow={0}
        twinkle={0}
        clickCascade={false}
        intro={false}
        hoverFillColor={false}
      />
    </div>
  );
}

export default ShapeGridBackground;
