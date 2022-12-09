<div class="wrapper">
  <textarea class= "story"> </textarea>
  <button id = "set-text" type = "button"> insertar historia </button>
  <button id= "clear-text" type = "button"> limpiar historia </button>
  <textarea class="result" > </textarea>
</div>
[11:53, 3/12/2022] Ignacio Marin: .wrapper {
  display: flex;
  flex-direction: column;
  width: 200px;
}

button {
  margin-top: 10px;
}

#clear-text{
  margin-bottom: 10px;
}
[11:53, 3/12/2022] Ignacio Marin: const setText = document.getElementById('set-text');
const clearText = document.querySelector('#clear-text');
const story = document.querySelector('.story');

setText.addEventListener('click', () => {
  const text = story.value;
  result.textContent = text;
  // result.textContent = 'Aqui inicia la historia';
});
setText.addEventListener('mouseover', ()=>{
  set.Text.classList.add('hover')
})
setText.addEventListener('mouseout',()=> {
  setText.classList.remove('hover')
})

clearText.addEventListener('click', () => {
  story.value = '';
  story.textContent = '';
});

function activar(){
  alert ("se activo el click")
}