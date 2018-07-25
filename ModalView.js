// 'use strict';

// import React from 'react';
// import {
//   asset,
//   View,
//   Model,
//   Animated,
//   StyleSheet
// } from 'react-360';

// export default class Object extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {

//     return (
//       <View>

//        <Entity source={{obj: asset('Girl_v02.obj')}} />

//       </View>
//     );
//   }
// }

// module.exports = Object;
/**
 * The examples provided by Oculus are for non-commercial testing and
 * evaluation purposes only.
 *
 * Oculus reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * OCULUS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
"use strict";

import React from "react";
import Entity from "Entity";
import { Animated, View, asset, Text } from "react-360";
const AnimatedEntity = Animated.createAnimatedComponent(Entity);
import AmbientLight from "AmbientLight";
import PointLight from "PointLight";
/**
 * NavButton is activated either by selecting or by prolonged hovering.
 * On hover, a text label appears, and a fill-circle exapnds around the button.
 * Once selected, the button disappears and a loading spinner takes its place.
 *
 * When using with CylinderLayer, set pixelsPerMeter to convert units, otherise
 * set translateZ to specify distance between camera and button.
 */
class ModalView extends React.Component {
  rotation = new Animated.Value(0);

  constructor(props) {
    super();
  }

  render() {
    return (
      <View>
        {/* <AmbientLight intensity={1.0} color={"#ffffff"} />
        <PointLight
          intensity={0.4}
          style={{ transform: [{ translate: [0, 4, -1] }] }}
        /> */}
        {/* <Text color="white">First part and </Text> */}
        <Entity
          style={{ transform: [{ rotateY: this.rotation }] }}
          source={{ obj: asset("test.obj"), mtl: asset("test.mtl") }}
          lit={true}
          style={{
            color: "white",
            transform: [{ translate: [-4, 0, 0] }, { scale: 0.25 }]
          }}
        />
        <Entity
          // style={{ transform: [{ rotateY: this.rotation }] }}
          source={{ obj: asset("Girl4_v03.obj"), mtl: asset("Girl4_v03.mtl") }}
          lit={true}
          style={{
            color: "#FFF",
            // transform: [{ translate: [-4, 0, 0] }, { scale: 0.25 }]
          }}
        />
      </View>
    );
  }
}

export default ModalView;
