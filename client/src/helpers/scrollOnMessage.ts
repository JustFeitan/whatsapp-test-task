export const scrollOnMessage = (messages: HTMLElement ) => {
    if (!messages) return
    setTimeout(() => {
        messages.scrollTo({
            top: messages.scrollHeight,
            left: 0,
            behavior: "smooth"
        })
    }, 0)

}
