'use client';
import { GoogleMap, useLoadScript, Polyline } from '@react-google-maps/api';
import { FC, useMemo, useRef, useState } from 'react';
import { officeMark, mainOffice } from './constant';
import { MarkersList } from './marker/markers-list';
import 'dotenv/config';

export const Map: FC = () => {
  const [selectedMarker, setSelectedMarker] = useState<officeMark | null>(null);
  const mapRef = useRef<GoogleMap>(null);
  const wayToTheOffice = useMemo(
    () => [
      { lat: 49.410093689516565, lng: 32.02415371429158 },
      { lat: 49.41019641394992, lng: 32.02391463554305 },
      { lat: 49.41018467402556, lng: 32.02375224243085 },
      { lat: 49.41123538613682, lng: 32.02165466473151 },
      { lat: 49.4115008753255, lng: 32.02179937480394 },
      { lat: 49.41174961059745, lng: 32.021503054406224 },
      { lat: 49.41191365637788, lng: 32.02191611534322 },
    ],
    []
  );

  const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    padding: '10px',
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || 'key is expired',
  });
  if (!isLoaded) {
    return (
      <p className="relative left-[40%] phoneM:left-[50%] pt-48">Loading...</p>
    );
  }

  return (
    <GoogleMap
      ref={mapRef}
      mapContainerStyle={containerStyle}
      center={mainOffice}
      zoom={16}
      options={{
        mapId: '9223276839a83cdf',
        scrollwheel: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      <MarkersList
        selectedMarker={selectedMarker}
        setSelectedMarker={setSelectedMarker}
      />
      {wayToTheOffice.length > 1 && (
        <Polyline
          path={wayToTheOffice}
          options={{
            strokeColor: '#FF0000',
            strokeOpacity: 1,
            strokeWeight: 8,
          }}
        />
      )}
    </GoogleMap>
  );
};
