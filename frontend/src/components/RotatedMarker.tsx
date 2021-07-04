import { forwardRef, useRef, useEffect, ReactNode } from 'react';
import { Marker, MarkerProps } from "react-leaflet";
import "leaflet-rotatedmarker";

type Props = MarkerProps & { children?: ReactNode, rotationAngle: number, rotationOrigin: string };

const RotatedMarker = forwardRef<HTMLElement, Props>(({ children, ...props }, forwardRef) => {
    const markerRef = useRef();
  
    const { rotationAngle, rotationOrigin } = props;
    useEffect(() => {
      const marker = markerRef.current;
      if (marker) {
        //@ts-ignore
        marker.setRotationAngle(rotationAngle);
        //@ts-ignore
        marker.setRotationOrigin(rotationOrigin);
      }
    }, [rotationAngle, rotationOrigin]);
    
    return (
      <Marker
      ref={(ref) => {
          //@ts-ignore
          markerRef.current = ref;
          if (forwardRef) {
            //@ts-ignore
            forwardRef.current = ref;
          }
        }}
        {...props}
      >
        {children}
      </Marker>
    );
});

export default RotatedMarker;
