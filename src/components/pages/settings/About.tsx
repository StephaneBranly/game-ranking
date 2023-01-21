import React from 'react';

import MathJax from 'react-mathjax'

import './About.scss';

export interface AboutProps{
}

export default function About(props: AboutProps){
    const eloExpected = `E_{A} = \\frac{1}{1+10^{(R_{B} - R_{A}) / 400}}, E_{B} = \\frac{1}{1+10^{(R_{A} - R_{B}) / 400}}`
    const eloNewScore = `R'_{A} = R_{A} + K(S_{A} - E_{A}), R'_{B} = R_{B} + K(S_{B} - E_{B})`
    const eloLegend = `E (expected), R (rank), K (factor = 32), S (score : 1=win, 0=loss)`
    const eloExpectedTeam = `E_{P,o} = \\frac{1}{1+10^{(R_{o} - R_{P}) / 400}}`
    const eloNewScoreTeam = `R'_{P} = R_{P} + \\sum_{i}{K(S_{A} - E_{P,i})},\\ i \\in opponents(P)`
    return (
        <div className='about'>
            <h2>About...</h2>
            <section>
                <h3>the author</h3>
                <p>Made with love by <a href='https://github.com/StephaneBranly' target="_blank">@stephane_branly</a>.</p>
            </section>
            <section>
                <h3>the project</h3>
                <p>Project made for personal use first. But feel free to use it and to give feedback (positive or negative). You can add <a href='https://github.com/StephaneBranly/game-ranking/issues' target="_blank">issues</a> if you want.</p>
            </section>
            <section>
                <MathJax.Provider>
                    <h3>the algorithm</h3>
                    <p>Currently, the <a href="https://en.wikipedia.org/wiki/Elo_rating_system" target="_blank">ELO</a> algorithm is used.</p>
                    <MathJax.Node formula={eloExpected} />
                    <MathJax.Node formula={eloNewScore} />
                    <MathJax.Node formula={eloLegend} />
                    <p>It is adapted to work with more than 2 players and more than 2 teams.</p>
                    <MathJax.Node formula={eloExpectedTeam} />
                    <MathJax.Node formula={eloNewScoreTeam} />
                    <p>If the project grows, new algorithms can be added and parameterized on the interface.</p>
                </MathJax.Provider>
            </section>
       </div>
  );
}