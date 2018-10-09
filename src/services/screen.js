export const XLARGE = 1200
export const LARGE = 992
export const MIDDLE = 768
export const SMALL = 560

const w = window

class ScreenService {
  handlers = []
  windowWidth = null
  resizeTicking = false

  constructor() {
    w.addEventListener('resize', this.onResizeAction, false)
    this.onResizeAction(false)
  }

  getDisplayType() {
    const currentWindowWidth = this.getWindowWidth()

    return {
      xlarge: currentWindowWidth >= XLARGE,
      large: currentWindowWidth >= LARGE && currentWindowWidth < XLARGE,
      middle: currentWindowWidth >= MIDDLE && currentWindowWidth < LARGE,
      small: currentWindowWidth >= SMALL && currentWindowWidth < MIDDLE,
      xsmall: currentWindowWidth < SMALL
    }
  }

  getWindowWidth() {
    return (
      w.innerWidth ||
      w.document.documentElement.clientWidth ||
      w.document.body.clientWidth
    )
  }

  resizeUpdate = () => {
    const currentWindowWidth = this.getWindowWidth()
    const displayType = this.getDisplayType()

    this.handlers.forEach(handler => {
      handler(currentWindowWidth, displayType)
    })
    this.resizeTicking = false
  }

  onResizeAction = waitFrame => {
    this.lastWindowWidth = this.getWindowWidth()
    this.requestResizeTick(waitFrame)
  }

  requestResizeTick(waitFrame = true) {
    if (this.resizeTicking) {
      return
    }

    if (waitFrame) {
      w.requestAnimationFrame(this.resizeUpdate)
      this.resizeTicking = true
    } else {
      this.resizeTicking = true
      this.resizeUpdate()
    }
  }

  onResize(handler, insta = false) {
    this.handlers.push(handler)

    if (insta) {
      handler(this.getWindowWidth(), this.getDisplayType())
    }
  }
}

export default new ScreenService()
