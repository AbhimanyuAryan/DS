(function (exports) {
	const {stack} = require('./01-chapter-Stack/')
	const {queue} = require('./02-chapter-Queue/')

	Object.assign(exports, {stack})
}((typeof module.exports !== undefined) ? module.exports :  window))