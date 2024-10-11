function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
  }
  
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {};
  
    budget[getCurrentYear()] = income;
    budget[getCurrentYear()] = gdp;
    budget[getCurrentYear()] = capita;
  
    return budget;
  }