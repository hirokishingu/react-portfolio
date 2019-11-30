import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Motion, spring, StaggeredMotion } from 'react-motion';
import HrkSngSky from './sky/sky';
import MediaCard from './cards/hrk-sng-card';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    cardMargin: {
      margin: 50,
    }
  }),
);

export default function MainBody() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
        {value => <div>{value.x}</div>}
      </Motion>
      <StaggeredMotion
        defaultStyles={[{ h: 0 }, { h: 0 }, { h: 0 }]}
        styles={prevInterpolatedStyles => prevInterpolatedStyles!.map((_, i) => {
          return i === 0
            ? { h: spring(100) }
            : { h: spring(prevInterpolatedStyles![i - 1].h) }
        })}>
        {(interpolatingStyles: { map: (arg0: (style: any, i: any) => JSX.Element) => React.ReactNode; }) =>
          <div>
            {interpolatingStyles.map((style, i) =>
              <div key={i} style={{ border: '1px solid', height: style.h }} />)
            }
          </div>
        }
      </StaggeredMotion>
      <div className={classes.cardMargin}>
        <MediaCard></MediaCard>
      </div>
      <HrkSngSky></HrkSngSky>
    </React.Fragment>
  );
}