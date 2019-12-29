const div = dom.create("<div><span>testDiv</span></div>");
const p = dom.create("<p>段落</p>")
//div2 = dom.create("   <td>hi</td>")
//console.log(div2);
const div3 = dom.create("<div>testDiv</div>")
dom.before(test, div)
dom.after(test, div)
dom.append(container, p)
dom.wrap(test2, div)

const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test, 'title', 'Hello,I am test')
const title = dom.attr(test, 'title')
console.log(title)

dom.style(test, 'border', '1px solid red')
dom.style(test, { color: 'purple' })
console.log(dom.style(test, 'color'))

dom.class.add(test, 'red')
console.log(dom.class.has(test, 'red'))
dom.class.remove(test, 'red')
console.log(dom.class.has(test, 'red'))

const fn = () => {
    console.log('clicked')
}
dom.on(test, 'click', fn)
// dom.off(test, 'click', fn)

console.log(dom.find('#test')[0])
//console.log('---')
console.log(dom.find('#siblings')[0])
//console.log('---')
console.log(dom.find('#s2', dom.find('#siblings')[0])[0])
console.log(dom.parent(dom.find('#s2')[0]))
console.log(dom.children(dom.find('#siblings')[0]))
console.log(dom.siblings(dom.find('#s3')[0]))
console.log(dom.index(dom.find('#s2')[0]))

console.log(dom.next(dom.find('#s2')[0]))
console.log(dom.previous(dom.find('#s2')[0]))
dom.each(dom.children(dom.find('#siblings')[0]), (n) => dom.style(n, 'color', 'red'))
console.log('---')
// const t = dom.find('#siblings')[0]
// dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

