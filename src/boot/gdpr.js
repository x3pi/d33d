import { Cookies, Notify, openURL } from 'quasar'

if (Cookies.has('gdpr') !== true) {
  Notify.create({
    message: `Các công cụ bên thứ ba của chúng tôi sử dụng cookie, cần thiết cho hoạt động của nó và cần thiết để đạt được các mục đích được minh họa trong chính sách cookie.`,
    multiline: true,
    classes: 'doc-gdpr',
    timeout: 0,
    position: 'bottom-right',
    actions: [
      {
        label: 'Accept',
        color: 'yellow',
        handler () {
          Cookies.set('gdpr', true, { expires: 5 * 365 })
        }
      },
      {
        label: 'Learn more',
        color: 'grey',
        noDismiss: true,
        handler () {
          openURL('https://www.iubenda.com/privacy-policy/40685560/cookie-policy?an=no&s_ck=false&newmarkup=yes')
        }
      }
    ]
  })
}
