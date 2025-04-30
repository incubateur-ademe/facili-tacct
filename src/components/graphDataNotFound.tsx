import Image from 'next/image';

export const DataNotFoundForGraph = ({ image }: { image: string }) => {
  return (
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
  );
}
export default DataNotFoundForGraph;
