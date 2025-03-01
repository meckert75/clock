import React, { useEffect, useRef } from 'react';

const getHoursForTimezone = (date, timezone) => {
  return parseInt(date.toLocaleString('en-US', { hour: 'numeric', hour12: false, timeZone: timezone }), 10);
};

const getMinutesForTimezone = (date, timezone) => {
  return parseInt(date.toLocaleString('en-US', { minute: 'numeric', timeZone: timezone }), 10);
};

const Clock = ({ time, timezone }) => {
  const hourHandRef = useRef(null);
  const minuteHandRef = useRef(null);
  const secondHandRef = useRef(null);

  useEffect(() => {
    const hourHand = hourHandRef.current;
    const minuteHand = minuteHandRef.current;
    const secondHand = secondHandRef.current;

    const updateClock = () => {
      const seconds = time.getSeconds() + time.getMilliseconds() / 1000;
      const minutes = getMinutesForTimezone(time, timezone);
      const hours = getHoursForTimezone(time, timezone);

      const secondDeg = (360 * (seconds > 59 ? 0 : seconds)) / 59;
      const minuteDeg = (360 * minutes) / 60;
      const hourDeg = (360 * (60 * (hours % 12) + minutes)) / 720;

      secondHand.style.transition = "transform 0.04s linear";
      secondHand.setAttribute('transform', `rotate(${secondDeg}, 60, 60)`);
      minuteHand.style.transition = "transform 1.0s linear";
      minuteHand.setAttribute('transform', `rotate(${minuteDeg}, 60, 60)`);
      hourHand.style.transition = "transform 1.0s linear";
      hourHand.setAttribute('transform', `rotate(${hourDeg}, 60, 60)`);
    };

    updateClock(); // Initial call to set the clock immediately
  }, [time]);
  
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 111 111"
      version="1.1"
      id="svg1"
      xmlSpace="preserve"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      className="responsive-clock"
    >
        <defs id="defs1">
            <linearGradient id="linearGradient80">
                <stop id="stop80" style={{ stopColor: '#666666', stopOpacity: 1 }} offset="0" />
                <stop id="stop83" style={{ stopColor: '#808080', stopOpacity: 1 }} offset="0.0884808" />
                <stop id="stop82" style={{ stopColor: '#a7a7a7', stopOpacity: 1 }} offset="0.87479132" />
                <stop id="stop81" style={{ stopColor: '#dedede', stopOpacity: 1 }} offset="1" />
            </linearGradient>
            <linearGradient id="linearGradient81"
                xlinkHref="#linearGradient80"
                x1="83.244217"
                y1="109.84715"
                x2="36.756207"
                y2="10.153291"
                gradientUnits="userSpaceOnUse" />
        </defs>
        <g id="clock_face"
            style={{ display: 'inline' }}
            transform="translate(-5,-5)">
            <circle id="clock_face_bg"
                style={{ display: 'inline', fill: '#ffffff', fillOpacity: 1, stroke: 'none', strokeWidth: 0.3, strokeDasharray: 'none', strokeOpacity: 1 }}
                cx="60"
                cy="60"
                r="55" />
            <path id="minute_ticks"
                style={{ strokeWidth: 0.140937 }}
                d="m 60.700065,11.499797 -1.399877,4.37e-4 6.3e-5,3.499585 1.399824,7.8e-5 z m 8.698838,0.914285 -0.727721,3.423612 1.369764,0.291018 0.727667,-3.423098 z m -13.772301,-0.721631 -1.392335,0.1462 0.365758,3.480865 1.392335,-0.146201 z m 18.694842,1.964907 -1.081478,3.328754 1.331512,0.432488 1.081479,-3.328753 z m -23.720536,-1.242945 -1.369105,0.291015 0.727742,3.423302 1.369105,-0.291015 z m 28.486302,2.994031 -1.423583,3.197188 1.279194,0.569363 1.423584,-3.197188 z M 45.678406,13.657478 44.346894,14.090142 45.42858,17.418664 46.760092,16.986 Z m 37.96529,3.990313 -1.750087,3.030891 1.212459,0.700045 1.750087,-3.03089 z m -47.287694,-5.9e-5 -1.212023,0.699831 1.749958,3.031396 1.212077,-0.700346 z m 55.576761,5.841353 -2.341926,2.600801 1.03998,0.937046 2.342494,-2.601261 z m -59.873858,-3.13792 -1.132994,0.822972 2.057281,2.83143 1.132994,-0.822972 z m 63.515491,6.675747 -2.601012,2.341824 0.936616,1.040497 2.601012,-2.341824 z m -67.506977,-3.538013 -1.040551,0.93713 2.341824,2.601011 1.04055,-0.937129 z m 70.758355,7.437003 -2.83143,2.05728 0.822972,1.132994 2.83143,-2.05728 z m -74.400148,-3.898788 -0.936532,1.040034 2.600801,2.341926 0.937047,-1.03998 z m 77.226724,8.116856 -3.031398,1.749958 0.700346,1.212076 3.030882,-1.750012 z m -83.304504,-2.14e-4 -0.700045,1.212459 3.03089,1.750087 0.700046,-1.212459 z m 87.561924,9.203129 -3.32852,1.081686 0.43266,1.331511 3.32852,-1.081686 z m -89.932008,-4.712865 -0.569309,1.278681 3.197189,1.423583 0.569309,-1.27868 z m 91.316718,9.597774 -3.4233,0.727742 0.29102,1.369104 3.4233,-0.727741 z m -93.204624,-4.88484 -0.432489,1.331513 3.328754,1.081478 0.432489,-1.331512 z m 94.071404,9.887303 -3.48086,0.365759 0.1462,1.392335 3.48086,-0.365759 z m -95.455691,-5.002445 -0.291478,1.369196 3.423612,0.727721 0.290964,-1.36925 z m 95.794621,10.068421 -3.5001,9e-6 -8e-5,1.399823 3.5001,-9e-6 z m -93.500284,-3.97e-4 -3.500099,9e-6 3.82e-4,1.400392 3.499585,-6.3e-5 z m 89.162314,9.371337 -0.29102,1.369764 3.42361,0.72772 0.29102,-1.369764 z m -88.988895,-4.663622 -3.480865,0.365758 0.146201,1.392335 3.480864,-0.365758 z m 87.840475,9.232406 -0.43249,1.331512 3.32875,1.081478 0.43249,-1.331512 z m -87.176076,-4.568696 -3.423302,0.727742 0.290962,1.369618 3.423302,-0.727741 z m 85.556556,8.992356 -0.56936,1.279195 3.19718,1.423583 0.56937,-1.279194 z m -84.40827,-4.423798 -3.328522,1.081686 0.432663,1.331512 3.328522,-1.081686 z m 82.335219,8.653781 -0.700045,1.212459 3.030886,1.750087 0.70005,-1.212459 z m -78.642607,2.97e-4 -3.030881,1.750012 0.699778,1.212537 3.031449,-1.750472 z m 73.231403,7.696931 -0.937046,1.03998 2.601261,2.342493 0.936586,-1.040547 z m -70.727474,-3.706589 -2.83143,2.057281 0.823026,1.13248 2.83143,-2.057281 z m 67.448624,7.089136 -1.040497,0.936616 2.341824,2.601012 1.040496,-0.936616 z m -64.541255,-3.382706 -2.601012,2.341823 0.93713,1.040551 2.601012,-2.341824 z m 60.926809,6.403665 -1.132481,0.823026 2.057281,2.83143 1.13248,-0.823026 z m -57.647626,-3.021365 -2.34198,2.601316 1.040034,0.936532 2.341926,-2.600801 z m 53.73688,5.647974 -1.212076,0.700346 1.750012,3.030881 1.212536,-0.69978 z m -46.212131,2.31e-4 -1.750087,3.030886 1.212459,0.70005 1.750087,-3.03089 z m 37.677488,3.960066 -1.331511,0.43266 1.081686,3.32852 1.331511,-0.43266 z m -33.513727,-1.75628 -1.423584,3.19719 1.278681,0.56931 1.423584,-3.19719 z m 28.983276,3.04627 -1.369618,0.29096 0.727741,3.4233 1.369619,-0.29096 z m -24.612447,-1.28993 -1.081478,3.32876 1.331512,0.43248 1.081478,-3.32875 z m 19.971453,2.09909 -1.392335,0.1462 0.365759,3.48086 1.392335,-0.1462 z m -15.440407,-0.80915 -0.72772,3.42362 1.36925,0.29096 0.72772,-3.42361 z m 10.740695,1.1289 -1.400337,-1.3e-4 9e-6,3.50009 1.400337,1.4e-4 z"
                transform="rotate(-6,60,60)" />
            <path id="hour_ticks"
                style={{ display: 'inline', fill: '#000000', fillOpacity: 1, stroke: 'none', strokeWidth: 0.258934, strokeDasharray: 'none', strokeOpacity: 1 }}
                width="12"
                height="3.5"
                x="11.5"
                y="58.25"
                d="m 11.5,58.25 h 12 v 3.5 h -12 z m 5.622768,24.484456 10.392305,-6 1.75,3.031088 -10.392305,6 z m 17.111688,18.392774 6,-10.392303 3.031088,1.75 -6,10.392303 z M 58.25,108.5 v -12 h 3.5 v 12 z m 24.484456,-5.62277 -6,-10.392303 3.031088,-1.75 6,10.392303 z m 18.392774,-17.111686 -10.392303,-6 1.75,-3.031088 10.392303,6 z M 108.5,61.75 h -12 v -3.5 h 12 z m -5.62277,-24.484456 -10.392303,6 -1.75,-3.031088 10.392303,-6 z m -17.111686,-18.392776 -6,10.392305 -3.031088,-1.75 6,-10.392305 z M 61.75,11.5 v 12 h -3.5 v -12 z m -24.484456,5.622768 6,10.392305 -3.031088,1.75 -6,-10.392305 z m -18.392776,17.111688 10.392305,6 -1.75,3.031088 -10.392305,-6 z" />
            <path id="clock_frame"
                style={{ display: 'inline', fill: 'url(#linearGradient81)', fillOpacity: 1, stroke: 'none', strokeWidth: 0.205697, strokeOpacity: 1 }}
                d="M 60,5 A 55,55 0 0 0 5,60 55,55 0 0 0 60,115 55,55 0 0 0 115,60 55,55 0 0 0 60,5 Z m 0,2.5 A 52.5,52.5 0 0 1 112.5,60 52.5,52.5 0 0 1 60,112.5 52.5,52.5 0 0 1 7.5,60 52.5,52.5 0 0 1 60,7.5 Z" />
            <circle
              cx="60"
              cy="60"
              r="54.75"
              style={{ fill: 'none', stroke: 'black', strokeWidth: 0.5 }}
            />
      </g>
      <g id="layer3" transform="translate(-5,-5)">
        <path id="hour_hand"
          ref={hourHandRef}
          style={{ strokeWidth: 0.3 }}
          d="m 57.399998,28 h 5.199997 L 63.2,72 h -6.4 z" />
        <path id="minute_hand"
          ref={minuteHandRef}
          style={{ strokeWidth: 0.3 }}
          d="m 58.2,14 h 3.599998 L 62.6,72 h -5.2 z" />
        <path id="second_hand"
          ref={secondHandRef}
          style={{ fill: '#eb0000', fillOpacity: 1, stroke: 'none', strokeWidth: 0.3, strokeDasharray: 'none', strokeOpacity: 1 }}
          d="m 59.999955,23.549984 a 5.25,5.25 0 0 0 -5.249809,5.249808 5.25,5.25 0 0 0 4.55011,5.2002 V 76.50024 h 1.399915 V 33.999992 a 5.25,5.25 0 0 0 4.549593,-5.2002 5.25,5.25 0 0 0 -5.249809,-5.249808 z"
        />
      </g>
    </svg>
  );
};

export default Clock;
