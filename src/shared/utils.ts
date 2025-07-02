
export const formatMoney = (value: number): string => {
  return value
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+,)/g, "$1.");
};

/**
 *
 * @param value in format "R$ 0,00"
 * @returns 0.00
 */

export const moneyToFloat = (value: string): number => {
  let multiplyFactor = 1;

  const decimals = value.split(",")[1];

  if (decimals.length === 1) multiplyFactor = 0.1;

  if (decimals.length === 3) multiplyFactor = 10;

  const floatValue = parseFloat(value.replace(/[^\d\,]/, "").replace(",", "."));

  return floatValue * multiplyFactor;
};

export const daysInThisMonth = () => {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
}

export const daysLeftInThisMonth = () => {
  const now = new Date();
  const totalDays = daysInThisMonth();
  const today = now.getDate();
  return totalDays - today;
}