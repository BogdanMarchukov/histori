import React, {useEffect} from 'react'
import {Grid, Paper} from "@mui/material";
import classes from './cardMenu.module.css'
import Image from "next/image";
import Link from 'next/link'

interface cardType {
    name: string
    srcImg: string
    url: string
    title: string
    description: string
}

type Props = {
    cardList: cardType[]
}

const CardMenu = (props: Props) => {

    const yandex = () => {
        //@ts-ignore
        if (typeof window !== 'undefined' && window.Ya) {
            props.cardList.forEach((i) => {
                //@ts-ignore
                window.Ya.share2(`${i.name}`, {
                    content: {
                        url: 'https://yandex.com',
                        description: i.description,
                        title: i.title,

                    },
                    theme: {
                        services: 'whatsapp,vkontakte,facebook,viber,twitter',
                        lang: 'ru',
                        limit: 0,
                        size: 'm',
                        colorScheme: 'whiteblack',
                        moreButtonType: 'short'
                    }
                });
            })
        }
    }


    useEffect(() => {
        //@ts-ignore
        if (typeof window !== 'undefined' && window.Ya) {
            yandex()
        } else setTimeout(() => yandex(), 300)

    }, [])

    return (
        <article className={classes.cardContainer}>

            <Grid container spacing={2}>
                {
                    props.cardList.map((i, index) => {
                        return (
                            <React.Fragment key={(index + 1) * 101}>
                                <Grid item sm={6}>
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            height: 700
                                        }}
                                    >
                                        <section className={classes.cardContent}>
                                            <div className={classes.cardHeader}>
                                                <Grid
                                                    container
                                                    justifyContent="center"
                                                    alignItems="center"
                                                >
                                                    <Grid item xs={11} lg={10}>
                                                        <h1>{i.name}</h1>
                                                    </Grid>
                                                    <Grid item xs={1} lg={2}>
                                                        <div id={`${i.name}`} className={classes.share}/>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <div className={classes.cardImg}>
                                                <Link href={'/'}>
                                                    <Image
                                                        src={i.srcImg}
                                                        layout={'fill'}
                                                        alt={i.name}
                                                    />
                                                </Link>
                                            </div>
                                            <div className={classes.cardFooter}>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                                                    autem
                                                    culpa est magnam mollitia nemo optio possimus qui, similique
                                                    soluta,
                                                    tempore vel, voluptatibus. Aliquid aperiam mollitia quo
                                                    repellendus,
                                                    repudiandae voluptas?
                                                </p>
                                            </div>

                                        </section>
                                    </Paper>
                                </Grid>
                            </React.Fragment>
                        )
                    })
                }
            </Grid>
        </article>
    )
}

export default CardMenu