import Image from 'next/image';

export function Character(item: any) {
  return <div className='max-w-sm rounded overflow-hidden shadow-lg px-6 py-4 bg-white' key={item.id}>
    <Image
      src={item.image}
      width={500}
      height={500}
      alt={item.name}
      className='w-full' />

    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center"> {item.name} </div>
    </div>
  </div>;
}