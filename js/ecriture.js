
const  txtAnim = document.querySelector('h1');


new Typewriter(txtAnim,{
	loop: true,
})
.typeString('Student')
.pause(1000)
.deleteChars(7)
.typeString('Becoming')
.pauseFor(300)
.typeString('<strong> an Engeneer</strong>')
.pause(1000)
.start()
