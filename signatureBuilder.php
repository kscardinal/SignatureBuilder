<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Function to sanitize and validate input
    function test_input($data) {
        $data = trim($data); // Remove whitespace from beginning and end of string
        $data = stripslashes($data); // Remove backslashes
        $data = htmlspecialchars($data); // Convert special characters to HTML entities
        return $data;
    }

    // Validate name field
    if (!empty($_POST["name"])) {
        $name = test_input($_POST["name"]);
        // Check if name contains only letters and spaces
        if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
            $nameErr = "Only letters and white space allowed";
        }
    } else {
        $nameErr = "Name is required";
    }

    // Validate message field (assuming textarea)
    if (!empty($_POST["message"])) {
        $message = test_input($_POST["message"]);
        // You can perform additional validation for the message field if needed
    } else {
        $messageErr = "Message is required";
    }

    // If there are no errors, proceed with further processing
    if (empty($nameErr) && empty($messageErr)) {
        // Process the form data, save to database, etc.
        echo "Name: " . $name . "<br>";
        echo "Message: " . $message . "<br>";
        // Example: Save to database or perform other actions
    } else {
        // If there are errors, display them
        echo "<h2>Error:</h2>";
        if (!empty($nameErr)) {
            echo "<p>" . $nameErr . "</p>";
        }
        if (!empty($messageErr)) {
            echo "<p>" . $messageErr . "</p>";
        }
    }
}
?>
