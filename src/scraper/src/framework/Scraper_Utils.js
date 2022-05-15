// Utilities that may be of use for later reference
module.exports = {
    getInnerText: async (element) => {
        return await (await element.getProperty("innerText")).jsonValue();
    },
    getInnerHTML: async (element) => {
        return await (await element.getProperty("innerHTML")).jsonValue();
    },
    getAttribute: async (element, attrName) => {
        return await (await element.getProperty(attrName)).jsonValue();
    },
    getElementValue: async (element) => {
        return await (await element.getProperty("value")).jsonValue();
    },
}