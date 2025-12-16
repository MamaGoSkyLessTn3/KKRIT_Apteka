export const getFirstTwoLetters = (text: string) => {
    const arrayText = text.split(' ')

    if (arrayText.length === 1) return text.slice(0, 2)

    const formattedText =
        arrayText[0].slice(0, 1) + arrayText[arrayText.length - 1].slice(0, 1)
    return formattedText.toUpperCase()
}