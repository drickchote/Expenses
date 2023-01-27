export const MONEY_MASK = "R$"; // TODO put this in configuration screen

export const formatMoney = (value: number): string => {
  return value
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+,)/g, "$1.");
};
