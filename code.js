function calculateTriangleArea(base, height) {
    if (base <= 0 || height <= 0) {
      return "Input is incorrect, as both the base and height must be positive numbers.";
    }
  
    const area = (base * height) / 2;
    return area;
  }
  