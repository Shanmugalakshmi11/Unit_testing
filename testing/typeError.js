try {
  // Existing code causing a TypeError
  const greeting = null;
  greeting.toUpperCase();
} catch (error) {
  console.error(`Caught an error: ${error.message}`);
} finally {
  console.log("Execution completed.");
}
