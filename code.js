function calculateTriangleArea(base, height) {
    if (base <= 0 || height <= 0) {
      return "Input is incorrect, as both the base and height must be positive numbers.";
    }
  
    const area = (base * height) / 2;
    return area;
  }
  
  // Example usage:
  const base = 5;
  const height = 8;
  const triangleArea = calculateTriangleArea(base, height);
  console.log("The area of the triangle is: " + triangleArea);