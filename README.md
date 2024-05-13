# calculator
Final project of TOP foundations. Calculator using HTML, CSS, Javascript

I plan on adding a decimal input button and a backspace button in additon to improving the look. I plan on coming back to this later.


Comments from ChatGPT that i might want to look at(For now i don't find these to be significantly problematic in my own review):
Here are some potential improvements you could consider for your current code:

    Refactor Display Logic: The logic for handling display updates (displayPopulate and displayResult) could be refactored to make it cleaner and more modular. Consider breaking down the display logic into smaller, reusable functions.

    Error Handling: You're already handling some edge cases like division by zero, which is great. You could further improve error handling by providing more informative error messages to the user when errors occur, rather than just displaying "ERROR".

    Code Duplication: Look for opportunities to reduce code duplication. For example, the logic for clearing input values (clearInputValues) is repeated in multiple places. Consider consolidating such logic into a single function to improve maintainability.

    Consistent Naming: Ensure consistent naming conventions throughout your code. For example, you have variables named both number and numbers. Consistency in naming makes your code easier to understand.

    Optimization: While your code works well for the current functionality, there may be opportunities for optimization, especially if you plan to add more features in the future. For example, you could optimize the display update logic to improve performance, particularly for large numbers of digits.

    Modularity: Consider breaking down your code into smaller, more modular components. This can make your code easier to understand, test, and maintain, especially as your project grows.

    UI/UX Improvements: Enhance the user interface and experience by adding features like keyboard support, hover effects, or animations. You could also experiment with different styles and layouts to make your calculator visually appealing.

    Testing: Implement unit tests to ensure the correctness of your functions, especially for critical operations like arithmetic calculations and input handling.

    Documentation: Add comments and documentation to your code to explain its purpose, usage, and any complex logic. This will make it easier for others (and yourself) to understand and maintain the code in the future.