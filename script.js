const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceCells = document.querySelectorAll('.price');
  let total = 0;
  priceCells.forEach(cell => {
    total += parseFloat(cell.textContent) || 0;
  });
  const table = document.querySelector('table');

  const prevTotalRow = document.querySelector('.total-row');
  if (prevTotalRow) {
    prevTotalRow.remove();
  }
  const totalRow = document.createElement('tr');
  totalRow.classList.add('total-row');

  const totalCell = document.createElement('td');
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: Rs ${total}`;
  totalCell.style.fontWeight = 'bold';

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
