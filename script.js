function toggleDetail() {
  const detailView = document.getElementById("detailView");
  detailView.style.display = detailView.style.display === "block" ? "none" : "block";
}

function toggleRRN() {
  const mask = document.getElementById("rrnMask");
  const isChecked = document.getElementById("toggle-rrn").checked;
  mask.textContent = isChecked ? "051201-3823913" : "051201-3******";
}
