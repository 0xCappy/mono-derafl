import { AttributeDisplayType, NFTAttribute } from "@/types";

const getAttributeValue = (attribute: NFTAttribute) => {
    if (!attribute.display_type) {
        return attribute.value
    }
    switch (attribute.display_type) {
        case AttributeDisplayType.DATE:
            return new Date((attribute.value as number) * 1000).toUTCString()
        default:
            return attribute.value
    }
}

export default getAttributeValue