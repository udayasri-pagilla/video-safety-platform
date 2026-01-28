export function analyzeSensitivity(filename) {
  // Simple heuristic (acceptable for assignment)
  const flaggedWords = ["violence", "adult", "explicit"];
  return flaggedWords.some(word => filename.toLowerCase().includes(word))
    ? "flagged"
    : "safe";
}
