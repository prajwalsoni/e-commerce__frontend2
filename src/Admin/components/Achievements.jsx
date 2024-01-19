import styled from '@emotion/styled'
import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const TriangleImg = styled('img')({
    right: 0,
    bottom: 0,
    height: 170,
    position: 'absolute'
})

const TrophyImg = styled('img')({
    right: 36,
    bottom: 20,
    height: 98,
    position: 'absolute'
})

const Achievements = () => {
    return (
        <Card sx={{ position: 'relative', bgcolor: "#67f2d1" }}>
            <CardContent>
                <Typography variant='h6' sx={{ letterSpacing: '0.25px', fontStyle: 'italic', fontFamily: 'Dancing Script, cursive' }}>
                    SoniSelects.com
                </Typography>

                <Typography variant='body2' >Congratulations 🥳</Typography>

                <Typography variant='h5' sx={{ my: 3.1, color: 'primary.main' }}>
                    420.8k
                </Typography>
                <Button size='small' variant='contained'>
                    View Sales
                </Button>
                <TriangleImg src=''></TriangleImg>
                <TrophyImg alt='trophy' src='/images/trophy.png' />
            </CardContent>
        </Card>

    )
}
export default Achievements