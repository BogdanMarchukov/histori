import React, {useState} from 'react'
import classes from './homePageContent.module.css'
import {Grid} from '@mui/material'
import Link from 'next/link'

type Props = {}

const HomePageContent = (props: Props) => {

    const [animal, setAnimal] = useState(classes.slotOne)

    const animation = (name: string) => {
        setAnimal(classes.slotStart)
        setTimeout(() => {
            if (name === 'one') {
                setAnimal(classes.slotOne)
            }
            if (name === 'two') {
                setAnimal(classes.slotTwo)
            }
            if (name === 'three') {
                setAnimal(classes.slotThree)
            }
            if (name === 'four') {
                setAnimal(classes.slotFour)
            }

        }, 600)

    }


    return (
        <div className={classes.contentContainer}>
            <Grid container>
                <Grid item md={10} xl={10}>
                    <div className={classes.rootContent}>
                        <Grid container className={`${classes.rootContentCont} ${animal}`}>
                            <Grid className={classes.histori} item md={6}>
                                <h1>История</h1>
                                <hr/>
                                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deserunt dignissimos eos eveniet excepturi illo incidunt necessitatibus, provident unde voluptatem! Excepturi quidem quod suscipit. Ab accusantium architecto consequuntur ipsum tenetur?</span>
                                </p>
                            </Grid>
                            <Grid className={classes.economy} item md={6}>
                                <h1>Общество</h1>
                                <hr/>
                                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deserunt dignissimos eos eveniet excepturi illo incidunt necessitatibus, provident unde voluptatem! Excepturi quidem quod suscipit. Ab accusantium architecto consequuntur ipsum tenetur?</span>
                                </p>
                            </Grid>
                            <Grid className={classes.right} item md={6}>
                                <h1>Право</h1>
                                <hr/>
                                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deserunt dignissimos eos eveniet excepturi illo incidunt necessitatibus, provident unde voluptatem! Excepturi quidem quod suscipit. Ab accusantium architecto consequuntur ipsum tenetur?</span>
                                </p>
                            </Grid>
                            <Grid className={classes.society} item md={6}>
                                <h1>Экономика</h1>
                                <hr/>
                                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deserunt dignissimos eos eveniet excepturi illo incidunt necessitatibus, provident unde voluptatem! Excepturi quidem quod suscipit. Ab accusantium architecto consequuntur ipsum tenetur?</span>
                                </p>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item md={2} xl={2}>
                    <div className={classes.rightContent}>
                        <nav>
                            <ul>
                                <Link  href={'/post/story?id=0'}>
                                    <a>
                                        <li
                                            onMouseOver={() => animation('one')}
                                        >
                                            История
                                        </li>
                                    </a>
                                </Link>

                                <Link
                                    href={'/post/society?id=0'}
                                >
                                    <a>
                                        <li
                                            onMouseOver={() => animation('two')}
                                        >
                                            Общество
                                        </li>
                                    </a>
                                </Link>
                                <Link href={'/post/jurisprudence?id=0'}>
                                    <a>
                                        <li
                                            onMouseOver={() => animation('three')}
                                        >
                                            Право
                                        </li>
                                    </a>
                                </Link>
                                <Link href={'/post/economy?id=0'} >
                                    <a>
                                        <li
                                            onMouseOver={() => animation('four')}
                                        >
                                            Экономика
                                        </li>
                                    </a>
                                </Link>

                            </ul>
                        </nav>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePageContent