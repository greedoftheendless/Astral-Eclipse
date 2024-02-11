<script>
    document.addEventListener('DOMContentLoaded', function () {
        function calculateScore() {
            let score = 0;

            for (let i = 1; i <= 10; i++) \
                const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
                if (selectedAnswer) {
                    const selectedValue = selectedAnswer.getAttribute('id');
                    const correctAnswer = `q${i}a1`; // Assuming the first option is always correct

                    if (selectedValue === correctAnswer) {
                        score++;
                    }
                }
            }

            return score;
        }

        function handleSubmit() {
            const score = calculateScore();
            const totalQuestions = 10;
            const percentage = (score / totalQuestions) * 100;

            alert(`You scored ${score} out of ${totalQuestions}. Your percentage is ${percentage}%`);
        }

        document.getElementById('submit').addEventListener('click', handleSubmit);
    });
</script>
