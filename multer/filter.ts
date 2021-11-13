

export function filter(mimetype: string[]) {
    return{
        configFilter: function fileFilter (req: any, file: any, cb: any) {

            const candidateFile = mimetype.includes(file.mimetype)
            if (candidateFile) {
                cb(null, true)
            }
            else {
                cb(new Error('I don\'t have a clue!'))

            }

        }
    }
}