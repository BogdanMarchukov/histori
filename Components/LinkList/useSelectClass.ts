import {useState} from "react";


export function useSelectClass(dirName: string | null, className: string) {

    const [classLink, setClassLink] = useState([className, '', '', '', ''])

    const classSelector = () => {
        switch (dirName) {
            case null :
                setClassLink([className, '', '', '', ''])
                break
            case 'story' :
                setClassLink(['', className, '', '', ''])
                break
            case 'society' :
                setClassLink(['', '', className, '', ''])
                break
            case 'jurisprudence' :
                setClassLink(['', '', '', className, ''])
                break
            case 'economy' :
                setClassLink(['', '', '', '', className])
                break
        }
    }

    return {
        classSelector,
        classLink
    }

}