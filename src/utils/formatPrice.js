export default function formatPrice(value) {
  if (value >= 1000) {
    return `$${(value / 1000)
      .toFixed(2) // keep 2 decimals
      .replace(".", ",") // change . to ,
      .replace(/,?0+$/, "")}k`; // remove trailing zeros
  } else {
    return `$${value}`;
  }
}
