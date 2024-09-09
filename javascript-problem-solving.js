function calculateMoney(tickets) {
  if (tickets < 0) {
    return "Invalid output";
  }
  const parTicketPrice = 120 * tickets;
  const janitor = 500;
  const costStaff = 8 * 50;
  const totalCost = parTicketPrice - (janitor + costStaff);
  return totalCost;
}

const ticket = calculateMoney(100);
console.log(ticket);
