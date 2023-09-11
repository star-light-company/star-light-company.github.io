<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Your head content -->
</head>
<body>
    <header>
        <!-- Your header content -->
        <button id="cta-button">Click Me</button>
        <p id="message">Hello, I'm responsive!</p>
    </header>

    <!-- Other sections of your landing page -->

    <script>
        // JavaScript code goes here

        const ctaButton = document.getElementById("cta-button");
        const messageElement = document.getElementById("message");

        function updateMessage() {
            if (window.innerWidth < 768) {
                messageElement.textContent = "Small screen message";
            } else {
                messageElement.textContent = "Large screen message";
            }
        }

        // Add an event listener to update the message when the screen size changes
        window.addEventListener("resize", updateMessage);

        // Initial message update
        updateMessage();

        // Example: Adding a click event listener to the button
        ctaButton.addEventListener("click", function() {
            alert("Button Clicked!");
            // You can add more functionality here
        });
    </script>
</body>
</html>
