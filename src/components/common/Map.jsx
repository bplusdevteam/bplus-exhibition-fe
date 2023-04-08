import { compose, withProps } from "recompose";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{
      lat: props?.position?.lat || 16.047079,
      lng: props?.position?.lng || 108.206230,
    }}
  >
    {props?.position && (
      <Marker
        position={{ lat: props?.position?.lat, lng: props?.position?.lng }}
      />
    )}
  </GoogleMap>
));

export default MyMapComponent;
