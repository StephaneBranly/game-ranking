import React from 'react';
import {
  makeStyles,
  createStyles,
  Container,
  Grid,
  Card,
  Typography,
  Link,
  useMediaQuery,
} from "@material-ui/core"
import MathJax from 'react-mathjax'

const useStyles = makeStyles((theme) =>
createStyles({  
    padding: {
        padding: theme.spacing(1),
    },
    subSection:
    {
        paddingLeft: theme.spacing(1),
        marginLeft: theme.spacing(2),
        borderLeft: "3px solid rgba(0,0,0,.2)"
    }
}),
);

export interface AboutProps{
}

export default function About(props: AboutProps){
    const classes = useStyles(); 
  
    const eloExpected = `E_{A} = \\frac{1}{1+10^{(R_{B} - R_{A}) / 400}}, E_{B} = \\frac{1}{1+10^{(R_{A} - R_{B}) / 400}}`
    const eloNewScore = `R'_{A} = R_{A} + K(S_{A} - E_{A}), R'_{B} = R_{B} + K(S_{B} - E_{B})`
    const eloLegend = `E (expected), R (rank), K (factor = 32), S (score : 1=win, 0=loss)`
    const eloExpectedTeam = `E_{P,o} = \\frac{1}{1+10^{(R_{o} - R_{P}) / 400}}`
    const eloNewScoreTeam = `R'_{P} = R_{P} + \\sum_{i}{K(S_{A} - E_{P,i})},\\ i \\in opponents(P)`
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <Grid item>
            <Card>
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="stretch"
                    spacing={4}
                    className={classes.padding}
                >
                    <Grid item>
                        <Typography variant="h4" color="primary">About...</Typography>
                    </Grid>
                    <Grid item>
                        <Container className={classes.subSection}>
                            <Typography variant="h5" color="textSecondary">the author</Typography>
                            <Typography>Made with love by <Link href='https://github.com/StephaneBranly' target="_blank">@stephane_branly</Link>.</Typography>
                        </Container>
                    </Grid>
                    <Grid item>
                        <Container className={classes.subSection}>
                            <Typography variant="h5" color="textSecondary">the project</Typography>
                            <Typography>Project made for personal use first. But feel free to use it and to give feedback (positive or negative). You can add <Link href='https://github.com/StephaneBranly/game-ranking/issues' target="_blank">issues</Link> if you want.</Typography>
                        </Container>
                    </Grid>
                    <Grid item>
                        <Container className={classes.subSection}>
                            <MathJax.Provider>

                            <Typography variant="h5" color="textSecondary">the algorithm</Typography>
                            <Typography>Currently, the <Link href="https://en.wikipedia.org/wiki/Elo_rating_system" target="_blank">ELO</Link> algorithm is used.</Typography>
                            {matches && <><MathJax.Node formula={eloExpected} />
                            <MathJax.Node formula={eloNewScore} />
                            <MathJax.Node formula={eloLegend} /></>}
                            <Typography>It is adapted to work with more than 2 players and more than 2 teams.</Typography>
                            {matches && <><MathJax.Node formula={eloExpectedTeam} />
                            <MathJax.Node formula={eloNewScoreTeam} /></>}
                            <Typography>If the project grows, new algorithms can be added and parameterized on the interface.</Typography>
                            </MathJax.Provider>

                        </Container>
                    </Grid>
                </Grid>
            </Card>
       </Grid>
  );
}