"use strict";

const counterValue = document.getElementById("counter-value");
let count = 0;

function updateCounter(change) {
  count = change === 0 ? 0 : Math.max(0, count + change); 
  counterValue.textContent = count;
}
document.getElementById("btn-increase").addEventListener("click", () => updateCounter(1));
document.getElementById("btn-decrease").addEventListener("click", () => updateCounter(-1));
document.getElementById("btn-reset").addEventListener("click", () => updateCounter(0));

const previewInput = document.getElementById("preview-input");
const previewText = document.getElementById("preview-text");
const charCount = document.getElementById("char-count");
const PLACEHOLDER = "Your text will appear here";

function updatePreview() {
  const value = previewInput.value;
  const isEmpty = value.length === 0;
  previewText.textContent = isEmpty ? PLACEHOLDER : value;
  previewText.classList.toggle("empty", isEmpty);
  charCount.textContent = value.length;
}
previewInput.addEventListener("input", updatePreview); 
document.getElementById("btn-clear").addEventListener("click", () => {
  previewInput.value = "";
  updatePreview();
  previewInput.focus();
});

const images = {
  burger: { src: "images/burger.png", alt: "A delicious burger", caption: "Burger" },
  coch:     { src: "images/coch.png",     alt: "A beautiful coch",                        caption: "Coch" },
  oi:       { src: "images/oi.png",       alt: "A stunning oi",                           caption: "Oi" }
};
const imageSelect = document.getElementById("image-select");
const landscapeImg = document.getElementById("img");
const landscapeCaption = document.getElementById("caption");

function showImage(key) {
  const item = images[key];
  landscapeImg.src = item.src;
  landscapeImg.alt = item.alt;
  landscapeCaption.textContent = "Caption: " + item.caption;
}
imageSelect.addEventListener("change", () => showImage(imageSelect.value));
showImage(imageSelect.value); 

const keyInput = document.getElementById("key-input");
const keyStatus = document.getElementById("key-status");
const keyResult = document.getElementById("key-result");


keyInput.addEventListener("keydown", (event) => {
  const keyName = event.key === " " ? "Space" : event.key;
  keyStatus.textContent = "Status: you pressed " + keyName;

  if (event.key === "Enter") {
    event.preventDefault(); 
    keyResult.textContent = keyInput.value || "(empty)";
  } else if (event.key === "Escape") {
    keyInput.value = "";
    keyResult.textContent = "(empty)";
  }
});

const card = document.getElementById("hover-card");
const instruction = document.getElementById("card-instruction");
const DEFAULT_TEXT = "Hover over the card or focus it with the Tab key.";
const ACTIVE_TEXT = "Card is active! Move away or press Tab to leave.";

function setHighlight(on) {
  card.classList.toggle("highlight", on);
  instruction.textContent = on ? ACTIVE_TEXT : DEFAULT_TEXT;
}
card.addEventListener("mouseenter", () => setHighlight(true));
card.addEventListener("mouseleave", () => setHighlight(false));
card.addEventListener("focus", () => setHighlight(true));
card.addEventListener("blur", () => setHighlight(false));
