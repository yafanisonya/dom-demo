window.dom = {
    create(string) {
        const container = document.createElement('template'); //template可以容纳任意元素
        //container.innerHTML = string;
        //return container.children[0]
        container.innerHTML = string.trim(); //trim()删除空格
        return container.content.firstChild;
    },
    before(node, node2) {   //在node前插入node2
        node.parentNode.insertBefore(node2, node); //insertBefore(a,b) 在b之前插入a
    },
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling) //在node的下一个元素前插入node2就相当于将node2插入到node之后
    },
    append(parent, node) {
        parent.appendChild(node)
    },
    wrap(node, parent) {  //node添加父元素
        dom.before(node, parent) //在node前插入parent
        dom.append(parent, node) //parent插入子元素node
    },
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) {
        //const childNodes = node.childNodes
        //const { childNodes } = node
        const array = []
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },
    attr(node, name, value) { //重载
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    text(node, string) {
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string
            } else {
                node.textContent = string
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },
    html(node, string) {
        if (arguments.lenth === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.style(div,'color','red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                // dom.style(div,'color')
                return node.style[name]
            } else if (name instanceof Object) {
                // dom.style(div,{color,'red'})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        return Array.from(node.parentNode.children).filter(n => n !== node)
    },
    index(node) {
        const list = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {   //x的类型为文本（nodeType为3)
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    }
};
