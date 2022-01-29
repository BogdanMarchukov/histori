import React, {useEffect} from 'react'
import classes from './navigationRight.module.css'
import ListNavigation from "../ListNavigation/ListNavigation";
import {RootState} from "../../redux/redusers/indexReduser";
import {useDispatch, useSelector} from "react-redux";
import {RawDraftContentState} from "draft-js";
import {navigationArticle} from "../../redux/action-creators/editorTextActionCreator";
import Link from'next/link'

type Props = {}
const NavigationRight = (props: Props) => {

    const selector = (state: RootState) => {
        return {
            // @ts-ignore
            paragraphList: state.textReducer.paragraphList,
            // @ts-ignore
            currentArticleCash: state.textReducer.currentArticleCash,
            // @ts-ignore
            articleList: state.textReducer.articleList,
            // @ts-ignore
            dirName: state.textReducer.dirName

        }
    }

    // @ts-ignore
    const {
        paragraphList,
        currentArticleCash,
        articleList,
        dirName
    }: { paragraphList: string[], currentArticleCash: RawDraftContentState | null, articleList: object[] | null, dirName: string | null } = useSelector(selector)

    const dispatch = useDispatch()

  function createCallback() {
        if (paragraphList) {
                return paragraphList.map(paragraphName => {
                    return () => navigationArticle(dispatch, currentArticleCash, paragraphName)
                })
        } else return []


  }



    const createLink = () => {
        let linkList: string[] = []
        let listName: string[] = []
        if (articleList) {
            articleList.forEach((obj, index) => {
                const [id] = Object.keys(obj)
                // @ts-ignore
                const name = obj[id]

                listName.push(name)
                linkList.push(`/post/${dirName}?id=${id}`)

            })

        }
        return {
            linkList,
            listName
        }

    }

    const {linkList, listName} = createLink()


    return (
        <div className={classes.nawWrapper}>
            <div className={classes.navigation}>
                <nav>
                         <ListNavigation categoryName={'Сожержание'} list={paragraphList ?? []}
                                           callbackHandlers={createCallback()} firstPoint={'в начало'}/>
                    <div className={classes.margin}>
                        <ListNavigation categoryName={'Список статей'} list={listName}
                                        linksHref={linkList}
                                         firstPoint={null}/>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default NavigationRight