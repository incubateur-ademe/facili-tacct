import Image, { StaticImageData } from 'next/image';

const DataNotFoundForGraph = ({ image }: { image: string | StaticImageData }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '500px',
        width: '100%'
      }}
    >
      <div
        style={{
          height: 'inherit',
          alignContent: 'center',
          textAlign: 'center'
        }}
        key="noData"
      >
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          style={{ width: '90%', height: 'auto' }}
        />
      </div>
    </div>
  );
}
export default DataNotFoundForGraph;
