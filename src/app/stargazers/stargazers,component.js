import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // !
 * # Semantic UI 2.2.9 - Loader
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
  // ******************************
            Loader
******************************
  // Standard Size
  'uiloader': {
    'display': 'none',
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'zIndex': '1000',
    'WebkitTransform': 'translateX(-50%) translateY(-50%)',
    'transform': 'translateX(-50%) translateY(-50%)'
  },
  // Static Shape
  'uiloader:before': {
    'position': 'absolute',
    'content': '''',
    'top': [{ 'unit': '%V', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'borderRadius': '500rem',
    'border': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }]
  },
  // Active Shape
  'uiloader:after': {
    'position': 'absolute',
    'content': '''',
    'top': [{ 'unit': '%V', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'WebkitAnimation': 'loader 0.6s linear',
    'animation': 'loader 0.6s linear',
    'WebkitAnimationIterationCount': 'infinite',
    'animationIterationCount': 'infinite',
    'borderRadius': '500rem',
    'borderColor': '#767676 transparent transparent',
    'borderStyle': 'solid',
    'borderWidth': '0.2em',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'transparent' }]
  },
  // Active Animation
  // Sizes
  'uiminiloader:before': {
    'width': [{ 'unit': 'rem', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1 }],
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'rem', 'value': -0.5 }]
  },
  'uiminiloader:after': {
    'width': [{ 'unit': 'rem', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1 }],
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'rem', 'value': -0.5 }]
  },
  'uitinyloader:before': {
    'width': [{ 'unit': 'rem', 'value': 1.14285714 }],
    'height': [{ 'unit': 'rem', 'value': 1.14285714 }],
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'rem', 'value': -0.57142857 }]
  },
  'uitinyloader:after': {
    'width': [{ 'unit': 'rem', 'value': 1.14285714 }],
    'height': [{ 'unit': 'rem', 'value': 1.14285714 }],
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'rem', 'value': -0.57142857 }]
  },
  'uismallloader:before': {
    'width': [{ 'unit': 'rem', 'value': 1.71428571 }],
    'height': [{ 'unit': 'rem', 'value': 1.71428571 }],
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'rem', 'value': -0.85714286 }]
  },
  'uismallloader:after': {
    'width': [{ 'unit': 'rem', 'value': 1.71428571 }],
    'height': [{ 'unit': 'rem', 'value': 1.71428571 }],
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'rem', 'value': -0.85714286 }]
  },
  'uiloader:before': {
    'width': [{ 'unit': 'rem', 'value': 2.28571429 }],
    'height': [{ 'unit': 'rem', 'value': 2.28571429 }],
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'rem', 'value': -1.14285714 }]
  },
  'uiloader:after': {
    'width': [{ 'unit': 'rem', 'value': 2.28571429 }],
    'height': [{ 'unit': 'rem', 'value': 2.28571429 }],
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'rem', 'value': -1.14285714 }]
  },
  'uilargeloader:before': {
    'width': [{ 'unit': 'rem', 'value': 3.42857143 }],
    'height': [{ 'unit': 'rem', 'value': 3.42857143 }],
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'rem', 'value': -1.71428571 }]
  },
  'uilargeloader:after': {
    'width': [{ 'unit': 'rem', 'value': 3.42857143 }],
    'height': [{ 'unit': 'rem', 'value': 3.42857143 }],
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'rem', 'value': -1.71428571 }]
  },
  'uibigloader:before': {
    'width': [{ 'unit': 'rem', 'value': 3.71428571 }],
    'height': [{ 'unit': 'rem', 'value': 3.71428571 }],
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'rem', 'value': -1.85714286 }]
  },
  'uibigloader:after': {
    'width': [{ 'unit': 'rem', 'value': 3.71428571 }],
    'height': [{ 'unit': 'rem', 'value': 3.71428571 }],
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'rem', 'value': -1.85714286 }]
  },
  'uihugeloader:before': {
    'width': [{ 'unit': 'rem', 'value': 4.14285714 }],
    'height': [{ 'unit': 'rem', 'value': 4.14285714 }],
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'rem', 'value': -2.07142857 }]
  },
  'uihugeloader:after': {
    'width': [{ 'unit': 'rem', 'value': 4.14285714 }],
    'height': [{ 'unit': 'rem', 'value': 4.14285714 }],
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'rem', 'value': -2.07142857 }]
  },
  'uimassiveloader:before': {
    'width': [{ 'unit': 'rem', 'value': 4.57142857 }],
    'height': [{ 'unit': 'rem', 'value': 4.57142857 }],
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'rem', 'value': -2.28571429 }]
  },
  'uimassiveloader:after': {
    'width': [{ 'unit': 'rem', 'value': 4.57142857 }],
    'height': [{ 'unit': 'rem', 'value': 4.57142857 }],
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'rem', 'value': -2.28571429 }]
  },
  // -------------------
      Coupling
--------------------
  // Show inside active dimmer
  'uidimmer loader': {
    'display': 'block'
  },
  // Black Dimmer
  'uidimmer uiloader': {
    'color': 'rgba(255, 255, 255, 0.9)'
  },
  'uidimmer uiloader:before': {
    'borderColor': 'rgba(255, 255, 255, 0.15)'
  },
  'uidimmer uiloader:after': {
    'borderColor': '#FFFFFF transparent transparent'
  },
  // White Dimmer (Inverted)
  'uiinverteddimmer uiloader': {
    'color': 'rgba(0, 0, 0, 0.87)'
  },
  'uiinverteddimmer uiloader:before': {
    'borderColor': 'rgba(0, 0, 0, 0.1)'
  },
  'uiinverteddimmer uiloader:after': {
    'borderColor': '#767676 transparent transparent'
  },
  // ******************************
             Types
******************************
  // -------------------
        Text
--------------------
  'uitextloader': {
    'width': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }],
    'textAlign': 'center',
    'fontStyle': 'normal'
  },
  // ******************************
            States
******************************
  'uiindeterminateloader:after': {
    'WebkitAnimationDirection': 'reverse',
    'animationDirection': 'reverse',
    'WebkitAnimationDuration': '1.2s',
    'animationDuration': '1.2s'
  },
  'uiloaderactive': {
    'display': 'block'
  },
  'uiloadervisible': {
    'display': 'block'
  },
  'uiloaderdisabled': {
    'display': 'none'
  },
  'uiloaderhidden': {
    'display': 'none'
  },
  // ******************************
            Variations
******************************
  // -------------------
        Sizes
--------------------
  // Loader
  'uiinverteddimmer uiminiloader': {
    'width': [{ 'unit': 'rem', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.78571429 }]
  },
  'uiminiloader': {
    'width': [{ 'unit': 'rem', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.78571429 }]
  },
  'uiinverteddimmer uitinyloader': {
    'width': [{ 'unit': 'rem', 'value': 1.14285714 }],
    'height': [{ 'unit': 'rem', 'value': 1.14285714 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.85714286 }]
  },
  'uitinyloader': {
    'width': [{ 'unit': 'rem', 'value': 1.14285714 }],
    'height': [{ 'unit': 'rem', 'value': 1.14285714 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.85714286 }]
  },
  'uiinverteddimmer uismallloader': {
    'width': [{ 'unit': 'rem', 'value': 1.71428571 }],
    'height': [{ 'unit': 'rem', 'value': 1.71428571 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.92857143 }]
  },
  'uismallloader': {
    'width': [{ 'unit': 'rem', 'value': 1.71428571 }],
    'height': [{ 'unit': 'rem', 'value': 1.71428571 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.92857143 }]
  },
  'uiinverteddimmer uiloader': {
    'width': [{ 'unit': 'rem', 'value': 2.28571429 }],
    'height': [{ 'unit': 'rem', 'value': 2.28571429 }],
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'uiloader': {
    'width': [{ 'unit': 'rem', 'value': 2.28571429 }],
    'height': [{ 'unit': 'rem', 'value': 2.28571429 }],
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'uiinverteddimmer uilargeloader': {
    'width': [{ 'unit': 'rem', 'value': 3.42857143 }],
    'height': [{ 'unit': 'rem', 'value': 3.42857143 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.14285714 }]
  },
  'uilargeloader': {
    'width': [{ 'unit': 'rem', 'value': 3.42857143 }],
    'height': [{ 'unit': 'rem', 'value': 3.42857143 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.14285714 }]
  },
  'uiinverteddimmer uibigloader': {
    'width': [{ 'unit': 'rem', 'value': 3.71428571 }],
    'height': [{ 'unit': 'rem', 'value': 3.71428571 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.28571429 }]
  },
  'uibigloader': {
    'width': [{ 'unit': 'rem', 'value': 3.71428571 }],
    'height': [{ 'unit': 'rem', 'value': 3.71428571 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.28571429 }]
  },
  'uiinverteddimmer uihugeloader': {
    'width': [{ 'unit': 'rem', 'value': 4.14285714 }],
    'height': [{ 'unit': 'rem', 'value': 4.14285714 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.42857143 }]
  },
  'uihugeloader': {
    'width': [{ 'unit': 'rem', 'value': 4.14285714 }],
    'height': [{ 'unit': 'rem', 'value': 4.14285714 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.42857143 }]
  },
  'uiinverteddimmer uimassiveloader': {
    'width': [{ 'unit': 'rem', 'value': 4.57142857 }],
    'height': [{ 'unit': 'rem', 'value': 4.57142857 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.71428571 }]
  },
  'uimassiveloader': {
    'width': [{ 'unit': 'rem', 'value': 4.57142857 }],
    'height': [{ 'unit': 'rem', 'value': 4.57142857 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.71428571 }]
  },
  // Text Loader
  'uiminitextloader': {
    'minWidth': [{ 'unit': 'rem', 'value': 1 }],
    'paddingTop': [{ 'unit': 'rem', 'value': 1.78571429 }]
  },
  'uitinytextloader': {
    'minWidth': [{ 'unit': 'rem', 'value': 1.14285714 }],
    'paddingTop': [{ 'unit': 'rem', 'value': 1.92857143 }]
  },
  'uismalltextloader': {
    'minWidth': [{ 'unit': 'rem', 'value': 1.71428571 }],
    'paddingTop': [{ 'unit': 'rem', 'value': 2.5 }]
  },
  'uitextloader': {
    'minWidth': [{ 'unit': 'rem', 'value': 2.28571429 }],
    'paddingTop': [{ 'unit': 'rem', 'value': 3.07142857 }]
  },
  'uilargetextloader': {
    'minWidth': [{ 'unit': 'rem', 'value': 3.42857143 }],
    'paddingTop': [{ 'unit': 'rem', 'value': 4.21428571 }]
  },
  'uibigtextloader': {
    'minWidth': [{ 'unit': 'rem', 'value': 3.71428571 }],
    'paddingTop': [{ 'unit': 'rem', 'value': 4.5 }]
  },
  'uihugetextloader': {
    'minWidth': [{ 'unit': 'rem', 'value': 4.14285714 }],
    'paddingTop': [{ 'unit': 'rem', 'value': 4.92857143 }]
  },
  'uimassivetextloader': {
    'minWidth': [{ 'unit': 'rem', 'value': 4.57142857 }],
    'paddingTop': [{ 'unit': 'rem', 'value': 5.35714286 }]
  },
  // -------------------
       Inverted
--------------------
  'uiinvertedloader': {
    'color': 'rgba(255, 255, 255, 0.9)'
  },
  'uiinvertedloader:before': {
    'borderColor': 'rgba(255, 255, 255, 0.15)'
  },
  'uiinvertedloader:after': {
    'borderTopColor': '#FFFFFF'
  },
  // -------------------
       Inline
--------------------
  'uiinlineloader': {
    'position': 'relative',
    'verticalAlign': 'middle',
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }],
    'left': [{ 'unit': 'em', 'value': 0 }],
    'top': [{ 'unit': 'em', 'value': 0 }],
    'WebkitTransform': 'none',
    'transform': 'none'
  },
  'uiinlineloaderactive': {
    'display': 'inline-block'
  },
  'uiinlineloadervisible': {
    'display': 'inline-block'
  },
  // Centered Inline
  'uicenteredinlineloaderactive': {
    'display': 'block',
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'uicenteredinlineloadervisible': {
    'display': 'block',
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }]
  },
  // ******************************
         Theme Overrides
******************************
  // ******************************
         Site Overrides
******************************
});
