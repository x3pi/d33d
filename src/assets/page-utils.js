export function copyToClipboard (text) {
  var textArea = document.createElement('textarea')
  textArea.className = 'fixed-top'
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  document.execCommand('copy')
  document.body.removeChild(textArea)
}

export function copyHeading (id) {
  console.log(window.location)
  const text = window.location.href + '#' + id
  console.log(text)
  const el = document.getElementById(id)

  if (el) {
    el.id = ''
  }

  if ('replaceState' in history) {
    history.replaceState('', '', `${window.location.href}#${id}`)
  }
  else {
    window.location.hash = '#' + id
  }

  if (el) {
    setTimeout(() => {
      el.id = id
    }, 300)
  }

  copyToClipboard(text)

  this.$q.notify({
    message: 'Anchor has been copied to clipboard.',
    color: 'white',
    textColor: 'primary',
    position: 'top',
    actions: [ { icon: 'close', color: 'primary', dense: true, round: true } ],
    timeout: 2000
  })
}

export function slugify (str) {
  return encodeURIComponent(String(str).trim().replace(/\s+/g, '-'))
}
