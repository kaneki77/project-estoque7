document.addEventListener("DOMContentLoaded", function () {
    const itemInput = document.getElementById("item-name");
    const quantityInput = document.getElementById("item-quantity");
    const addButton = document.getElementById("add-button");
    const itemList = document.getElementById("item-list");

    addButton.addEventListener("click", function () {
        const itemName = itemInput.value;
        const quantity = quantityInput.value;

        if (itemName && quantity) {
            const listItem = document.createElement("li");
            listItem.textContent = `${itemName} - Quantidade: ${quantity}`;
            itemList.appendChild(listItem);

            // Limpar os campos de entrada após a adição
            itemInput.value = "";
            quantityInput.value = "";
        }
    });
});

