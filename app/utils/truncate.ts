/**
 * Truncates text to a specified character limit
 * @param text - The text to truncate
 * @param limit - Maximum number of characters (default: 150)
 * @param suffix - Suffix to add when text is truncated (default: "...")
 * @returns Truncated text
 */
export const truncateText = (
    text: string,
    limit: number = 150,
    suffix: string = "..."
): string => {
    if (text.length <= limit) {
        return text;
    }
    return text.substring(0, limit).trim() + suffix;
};
