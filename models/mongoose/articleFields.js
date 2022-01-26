import {RawDraftContentState} from "draft-js";

const articleFields = () => {
    return {
        article: {
            type: RawDraftContentState,
            required: true
        },
        tableCells: {
            type: Array,
            required: true
        },
        keyWords: {
            type: Array,
            required: false
        },
        name: String
    }
}

module.exports = articleFields