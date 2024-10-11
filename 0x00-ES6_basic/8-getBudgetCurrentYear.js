function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`icome-${getCurrentYear()}`] : income;
  budget[`gdp-${getCurrentYear()}`] : gdp;
  budget[`capita-${getCurrentYear()}`] : capita;

  return budget;
}
