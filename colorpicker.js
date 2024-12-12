document.getElementById('copyColor').addEventListener('click', () => {
  const colorPicker = document.getElementById('colorPicker');
  navigator.clipboard.writeText(colorPicker.value);
  alert('Color copied to clipboard!');
});
