var q = document.createElement('link')
q.href = "Provider.css"
document.head.appendChild(q)
var w = document.createElement('div')
w.classList.add("popup")
document.body.appendChild(w)
var e = document.createElement('h3')
e.classList.add("popup")
e.innerHTML = "Hello"
w.appendChild(e)
var r = document.createElement('p')
r.classList.add("popup")
r.innerHTML = "Just a notification..."
w.appendChild(r)
var t = document.createElement('a')
t.classList.add("popup")
t.innerHTML = "OK"
w.appendChild(t)
var y = document.createElement('a')
y.classList.add("popup")
y.innerHTML = "Cancel"
w.appendChild(y)
