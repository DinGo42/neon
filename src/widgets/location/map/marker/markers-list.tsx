import { Marker, InfoWindow } from '@react-google-maps/api';
import Link from 'next/link';
import { officeMark, offices } from '../constant';
import { Dispatch, FC, SetStateAction } from 'react';
type MarkerListProps = {
  selectedMarker: officeMark | null;
  setSelectedMarker: Dispatch<SetStateAction<officeMark | null>>;
};
export const MarkersList: FC<MarkerListProps> = ({
  selectedMarker,
  setSelectedMarker,
}) => (
  <>
    {offices.map((office, index) => (
      <Marker
        {...office}
        key={index}
        animation={google.maps.Animation.DROP}
        onClick={() => setSelectedMarker(office)}
      />
    ))}
    {selectedMarker && (
      <InfoWindow
        position={selectedMarker.position}
        onCloseClick={() => setSelectedMarker(null)}
      >
        <div className="text-black-600 flex flex-col gap-6">
          <h1>{selectedMarker.content}</h1>
          <p className="whitespace-pre-line break-words">
            {selectedMarker.subContent}
          </p>
          <Link
            href={'https://goo.gl/maps/f7XH1LsMeMfNhKE18'}
            className="text-blue-500 hover:underline"
          >
            Переглянути на картах
          </Link>
        </div>
      </InfoWindow>
    )}
  </>
);
