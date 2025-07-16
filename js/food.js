const appId = "a4d8d4a4";     // Replace with your Nutritionix App ID
const appKey = "4fedbbe998a6d7b66f98165324119d5d";   // Replace with your Nutritionix App Key

function searchFood() {
  const food = document.getElementById("foodInput").value;

  fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-app-id": appId,
      "x-app-key": appKey
    },
    body: JSON.stringify({ query: food })
  })
  .then(res => res.json())
  .then(data => {
    const item = data.foods[0];
    document.getElementById("results").innerHTML = `
      <h2>${item.food_name}</h2>
      <p>🍽️ Quantity: ${item.serving_qty} ${item.serving_unit}</p>
      <p>🔥 Calories: ${item.nf_calories}</p>
      <p>🥩 Fat: ${item.nf_total_fat}g</p>
      <p>🍬 Sugar: ${item.nf_sugars}g</p>
      <p>💪 Protein: ${item.nf_protein}g</p>
    `;
  })
  .catch(err => {
    document.getElementById("results").innerHTML = "Oops! Something went wrong.";
    console.error(err);
  });
}
