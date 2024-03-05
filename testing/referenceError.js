try {
  // Existing code causing a ReferenceError
  const result = someUndefinedVariable + 5;
} catch (error) {
  console.error(`Caught an error: ${error.message}`);
} finally {
  console.log("Execution completed.");
}
