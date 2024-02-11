document.addEventListener('DOMContentLoaded', function () {
    // Function to calculate the quiz score
    function calculateScore() {
        let score = 0;

        // Loop through each question
        for (let i = 1; i <= 10; i++) {
            // Assuming the first option is always correct
            const correctAnswer = `q${i}a1`;

            // Check if the first option is selected
            const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
            if (selectedAnswer && selectedAnswer.getAttribute('id') === correctAnswer) {
                score++;
            }
        }

        return score;
    }

    // Function to handle quiz submission
    function handleSubmit() {
        const score = calculateScore();
        const totalQuestions = 10;
        const percentage = (score / totalQuestions) * 100;

        // Redirect to the result page with the score as a query parameter
        window.location.href = `verymuchquizans.html?score=${score}&total=${totalQuestions}&percentage=${percentage}`;
    }

    // Event listener for submit button click
    document.getElementById('submit').addEventListener('click', handleSubmit);
});
