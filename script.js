const getSumBtn = document.getElementById("calcTotal");

        const getSum = () => {
            const priceCells = document.querySelectorAll('.price');
            let total = 0;

            priceCells.forEach(cell => {
                total += parseFloat(cell.textContent) || 0;
            });

            // Update the #ans element
            document.getElementById('ans').textContent = total;
        };

        getSumBtn.addEventListener("click", getSum);