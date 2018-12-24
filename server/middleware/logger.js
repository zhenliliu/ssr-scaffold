
export default () => {
    return async (ctx, next) => {
        await next()
    }
}