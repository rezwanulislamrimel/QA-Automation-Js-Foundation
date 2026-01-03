try {
    console.log("Attempting to execute code...");
    // Code that may throw an error
    let result = riskyOperation(); // Assume riskyOperation is a function that may throw an error
    console.log("Operation successful:", result);} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("Execution completed.");
}