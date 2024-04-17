import { Box, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [circles, setCircles] = useState([{ id: 1, top: 50, left: 50, radius: 25 }]);
  const [moveCount, setMoveCount] = useState(0);

  const moveCircle = (id) => {
    setMoveCount((prev) => prev + 1);
    const circleIndex = circles.findIndex((c) => c.id === id);
    const circle = circles[circleIndex];
    const angle = Math.random() * 360;
    const x = Math.cos(angle) * 200;
    const y = Math.sin(angle) * 200;
    const newTop = Math.min(Math.max(circle.top + y, circle.radius), window.innerHeight - circle.radius);
    const newLeft = Math.min(Math.max(circle.left + x, circle.radius), window.innerWidth - circle.radius);

    const newCircles = [...circles];
    newCircles[circleIndex] = { ...circle, top: newTop, left: newLeft };

    if (moveCount % 5 === 0) {
      newCircles.push({ id: Math.random(), top: newTop, left: newLeft, radius: 12.5 });
      newCircles.push({ id: Math.random(), top: newTop, left: newLeft, radius: 12.5 });
    }

    setCircles(newCircles);
  };

  return (
    <ChakraProvider>
      {circles.map((circle) => (
        <Box key={circle.id} position="absolute" top={circle.top + "px"} left={circle.left + "px"} w={circle.radius * 2 + "px"} h={circle.radius * 2 + "px"} borderRadius="50%" bg="blue.500" onMouseOver={() => moveCircle(circle.id)} transition="top 0.5s, left 0.5s" />
      ))}
    </ChakraProvider>
  );
};

export default Index;
