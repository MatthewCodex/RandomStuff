// Use the following to include this JavaScript file 
// <script src="script1.js"></script>
var q = document.createElement('link')
q.rel = "stylesheet"
q.href = "Provider.css"

var w = document.createElement('div')
w.classList.add("popup")

var e = document.createElement('h3')
e.innerHTML = "Testing"

var r = document.createElement('p')
r.innerHTML = "Testing"

var t = document.createElement('a')
t.classList.add("popup bh")
t.innerHTML = "Testing"

var y = document.createElement('a')
y.classList.add("bh")
y.innerHTML = "Testing"

document.head.appendChild(q)
w.appendChild(e)
w.appendChild(r)
w.appendChild(t)
w.appendChild(y)
document.body.appendChild(w)
      
