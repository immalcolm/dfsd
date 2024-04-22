let classroom = [
    ["Alice", "Bob", "Carol", "David"],
    ["Ella", "Fay", "Gary", "Hugo"],
    ["Ivy", "John", "Kay", "Leo"],
    ["Mia", "Nick", "Omar", "Paul"],
    ["Queen", "Ray", "Sue", "Tom"]
  ];
  
  console.log("Original seating:", classroom);
  
  // Moving 'Kay' to 'Alice's seat
  classroom[0][0] = "Kay";
  classroom[2][2] = "Alice";
  
  console.log("Updated seating:", classroom);