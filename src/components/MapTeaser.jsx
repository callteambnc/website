import React from 'react'
import { StyleSheet } from 'react-look'
import theme from '../theme'
import { Link } from 'react-router'
import { onTablet } from '../media-queries'

const styles = StyleSheet.create({
  map: {
    maxWidth: '100%',
    opacity: 0.3
  },
  mapContainer: {
    backgroundColor: 'white',
    textAlign: 'center',
    height: '100%',
    width: '100%',
    position: 'relative'
  },
  overlayContainer: {
    position: 'absolute',
    zIndex: 1000,
    height: '100%',
    width: '100%',
    textAlign: 'center'
  },
  overlayBody: {
    paddingTop: '1.5em',
    paddingBottom: '1.5em',
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
    position: 'relative',
    width: '50%',
    fontWeight: 300,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    top: '50%',
    transform: 'translateY(-50%)',
    [onTablet]: {
      width: '100%'
    }
  },
  overlayBackground: {
    backgroundColor: theme.colors.lightBlue,
    height: '100%',
    width: '100%',
    opacity: 0.5,
    marginTop: '-1.5em',
    marginLeft: '-1.5em',
    position: 'absolute',
    zIndex: -1,
    borderRadius: 5,
    [onTablet]: {
      borderRadius: 0
    }
  },
  overlayText: {
    fontSize: 25,
    color: theme.colors.darkGray,
    [onTablet]: {
      fontSize: 18
    }
  },
  bold: {
    fontWeight: 600,
    color: theme.colors.orange
  },
  findCityButton: {
    ...theme.text.button,
    marginTop: '1.5em',
    [onTablet]: {
      marginTop: '1em'
    }
  },
  findCityLink: {
    color: 'white',
    textDecoration: 'none',
    border: 'none'
  }
})

const MapTeaser = () => (
  <div className={styles.mapContainer}>
    <div className={styles.overlayContainer}>
      <div className={styles.overlayBody}>
        <div className={styles.overlayBackground} />
        <div className={styles.overlayText}>
          We're coming to a city near you to start organizing the next steps of the political revolution.
        </div>
        <div className={styles.findCityButton}>
          <Link className={styles.findCityLink} to='/tour'>Find Your City</Link>
        </div>
      </div>
    </div>
    <img
      className={styles.map}
      alt="Let's get together to elect a Brand New Congress that works for all"
      src='/images/map-1577x965@2x.png'
    />
  </div>
)

export default MapTeaser
