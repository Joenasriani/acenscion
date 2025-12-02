// Static Reflection Service (Previously powered by Gemini)
// Providing atmospheric, philosophical feedback without external dependencies.

const REFLECTIONS = [
  "The path reveals itself only to those who walk it.",
  "What seems like a wall is merely a step viewed from the wrong angle.",
  "To rise, one must sometimes descend.",
  "Perspective is the architect of reality.",
  "The bridge exists because you believe it does.",
  "Geometry is the language of silence.",
  "Every ending is a new beginning, rotated 90 degrees.",
  "The mind bends, and the world follows.",
  "Space is not empty; it is full of possibility.",
  "A closed door is simply a wall waiting to turn.",
  "Gravity is a suggestion, not a law.",
  "We do not see things as they are, we see them as we are.",
  "The obstacle is the path.",
  "In the loop of time, every step forward is a return.",
  "Look for the spaces between.",
  "Ascension is not a direction, but a state of mind.",
  "The shadow proves the light.",
  "Turn the world, and you turn yourself.",
  "There is always another way.",
  "Stillness moves mountains.",
  "The architecture of the mind mirrors the architecture of the world.",
  "Walk without feet, fly without wings, think without mind.",
  "The spiral is a circle that learned to grow."
];

export const generateReflection = async (levelId: number, theme: string): Promise<string> => {
  // Simulate network delay for atmospheric effect (the "consulting the stars" moment)
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Deterministic "randomness" based on levelId to ensure variety but consistency per playthrough, 
  // or pure random for variety. Let's go with pure random for the "oracle" feel.
  const randomIndex = Math.floor(Math.random() * REFLECTIONS.length);
  
  return REFLECTIONS[randomIndex];
};