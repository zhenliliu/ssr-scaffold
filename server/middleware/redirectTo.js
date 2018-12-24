export default () => {
  return async (ctx, next) => {
    if(/^(\/admin)/.test(ctx.path) && ctx.userAgent.isMobile) {
      ctx.status = 302
      ctx.redirect('/')
    }
    await next()
  }
}