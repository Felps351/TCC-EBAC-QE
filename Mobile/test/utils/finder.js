async function findFirst(selectors, timeout = 30000, name = 'elemento') {
    let found;
    try {
        await browser.waitUntil(async () => {
            for (const selector of selectors) {
                const elements = await $$(selector);
                for (const el of elements) {
                    if (await el.isDisplayed()) {
                        found = el;
                        return true;
                    }
                }
            }
            return false;
        }, { timeout, interval: 1000 });
    } catch (e) {
        throw new Error(
            `${name} não encontrado após ${timeout}ms.\nSeletores tentados:\n - ${selectors.join('\n - ')}`
        );
    }
    return found;
}

module.exports = { findFirst };