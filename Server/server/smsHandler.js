// SMS/Text message handler
module.exports = (text) => {
  if (text.includes("PRICE")) {
    return "Current prices: Maize KSh50/kg, Sugarcane KSh30/kg. Reply BUY to order.";
  }
  return "Invalid request. Text PRICE for market rates.";
};
