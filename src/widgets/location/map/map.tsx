'use client';
import { GoogleMap, useLoadScript, Polyline } from '@react-google-maps/api';
import { FC, useRef, useState } from 'react';
import { officeMark, mainOffice } from './constant';
import { MarkersList } from './marker/markers-list';
import { apiKey } from './api/api_key';

const wayToTheOffice = [
  { lat: 49.410093689516565, lng: 32.02415371429158 },
  { lat: 49.41019641394992, lng: 32.02391463554305 },
  { lat: 49.41018467402556, lng: 32.02375224243085 },
  { lat: 49.41123538613682, lng: 32.02165466473151 },
  { lat: 49.4115008753255, lng: 32.02179937480394 },
  { lat: 49.41174961059745, lng: 32.021503054406224 },
  { lat: 49.41191365637788, lng: 32.02191611534322 },
];
const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '20px',
  padding: '10px',
};

export const Map: FC = () => {
  const [selectedMarker, setSelectedMarker] = useState<officeMark | null>(null);
  const mapRef = useRef<GoogleMap>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
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
      zoom={15}
      options={{
        zoomControl: true,
        styles: [
          { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
          {
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#242f3e' }],
          },
          {
            elementType: 'labels.text.fill',
            stylers: [{ color: '#746855' }],
          },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#263c3f' }],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#6b9a76' }],
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#38414e' }],
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#212a37' }],
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9ca5b3' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#746855' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#1f2835' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#f3d19c' }],
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#2f3948' }],
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#17263c' }],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#515c6d' }],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#17263c' }],
          },
        ],
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
