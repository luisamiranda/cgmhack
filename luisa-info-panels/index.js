import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  NativeModules,
  Environment,
  VrButton,
  Pano,
} from 'react-360';
import { Surface } from 'react-360-web';
const { AudioModule } = NativeModules;

import InfoButton from './src/components/InfoButton';
import Tooltip from './src/components/Tooltip';
import NavButton from './src/components/NavButton';

// const cylindricalPanel = new Surface(
//   4096, /* width */
//   720, /* height */
//   Surface.SurfaceShape.Cylinder /* shape */
// );

// const flatPanel = new Surface(
//   600, /* width */
//   600, /* height */
//   Surface.SurfaceShape.Flat /* shape */
// );

export default class TourofTCGM extends React.Component {
  static defaultProps = {tourSource: 'tourofTCGM.json'};

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      locationId: null,
      nextLocationId: null,
      rotation: null,
    };
  }

  componentDidMount() {
    fetch(asset(this.props.tourSource).uri)
      .then(response => response.json())
      .then(responseData => {
        this.init(responseData);
      })
      .done();
    }
    
  componentWillReceiveProps(nextProps) {
    const isLoading = this.state.nextLocationId !== this.state.locationId;
    if (isLoading) {
      Environment.setBackgroundImage(
        asset(photos[this.state.nextLocationId].uri),
        {
          format: '2D', 
          fadeIn: 'none', 
          rotateTransform: [{rotationY: '90'}],
        } 
      );
    }
    this.setState({
      // Now that the new photo is loaded, update the locationId.
      locationId: this.state.nextLocationId,
    });
  }

  init(tourConfig) {
    // Initialize the tour based on data file.
    this.setState({
      data: tourConfig,
      locationId: tourConfig.firstPhotoId,
      nextLocationId: tourConfig.firstPhotoId,
      rotation: tourConfig.firstPhotoRotation +
        (tourConfig.photos[tourConfig.firstPhotoId].rotationOffset || 0),
    });
  }

  render() {
    if (!this.state.data) {
      return null;
    }
    const isLoading = this.state.nextLocationId !== this.state.locationId;

    const locationId = this.state.locationId;
    const photos = this.state.data.photos;
    const photoData = (locationId && this.state.data.photos[locationId]) || null;
    const tooltips = (photoData && photoData.tooltips) || null;
    const rotation =
    this.state.data.firstPhotoRotation + ((photoData && photoData.rotationOffset) || 0);
    const soundEffects = this.state.data.soundEffects;
    const ambient = this.state.data.soundEffects.ambient;

    
    AudioModule.playEnvironmental({
      // Background audio that plays throughout the tour.
      source: asset(ambient.uri),
      volume: 0.3, 
    });
    
    return (
      <View>
        {console.log(locationId)}
        {console.log(tooltips[0].text)}
        {tooltips &&
          tooltips.map((tooltip, index) => {
          // Iterate through items related to this location, creating either
          // info buttons, which show tooltip on hover, or nav buttons, which
          // change the current location in the tour.
            if (tooltip.type) {
              return (
                <InfoButton
                  key={index}
                  onEnterSound={asset(soundEffects.navButton.onEnter.uri)}
                  // pixelsPerMeter={PPM}
                  source={asset('ui/info-button-1.png')}
                  tooltip={tooltip}
                  // translateX={degreesToPixels(tooltip.rotationY)}
                 />
              );
            }
            return (
              <NavButton
                key={tooltip.linkedPhotoId}
                isLoading={isLoading}
                onClickSound={asset(soundEffects.navButton.onClick.uri)}
                onEnterSound={asset(soundEffects.navButton.onEnter.uri)}
                onInput={() => {
                  // Update nextLocationId, not locationId, so tooltips match
                  // the currently visible pano; pano will update locationId
                  // after loading the new image.
                  this.setState({
                    nextLocationId: tooltip.linkedPhotoId,
                  });
                }}
                // pixelsPerMeter={PPM}
                source={asset(this.state.data.nav_icon)}
                textLabel={tooltip.text}
                // translateX={degreesToPixels(tooltip.rotationY)}
              />
            );
          })}
        <View style={styles.panel}>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              The Colored Girls Museum
            </Text>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('TourofTCGM', () => TourofTCGM);
