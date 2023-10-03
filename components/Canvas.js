import { useState, useEffect, useRef } from "react";
import { Stage, Layer, Circle } from "react-konva";
import classes from "./Canvas.module.scss";
import Konva from "konva";

export default function Canvas() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [position, setPosition] = useState({
    isDragging: false,
    x: 50,
    y: 50,
  });
  const initialCircles = [
    { fill: "#AF7AC5" },
    { fill: "#E74C3C" },
    { fill: "#5DADE2" },
    { fill: "#52BE80" },
    { fill: "#8CBEB2" },
    { fill: "#60f0f0" },
    { fill: "#F06060" },
    { fill: "#F4D03F" },
    { fill: "#F39C12" },
  ];
  const [circles, setCircles] = useState(initialCircles);
  const rectRef = useRef();
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current?.offsetHeight && divRef.current?.offsetWidth) {
      setDimensions({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight,
      });
      initialCircles.forEach((circle) => {
        circle.x = Math.floor(
          Math.random() * (divRef.current.offsetWidth - 100) + 50
        );
        circle.y = Math.floor(Math.random() * 200 + 50);
        circle.radius = Math.floor(Math.random() * 40 + 10);
      });
      setCircles(initialCircles);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addCircles = (x, y, fill) => {
    let newCircle = {
      x: x,
      y: y,
      radius: Math.floor(Math.random() * 30 + 10),
      fill: fill,
    };
    setCircles([...circles, newCircle]);
    moveCircles();
  };

  const moveCircles = () => {
    let amplitude = Math.floor(Math.random() * 1500 + 200);
    let period = 1500;
    const anim = new Konva.Animation((frame) => {
      rectRef.current.x(amplitude * Math.sin((frame.time * 2) / period));
    }, rectRef.current.getLayer());
    anim.start();
  };

  return (
    <div ref={divRef} className={classes.container}>
      <Stage width={dimensions.width} height={dimensions.height}>
        <Layer>
          {circles.map((circ, i) => {
            return (
              <Circle
                onClick={(e) =>
                  addCircles(e.target.x(), e.target.y(), circ.fill)
                }
                onTouchStart={(e) =>
                  addCircles(e.target.x(), e.target.y(), circ.fill)
                }
                key={i}
                x={circ.x}
                y={circ.y}
                fill={circ.fill}
                radius={circ.radius}
                ref={rectRef}
                draggable
                shadowBlur={20}
                shadowOpacity={0.5}
                onDragStart={() => {
                  setPosition({
                    isDragging: true,
                  });
                }}
                onDragEnd={(e) => {
                  addCircles(e.target.x(), e.target.y(), circ.fill);
                  setPosition({
                    isDragging: false,
                    x: e.target.x(),
                    y: e.target.y(),
                  });
                }}
              />
            );
          })}
        </Layer>
      </Stage>
      <p>رنگ کلیک کن یا تکان بده</p>
    </div>
  );
}
