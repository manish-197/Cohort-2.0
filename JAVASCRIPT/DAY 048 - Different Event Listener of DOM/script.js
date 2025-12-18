// Utility: append a message to the on-page log
const logEl = document.getElementById('log')
function appendLog(msg){
	const time = new Date().toLocaleTimeString()
	const div = document.createElement('div')
	div.textContent = `[${time}] ${msg}`
	logEl.prepend(div)
}

// Buttons
const btnClick = document.getElementById('btnClick')
const btnOnce = document.getElementById('btnOnce')
const btnRemove = document.getElementById('btnRemove')

// Example: onclick vs addEventListener
btnClick.onclick = () => appendLog('btnClick.onclick fired')
btnClick.addEventListener('click', () => appendLog('btnClick.addEventListener click fired'))

// once option
btnOnce.addEventListener('click', () => appendLog('btnOnce clicked (once)'), {once:true})

// removeEventListener demo
function removable(){ appendLog('removable listener fired') }
btnRemove.addEventListener('click', function(){
	btnRemove.addEventListener('click', removable)
	appendLog('attached removable listener — click again to run it')
	setTimeout(()=>{
		btnRemove.removeEventListener('click', removable)
		appendLog('removable listener removed by timeout')
	}, 8000)
})

// Input events
const textInput = document.getElementById('textInput')
textInput.addEventListener('input', e => appendLog(`input event: "${e.target.value}"`))
textInput.addEventListener('keydown', e => appendLog(`keydown: ${e.key}`))
textInput.addEventListener('keyup', e => appendLog(`keyup: ${e.key}`))
textInput.addEventListener('focus', () => appendLog('textInput focus'))
textInput.addEventListener('blur', () => appendLog('textInput blur'))

// Form submit
const demoForm = document.getElementById('demoForm')
demoForm.addEventListener('submit', e => {
	e.preventDefault()
	const name = e.target.name.value
	appendLog(`form submitted — name: ${name}`)
	e.target.reset()
})

// Mouse events
const hoverBox = document.getElementById('hoverBox')
hoverBox.addEventListener('mouseover', () => appendLog('hoverBox mouseover'))
hoverBox.addEventListener('mouseout', () => appendLog('hoverBox mouseout'))
hoverBox.addEventListener('mousedown', () => appendLog('hoverBox mousedown'))
hoverBox.addEventListener('mouseup', () => appendLog('hoverBox mouseup'))

// Drag & drop
const dragBox = document.getElementById('dragBox')
const dropZone = document.getElementById('dropZone')
dragBox.addEventListener('dragstart', e => {
	e.dataTransfer.setData('text/plain', 'dragged-item')
	appendLog('dragstart from dragBox')
})
dropZone.addEventListener('dragover', e => e.preventDefault())
dropZone.addEventListener('drop', e => {
	e.preventDefault()
	const data = e.dataTransfer.getData('text/plain')
	appendLog(`drop event — data: ${data}`)
})

// Window/document-level events
window.addEventListener('resize', () => appendLog(`window resized ${window.innerWidth}x${window.innerHeight}`))
window.addEventListener('scroll', () => appendLog('window scrolled'))
document.addEventListener('dblclick', e => appendLog('document dblclick'))
window.addEventListener('contextmenu', e => { e.preventDefault(); appendLog('contextmenu prevented') })
window.addEventListener('wheel', e => appendLog(`wheel delta ${e.deltaY}`))

// Event delegation example: handle clicks on .box elements via parent
document.addEventListener('click', e => {
	const box = e.target.closest('.box')
	if(box) appendLog(`delegated click on box: "${box.textContent.trim().slice(0,30)}"`)
})

